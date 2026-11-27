import { dayNumber } from './dates';
export const states = ['GENERATED', 'PENDING_VERIFICATION', 'VERIFIED', 'CONFLICTING', 'FAILED'] as const;
export type State = typeof states[number];
export type RecordEnvelope<T> = {
  date: string;
  location: string;
  region: string;
  method: string;
  engine: string;
  status: State;
  generatedAt: string;
  evidence?: { source: string; checked: string; redistribution: 'cleared'; horizonSource?: string; origin?: 'independent-computation' };
  value: T;
};
export function published<T>(
  record: RecordEnvelope<T>,
  expected: Pick<RecordEnvelope<T>, 'date' | 'location' | 'region' | 'method' | 'engine'>,
): record is RecordEnvelope<T> & { evidence: NonNullable<RecordEnvelope<T>['evidence']> } {
  if (record.status !== 'VERIFIED' || !record.evidence || record.evidence.redistribution !== 'cleared') return false;
  if (!Object.entries(expected).every(([key, value]) => record[key as keyof typeof expected] === value)) return false;
  try {
    return dayNumber(record.date) > 0 && dayNumber(record.evidence.checked) > 0 &&
      new URL(record.evidence.source).protocol === 'https:' &&
      (!record.evidence.horizonSource || new URL(record.evidence.horizonSource).protocol === 'https:') && Number.isFinite(Date.parse(record.generatedAt));
  } catch {
    return false;
  }
}
