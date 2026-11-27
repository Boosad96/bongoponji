import { toBengali, type Region } from './bengali';
import { dayNumber, isoDay } from './dates';

export function monthWeeks(year: number, month: number, region: Region) {
  const start = dayNumber(`${year}-${String(month).padStart(2,'0')}-01`);
  const end = month === 12 ? dayNumber(`${year + 1}-01-01`) : dayNumber(`${year}-${String(month + 1).padStart(2,'0')}-01`);
  const weekday = ((start + 4) % 7 + 7) % 7;
  const cells = Array.from({length: weekday + end - start}, (_, i) => {
    if (i < weekday) return null;
    const iso = isoDay(start + i - weekday);
    return { iso, number: i - weekday + 1, bengali: region === 'bangladesh' ? toBengali(iso) : null };
  });
  while (cells.length % 7) cells.push(null);
  return Array.from({length: cells.length / 7}, (_, i) => cells.slice(i * 7, i * 7 + 7));
}
