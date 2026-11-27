import { describe, expect, it } from 'vitest';
import { toBengali, toGregorian, calendarEvidence } from '../src/lib/bengali';
import { dayNumber, isoDay, localDate } from '../src/lib/dates';
import { PAC_1433 } from '../src/data/pac-validation';
import { fromPac, toPacGregorian, pacRange } from '../src/lib/pac-calendar';
import { horizonEvents, localMidnight, nextPhase, tithiAt } from '../src/lib/astronomy';
import { published, states, type RecordEnvelope } from '../src/lib/publication';

describe('regional date conversion', () => {
  it('round-trips every supported civil date in both methods', () => {
    for (const region of ['bangladesh', 'west-bengal'] as const) {
      const { from, to } = region === 'bangladesh' ? calendarEvidence.bangladesh : pacRange;
      for (let day = dayNumber(from); day <= dayNumber(to); day++) {
        const date = isoDay(day);
        const converted = region === 'bangladesh' ? toBengali(date) : fromPac(date);
        if (!converted || (region === 'bangladesh' ? toGregorian(converted) : toPacGregorian(converted)) !== date) throw new Error(`Round-trip failed for ${region} ${date}`);
      }
    }
  });
  it('checks Bangladesh civic dates and Falgun leap boundary', () => {
    expect(toBengali('2027-02-21')).toEqual({year: 1433, month: 11, day: 8});
    expect(toBengali('2027-03-26')).toEqual({year: 1433, month: 12, day: 12});
    expect(toBengali('2027-04-14')).toEqual({year: 1434, month: 1, day: 1});
    expect(toBengali('2027-12-16')).toEqual({year: 1434, month: 9, day: 1});
    expect(toGregorian({year: 1434, month: 11, day: 30})).toBe('2028-03-14');
    expect(toGregorian({year: 1433, month: 11, day: 30})).toBeNull();
  });
  it('checks each PAC month start and rejects uncovered dates', () => {
    PAC_1433.forEach((date, index) => expect(fromPac(date)).toEqual({year: 1433, month: index + 1, day: 1}));
    expect(fromPac('2027-04-14')).toBeNull();
    expect(toBengali('2019-10-15')).toBeNull();
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

import { dailyEngine, dailyMethod, verifiedDaily } from '../src/lib/daily';
it('publishes only one correctly keyed, chronological solar record', () => {
  const date = '2026-11-27';
  const record = {
    date, location: 'kolkata', region: 'west-bengal', method: dailyMethod, engine: dailyEngine,
    status: 'VERIFIED', generatedAt: '2026-11-27T00:00:00Z',
    evidence: { source: 'https://packolkata.imd.gov.in/', checked: date, redistribution: 'cleared' },
    value: {sunrise: '05:57', sunset: '16:51'},
  } as const;
  expect(verifiedDaily(date, 'kolkata', 'west-bengal', [record])).toBe(record);
  expect(verifiedDaily(date, 'kolkata', 'west-bengal', [record,record])).toBeNull();
  expect(verifiedDaily(date, 'kolkata', 'west-bengal', [{...record,value:{sunrise:'06:10',sunset:'06:01'}}])).toBeNull();
  expect(verifiedDaily('2026-11-28', 'kolkata', 'west-bengal', [record])).toBeNull();
});

import dataset from '../src/data/daily.v1.json';
it('rejects invalid release dataset versions, keys, and conflicting approvals', () => {
  expect(dataset.schemaVersion).toBe(1);
  const records = dataset.records as NonNullable<Parameters<typeof verifiedDaily>[3]>;
  for (const record of records ?? []) {
    expect(record.status).toBe('VERIFIED');
    expect(record.evidence?.origin).toBe('independent-computation');
    expect(['west-bengal','bangladesh']).toContain(record.region);
    if (record.region !== 'west-bengal' && record.region !== 'bangladesh') throw new Error('Unknown calendar region');
    expect(verifiedDaily(record.date, record.location, record.region, records)).toBe(record);
  }
});

it.each([
  ['2026-11-27','05:57','16:51',3,'2026-11-27T04:19:00Z'],
  ['2026-11-28','05:58','16:51',4,'2026-11-28T01:10:00Z'],
  ['2026-11-29','05:58','16:51',6,'2026-11-29T20:17:00Z'],
  ['2026-11-30','05:59','16:51',7,'2026-11-30T18:42:00Z'],
  ['2026-12-01','06:00','16:51',8,'2026-12-01T17:44:00Z'],
  ['2026-12-02','06:00','16:51',9,'2026-12-02T17:23:00Z'],
  ['2026-12-03','06:01','16:51',10,'2026-12-03T17:34:00Z'],
])('compares the published Kolkata sample to IMD for %s', (date, sunrise, sunset, number, end) => {
  const sample = verifiedDaily(date, 'kolkata', 'west-bengal');
  expect(sample).not.toBeNull();
  expect(sample?.value).toMatchObject({sunrise,sunset,tithi:{paksha:'krishna',number}});
  expect(Math.abs(Date.parse(sample?.value.tithi?.endsAt ?? '') - Date.parse(end))).toBeLessThanOrEqual(60000);
});

it('publishes only passing December dates in the PAC batch', () => {
  const held = new Set([4, 9, 15, 27]);
  for (let day = 4; day <= 31; day++) {
    const date = `2026-12-${String(day).padStart(2, '0')}`;
    const record = verifiedDaily(date, 'kolkata', 'west-bengal');
    expect(Boolean(record), date).toBe(!held.has(day));
    if (record) {
      expect(record.method).toBe([12, 29].includes(day) ? 'drik-sunrise-tithi-v2' : dailyMethod);
      expect(record.evidence.source).toBe(
        `https://packolkata.imd.gov.in/panchang/en/${day <= 21 ? 'agrahayana' : 'pausha'}`,
      );
    }
  }
  expect(verifiedDaily('2027-08-05', 'kolkata', 'west-bengal')).toBeNull();
});

it('publishes only passing January dates from the applicable PAC folio', () => {
  const held = new Set([4, 7, 17, 20, 24, 27, 30, 31]);
  for (let day = 1; day <= 31; day++) {
    const date = `2027-01-${String(day).padStart(2, '0')}`;
    const record = verifiedDaily(date, 'kolkata', 'west-bengal');
    expect(Boolean(record), date).toBe(!held.has(day));
    if (record) {
      expect(record.method).toBe([1, 5, 10, 13, 21, 23, 26].includes(day) ? 'drik-sunrise-tithi-v2' : dailyMethod);
      expect(record.evidence.source).toBe(
        `https://packolkata.imd.gov.in/panchang/en/${day <= 20 ? 'pausha' : 'magha'}`,
      );
    }
  }
});

it('publishes only passing February v2 dates from the applicable PAC folio', () => {
  const held = new Set([2, 5, 6, 7, 8, 10, 12, 15, 18, 19, 21, 23, 25]);
  for (let day = 1; day <= 28; day++) {
    const date = `2027-02-${String(day).padStart(2, '0')}`;
    const record = verifiedDaily(date, 'kolkata', 'west-bengal');
    expect(Boolean(record), date).toBe(!held.has(day));
    if (record) {
      expect(record.method).toBe('drik-sunrise-tithi-v2');
      expect(record.evidence.source).toBe(
        `https://packolkata.imd.gov.in/panchang/en/${day <= 19 ? 'magha' : 'phalguna'}`,
      );
    }
  }
});

import { bengaliBirthday } from '../src/lib/birthday';

it('computes completed civil Bengali years and handles leap Falgun anniversaries', () => {
  expect(bengaliBirthday('2020-04-14','2027-04-13')).toMatchObject({ age: 6, next: '2027-04-14' });
  expect(bengaliBirthday('2020-04-14','2027-04-14')).toMatchObject({ age: 7, next: '2027-04-14' });
  expect(bengaliBirthday('2024-03-14','2025-03-13')).toMatchObject({ age: 0, next: '2025-03-14' });
  expect(bengaliBirthday('2024-03-14','2025-03-14')).toMatchObject({ age: 1, next: '2025-03-14' });
  expect(bengaliBirthday('2019-10-15','2027-04-14')).toBeNull();
});
