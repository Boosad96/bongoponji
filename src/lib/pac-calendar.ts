import { PAC_1433 } from '../data/pac-validation';
import { type BengaliDate } from './bengali';
import { dayNumber, isoDay } from './dates';

export const pacRange = { from: PAC_1433[0], to: '2027-04-13' } as const;
const starts = PAC_1433.map(dayNumber);

export function fromPac(iso: string): BengaliDate | null {
  const absolute = dayNumber(iso);
  if (iso < pacRange.from || iso > pacRange.to) return null;
  const index = starts.findLastIndex(start => start <= absolute);
  return { year: 1433, month: index + 1, day: absolute - starts[index] + 1 };
}

export function toPacGregorian({year,month,day}: BengaliDate): string | null {
  if (year !== 1433 || !Number.isInteger(month) || month < 1 || month > 12 ||
    !Number.isInteger(day) || day < 1 || day > 32) return null;
  const iso = isoDay(starts[month - 1] + day - 1);
  const check = fromPac(iso);
  return check?.month === month && check.day === day ? iso : null;
}
