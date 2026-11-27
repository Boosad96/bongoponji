import dataset from '../data/daily.v1.json';
import { type Region } from './bengali';
import { dayNumber, localDate } from './dates';
import { published, type RecordEnvelope } from './publication';

export const dailyMethod = 'drik-sunrise-tithi-v1';
export const dailyEngine = 'astronomy-engine@2.1.19';
type Tithi = { paksha: string; number: number; endsAt: string };
type DailyValues = { sunrise: string; sunset: string; tithi?: Tithi };
const localClock = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
const records: RecordEnvelope<DailyValues>[] = dataset.records.map(record => ({
  ...record, evidence: record.evidence as RecordEnvelope<DailyValues>['evidence'], status: record.status as RecordEnvelope<DailyValues>['status'],
}));

export function verifiedDaily(
  date: string,
  location: string,
  region: Region,
  candidates = records,
) {
  if (dataset.schemaVersion !== 1) return null;
  const matches = candidates.filter(record => published(record, {
    date, location, region, method: dailyMethod, engine: dailyEngine,
  }));
  if (matches.length !== 1) return null;
  const record = matches[0];
  const { sunrise, sunset, tithi } = record.value ?? {};
  if (!localClock.test(sunrise) || !localClock.test(sunset) || sunrise >= sunset) return null;
  if (tithi) {
    const transition = new Date(tithi.endsAt);
    if (!['shukla','krishna'].includes(tithi.paksha) || !Number.isInteger(tithi.number) ||
      tithi.number < 1 || tithi.number > 15 || !Number.isFinite(+transition)) return null;
    const dayOffset = dayNumber(localDate(transition,'Asia/Kolkata')) - dayNumber(date);
    if (location !== 'kolkata' || dayOffset < 0 || dayOffset > 2 ||
      +transition <= Date.parse(`${date}T${sunrise}:00+05:30`)) return null;
  }
  return record;
}
