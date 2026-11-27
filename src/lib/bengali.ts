import { sources } from '../data/evidence';
import { bn, dayNumber, isoDay } from './dates';

export const months = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
  'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'] as const;
export const monthSlugs = ['baishakh', 'jyaishtha', 'ashar', 'srabon', 'bhadra', 'ashwin',
  'kartik', 'agrahayan', 'poush', 'magh', 'falgun', 'chaitra'] as const;
export type Region = 'west-bengal' | 'bangladesh';
export type BengaliDate = { year: number; month: number; day: number };
export const regionNames: Record<Region, string> = { 'west-bengal': 'পশ্চিমবঙ্গ', bangladesh: 'বাংলাদেশ' };
export const methods: Record<Region, string> = {
  'west-bengal': 'রাষ্ট্রীয় পঞ্চাঙ্গের বঙ্গ ও অসম সৌর বর্ষপঞ্জি',
  bangladesh: 'বাংলা একাডেমির সংশোধিত নাগরিক বর্ষপঞ্জি',
};
export const calendarEvidence = {
  bangladesh: { source: sources.bdRules, checked: '2026-11-27', version: 'bangla-academy-2019', from: '2019-10-16', to: '2099-12-31' },
} as const;
const isLeap = (year: number) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
const bdLengths = (year: number) => [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, isLeap(year + 594) ? 30 : 29, 30];
const bdStart = (year: number) => dayNumber(`${year + 593}-04-14`);
function covers(iso: string) {
  const { from, to } = calendarEvidence.bangladesh;
  return iso >= from && iso <= to;
}

export function toBengali(iso: string): BengaliDate | null {
  const absolute = dayNumber(iso);
  if (!covers(iso)) return null;
  const gregorianYear = Number(iso.slice(0, 4));
  const year = gregorianYear - (iso.slice(5) >= '04-14' ? 593 : 594);
  let offset = absolute - bdStart(year);
  for (const [index, length] of bdLengths(year).entries()) {
    if (offset < length) return { year, month: index + 1, day: offset + 1 };
    offset -= length;
  }
  throw new Error('Invalid Bangladesh calendar offset');
}

export function toGregorian(date: BengaliDate): string | null {
  const { year, month, day } = date;
  if (![year, month, day].every(Number.isInteger) || month < 1 || month > 12 || day < 1 || day > 32) return null;
  if (year < 1426 || year > 1506) return null;
  const index = month - 1;
  const start = bdStart(year) + bdLengths(year).slice(0, index).reduce((total, length) => total + length, 0);
  const iso = isoDay(start + day - 1);
  const roundTrip = toBengali(iso);
  return roundTrip?.year === year && roundTrip.month === month && roundTrip.day === day ? iso : null;
}
export const bengaliLabel = ({ year, month, day }: BengaliDate) => `${bn(day)} ${months[month - 1]} ${bn(year)}`;
