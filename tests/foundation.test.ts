import { describe, expect, it } from 'vitest';
import { toBengali, toGregorian, calendarEvidence } from '../src/lib/bengali';
import { dayNumber, isoDay, localDate } from '../src/lib/dates';
import { PAC_1433 } from '../src/data/evidence';
import { horizonEvents, localMidnight, nextPhase, tithiAt } from '../src/lib/astronomy';
import { published, states, type RecordEnvelope } from '../src/lib/publication';

describe('regional date conversion', () => {
  it('round-trips every supported civil date in both methods', () => {
    for (const region of ['bangladesh', 'west-bengal'] as const) {
      const { from, to } = calendarEvidence[region];
      for (let day = dayNumber(from); day <= dayNumber(to); day++) {
        const date = isoDay(day);
        const converted = toBengali(date, region);
        if (!converted || toGregorian(converted, region) !== date) throw new Error(`Round-trip failed for ${region} ${date}`);
      }
    }
  });
  it('checks Bangladesh civic dates and Falgun leap boundary', () => {
    expect(toBengali('2027-02-21', 'bangladesh')).toEqual({year: 1433, month: 11, day: 8});
    expect(toBengali('2027-03-26', 'bangladesh')).toEqual({year: 1433, month: 12, day: 12});
    expect(toBengali('2027-04-14', 'bangladesh')).toEqual({year: 1434, month: 1, day: 1});
    expect(toBengali('2027-12-16', 'bangladesh')).toEqual({year: 1434, month: 9, day: 1});
    expect(toGregorian({year: 1434, month: 11, day: 30}, 'bangladesh')).toBe('2028-03-14');
    expect(toGregorian({year: 1433, month: 11, day: 30}, 'bangladesh')).toBeNull();
  });
  it('checks each PAC month start and rejects uncovered dates', () => {
    PAC_1433.forEach((date, index) => expect(toBengali(date, 'west-bengal')).toEqual({year: 1433, month: index + 1, day: 1}));
    expect(toBengali('2027-04-14', 'west-bengal')).toBeNull();
    expect(toBengali('2019-10-15', 'bangladesh')).toBeNull();
    expect(() => dayNumber('2026-02-29')).toThrow();
  });
});

describe('astronomy validation', () => {
  const kolkata = { latitude: 22.5726, longitude: 88.3639, timezone: 'Asia/Kolkata' };
  it('resolves each local date at its own midnight boundary', () => {
    expect(localMidnight('2026-11-28', 'Asia/Kolkata').toISOString()).toBe('2026-11-27T18:30:00.000Z');
    expect(localMidnight('2026-11-28', 'Asia/Dhaka').toISOString()).toBe('2026-11-27T18:00:00.000Z');
    const instant = new Date('2026-11-27T18:15:00Z');
    expect(localDate(instant, 'Asia/Kolkata')).toBe('2026-11-27');
    expect(localDate(instant, 'Asia/Dhaka')).toBe('2026-11-28');
  });
  it('changes tithi across the new-moon boundary', () => {
    const moon = nextPhase(new Date('2026-11-01T00:00:00Z'), 'new')!;
    const before = tithiAt(new Date(+moon - 60000));
    const after = tithiAt(new Date(+moon + 60000));
    expect([before.paksha, before.number, after.paksha, after.number]).toEqual(['krishna', 15, 'shukla', 1]);
    expect(Math.abs(+before.endsAt! - +moon)).toBeLessThan(5000);
  });
  it.each([
    ['2026-03-22', 339, 1069], ['2026-04-07', 324, 1074], ['2026-06-04', 291, 1098],
    ['2026-11-29', 358, 1011], ['2026-12-01', 360, 1011],
  ])('compares Kolkata solar events to PAC on %s', (day, rise, set) => {
    const midnight = localMidnight(day, kolkata.timezone);
    const events = horizonEvents(day, kolkata);
    expect(Math.abs((+events.sunrise! - +midnight) / 60000 - rise)).toBeLessThanOrEqual(2);
    expect(Math.abs((+events.sunset! - +midnight) / 60000 - set)).toBeLessThanOrEqual(2);
  });
});

it('blocks every nonverified state, mismatched dates and missing evidence', () => {
  const identity = { date: '2026-11-27', location: 'kolkata', region: 'west-bengal', method: 'test', engine: 'test' };
  const record: RecordEnvelope<number> = { ...identity, generatedAt: '2026-11-27T00:00:00Z', status: 'VERIFIED',
    evidence: { source: 'https://packolkata.imd.gov.in/', checked: '2026-11-27', redistribution: 'cleared' }, value: 1 };
  for (const status of states) expect(published({...record, status}, identity)).toBe(status === 'VERIFIED');
  expect(published(record, {...identity, date: '2026-11-28'})).toBe(false);
  expect(published({...record, evidence: undefined}, identity)).toBe(false);
});
