import { expect, it } from 'vitest';
import { compareCandidate } from '../scripts/validate-kolkata-scheduled.mjs';
import { kolkataDailyCandidates } from '../scripts/prepare-kolkata-sample.mjs';
import { correctedDailyMethod } from '../src/lib/daily-methods.mjs';

it('requires reviewed PAC evidence and every date-specific comparison before promotion', () => {
  const today = '2026-11-27';
  const [candidate] = kolkataDailyCandidates(['2027-05-01'], correctedDailyMethod);
  const reference = {
    date: candidate.date, location: 'kolkata', status: 'REFERENCE_REVIEWED', reuse: 'comparison-only',
    source: 'https://packolkata.imd.gov.in/panchang/test-fixture',
    horizonSource: 'https://packolkata.imd.gov.in/panchang/test-fixture',
    reviewedOn: today, ...candidate.value,
  };
  expect(compareCandidate(candidate, undefined, today)).toBe('MISSING_REFERENCE');
  expect(compareCandidate(candidate, {...reference, source: 'https://example.com'}, today)).toBe('INVALID_REFERENCE_OR_CANDIDATE');
  expect(compareCandidate(candidate, reference, today)).toBe('PASSED');
  expect(compareCandidate(candidate, {...reference, sunset:'18:00'}, today)).toBe('HORIZON_MISMATCH');
  expect(compareCandidate(candidate, {...reference, tithi:{...reference.tithi, number: 1 + reference.tithi.number % 15}}, today)).toBe('TITHI_MISMATCH');
  const delayedEnd = new Date(Date.parse(reference.tithi.endsAt) + 120_000).toISOString();
  expect(compareCandidate(candidate, {...reference, tithi:{...reference.tithi, endsAt:delayedEnd}}, today)).toBe('TITHI_END_MISMATCH');
  expect(compareCandidate({...candidate,date:'2027-08-05'}, reference, today)).toBe('WITHHELD_CONFLICT');
});
