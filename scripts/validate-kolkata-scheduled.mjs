import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { kolkataDailyCandidates } from './prepare-kolkata-sample.mjs';
import { acceptedDailyMethods, correctedDailyMethod } from '../src/lib/daily-methods.mjs';

const root = new URL('../', import.meta.url);
const releaseFile = new URL('src/data/daily.v1.json', root);
const referenceFile = new URL('validation/approved-kolkata-references.json', root);
const clock = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
const iso = /^20\d{2}-\d{2}-\d{2}$/;
const dayMs = 86_400_000;
const blockedDates = new Set(['2026-12-09', '2027-01-31', '2027-08-05']);

function pacUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.origin === 'https://packolkata.imd.gov.in' && !url.username && !url.password &&
      (url.pathname.startsWith('/panchang/') || url.pathname.startsWith('/download/'));
  } catch {
    return false;
  }
}

function civilDate(value) {
  if (typeof value !== 'string' || !iso.test(value)) return false;
  const instant = Date.parse(value + 'T00:00:00Z');
  return Number.isFinite(instant) && new Date(instant).toISOString().slice(0, 10) === value;
}

function reviewedReference(row, today) {
  if (!row || typeof row !== 'object') return false;
  const { tithi } = row;
  return civilDate(row.date) && civilDate(row.reviewedOn) && row.reviewedOn <= today &&
    row.location === 'kolkata' && row.status === 'REFERENCE_REVIEWED' &&
    row.reuse === 'comparison-only' && pacUrl(row.source) && pacUrl(row.horizonSource) &&
    clock.test(row.sunrise) && clock.test(row.sunset) && row.sunrise < row.sunset &&
    tithi && ['shukla', 'krishna'].includes(tithi.paksha) &&
    Number.isInteger(tithi.number) && tithi.number >= 1 && tithi.number <= 15 &&
    typeof tithi.endsAt === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:00(?:\.000)?Z$/.test(tithi.endsAt) &&
    civilDate(tithi.endsAt.slice(0, 10)) && clock.test(tithi.endsAt.slice(11, 16)) &&
    Date.parse(tithi.endsAt) > Date.parse(`${row.date}T${row.sunrise}:00+05:30`) &&
    Date.parse(tithi.endsAt) < Date.parse(`${row.date}T${row.sunrise}:00+05:30`) + 2 * dayMs;
}

export function compareCandidate(candidate, reference, today) {
  if (blockedDates.has(candidate.date)) return 'WITHHELD_CONFLICT';
  if (!reference) return 'MISSING_REFERENCE';
  if (!reviewedReference(reference, today) || candidate.date !== reference.date ||
    candidate.status !== 'PENDING_VERIFICATION' || !acceptedDailyMethods.includes(candidate.method) ||
    candidate.location !== 'kolkata' || candidate.region !== 'west-bengal') return 'INVALID_REFERENCE_OR_CANDIDATE';
  const actual = candidate.value;
  if (actual.sunrise !== reference.sunrise || actual.sunset !== reference.sunset) return 'HORIZON_MISMATCH';
  if (actual.tithi.paksha !== reference.tithi.paksha || actual.tithi.number !== reference.tithi.number) return 'TITHI_MISMATCH';
  const difference = Math.abs(Date.parse(actual.tithi.endsAt) - Date.parse(reference.tithi.endsAt));
  return Number.isFinite(difference) && difference <= 60_000 ? 'PASSED' : 'TITHI_END_MISMATCH';
}

function datesInScope(scope) {
  if (!/^20\d{2}(?:-(?:0[1-9]|1[0-2]))?$/.test(scope)) throw new Error('Expected YYYY or YYYY-MM');
  const [year, month] = scope.split('-').map(Number);
  const start = Date.UTC(year, month ? month - 1 : 0, 1);
  const end = month ? Date.UTC(year, month, 1) : Date.UTC(year + 1, 0, 1);
  return Array.from({ length: (end - start) / dayMs }, (_, i) => new Date(start + i * dayMs).toISOString().slice(0, 10));
}

async function run() {
  const [scope, reportPath] = process.argv.slice(2);
  if (!reportPath) throw new Error('Provide a validation report path');
  const today = new Date().toISOString().slice(0, 10);
  const dataset = JSON.parse(await readFile(releaseFile, 'utf8'));
  const references = JSON.parse(await readFile(referenceFile, 'utf8'));
  if (dataset.schemaVersion !== 1 || !Array.isArray(dataset.records) || !Array.isArray(references)) {
    throw new Error('Unsupported dataset or reference format');
  }
  if (!references.every(row => reviewedReference(row, today))) throw new Error('Invalid reviewed reference');
  const indexed = new Map(references.map(row => [row.date, row]));
  if (indexed.size !== references.length) throw new Error('Duplicate reference dates');
  const existing = new Map(dataset.records.map(row => [row.date, row]));
  if (existing.size !== dataset.records.length) throw new Error('Duplicate approved dates');
  const decisions = [];
  const passed = [];
  const verificationErrors = [];
  for (const candidate of kolkataDailyCandidates(datesInScope(scope), correctedDailyMethod)) {
    const previous = existing.get(candidate.date);
    const reference = indexed.get(candidate.date);
    let status = compareCandidate(candidate, reference, today);
    if (previous) {
      const [rebuilt] = kolkataDailyCandidates([previous.date], previous.method);
      const old = previous.value;
      const fresh = rebuilt.value;
      if (previous.status !== 'VERIFIED' || rebuilt.engine !== previous.engine ||
        old.sunrise !== fresh.sunrise || old.sunset !== fresh.sunset ||
        old.tithi?.number !== fresh.tithi.number || old.tithi?.paksha !== fresh.tithi.paksha ||
        old.tithi?.endsAt !== fresh.tithi.endsAt) {
        verificationErrors.push(candidate.date);
        status = 'EXISTING_RECORD_CHANGED';
      } else if (reference) {
        const referenceCheck = compareCandidate(rebuilt, reference, today);
        if (referenceCheck !== 'PASSED') {
          verificationErrors.push(candidate.date);
          status = 'EXISTING_REFERENCE_MISMATCH';
        } else {
          status = 'EXISTING_REFERENCE_RECHECKED';
        }
      } else {
        status = 'EXISTING_REPRODUCED';
      }
    } else if (status === 'PASSED') {
      passed.push({
        ...candidate,
        status: 'VERIFIED',
        evidence: {
          source: reference.source, horizonSource: reference.horizonSource, checked: today,
          redistribution: 'cleared', origin: 'independent-computation',
        },
      });
    }
    decisions.push([candidate.date, status]);
  }
  const staged = verificationErrors.length ? [] : passed;
  const counts = Object.groupBy(decisions, ([, status]) => status);
  await writeFile(reportPath, [
    '# Kolkata calendar validation', '',
    `Scope: ${scope}. Candidates: ${decisions.length}. Approved for staging: ${staged.length}.`,
    'Existing records without a current reference were checked for reproducibility. The workflow records the push outcome separately.', '',
    ...Object.entries(counts).map(([status, rows]) => `- ${status}: ${rows.length}`), '',
    '| Date | Result |', '| --- | --- |',
    ...decisions.map(([date, status]) => `| ${date} | ${status} |`), '',
  ].join('\n'));
  if (verificationErrors.length) throw new Error('Existing records failed revalidation: ' + verificationErrors.join(', '));
  if (staged.length) {
    dataset.records.push(...staged);
    dataset.records.sort((a, b) => a.date.localeCompare(b.date));
    await writeFile(releaseFile, JSON.stringify(dataset, null, 2) + '\n');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await run();
