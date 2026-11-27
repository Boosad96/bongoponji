import { toBengali, toGregorian, type BengaliDate } from './bengali';

export function bengaliBirthday(birth: string, today: string) {
  const original = toBengali(birth);
  const current = toBengali(today);
  if (!original || !current || birth > today) return null;

  function anniversary(year: number) {
    const candidate: BengaliDate = { ...original!, year };
    const exact = toGregorian(candidate);
    if (exact || candidate.month !== 11 || candidate.day !== 30) return exact;
    return toGregorian({ ...candidate, day: 29 });
  }

  const thisYear = anniversary(current.year);
  if (!thisYear) return null;
  return {
    original,
    age: current.year - original.year - Number(today < thisYear),
    next: today <= thisYear ? thisYear : anniversary(current.year + 1),
  };
}
