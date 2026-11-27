export const DAY_MS = 86_400_000;
const isoPattern = /^\d{4}-\d{2}-\d{2}$/;
export function dayNumber(iso: string): number {
  if (!isoPattern.test(iso)) throw new RangeError('Invalid ISO date');
  const time = Date.parse(iso + 'T00:00:00Z');
  if (!Number.isFinite(time) || new Date(time).toISOString().slice(0, 10) !== iso) {
    throw new RangeError('Invalid civil date');
  }
  return time / DAY_MS;
}
export function isoDay(day: number): string {
  return new Date(day * DAY_MS).toISOString().slice(0, 10);
}
export function localDate(now: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const field = (type: string) => parts.find(part => part.type === type)?.value;
  return `${field('year')}-${field('month')}-${field('day')}`;
}
export const bn = (value: number | string) => String(value).replace(/[0-9]/g, digit => '০১২৩৪৫৬৭৮৯'[Number(digit)]);
export const ascii = (value: string) => value.replace(/[০-৯]/g, digit => String('০১২৩৪৫৬৭৮৯'.indexOf(digit)));
export const gregorianLabel = (iso: string) => new Intl.DateTimeFormat('bn-BD', {
  dateStyle: 'long', timeZone: 'UTC',
}).format(new Date(dayNumber(iso) * DAY_MS));
