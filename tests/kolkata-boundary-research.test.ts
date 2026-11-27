import { kolkataBoundaryCandidates } from '../scripts/check-kolkata-boundaries.mjs';
import { expect, it } from 'vitest';
import { PAC_1433 } from '../src/data/pac-validation';

it('keeps the Kolkata boundary candidates separate from the PAC fixture and release status', () => {
  const records = kolkataBoundaryCandidates();
  for (const year of [1433, 1434]) {
    expect(records.filter(record => record.year === year).map(record => record.month)).toEqual(
      Array.from({ length: 12 }, (_, index) => index + 1),
    );
  }
  expect(records.every(record => record.status === 'PENDING_VERIFICATION')).toBe(true);
  const differing = records.filter(record => record.year === 1433 && record.date !== PAC_1433[record.month - 1]);
  expect(differing.map(record => [record.month, record.date])).toEqual([
    [4, '2026-07-18'],
    [9, '2026-12-17'],
  ]);
});
