import { Body, EclipticGeoMoon, MoonPhase, Observer, SearchMoonPhase, SearchRiseSet, SunPosition } from 'astronomy-engine';
import { DAY_MS, dayNumber, localDate } from './dates';

export const engineVersion = 'astronomy-engine@2.1.19';
export const astronomyMethod = 'tropical-apparent-horizon-v1';
export type Location = { latitude: number; longitude: number; timezone: string };

export function localMidnight(iso: string, timezone: string) {
  const utc = dayNumber(iso) * DAY_MS;
  const format = new Intl.DateTimeFormat('en-US', { timeZone: timezone, timeZoneName: 'longOffset' });
  const offset = (time: number) => {
    const name = format.formatToParts(time).find(part => part.type === 'timeZoneName')?.value;
    if (name === 'GMT') return 0;
    const match = /^GMT([+-])(\d{2}):(\d{2})$/.exec(name ?? '');
    if (!match) throw new RangeError('Unable to read timezone offset');
    return (match[1] === '-' ? -1 : 1) * (Number(match[2]) * 60 + Number(match[3])) * 60_000;
  };
  const first = utc - offset(utc);
  return new Date(utc - offset(first));
}

export function horizonEvents(iso: string, location: Location) {
  const start = localMidnight(iso, location.timezone);
  const observer = new Observer(location.latitude, location.longitude, 0);
  const event = (body: Body, direction: 1 | -1) => {
    const date = SearchRiseSet(body, observer, direction, start, 1.1)?.date;
    return date && localDate(date, location.timezone) === iso ? date : null;
  };
  return {
    sunrise: event(Body.Sun, 1), sunset: event(Body.Sun, -1),
    moonrise: event(Body.Moon, 1), moonset: event(Body.Moon, -1),
  };
}

export function longitudes(instant: Date) {
  return { sun: SunPosition(instant).elon, moon: EclipticGeoMoon(instant).lon };
}

export function tithiAt(instant: Date) {
  const index = Math.floor(MoonPhase(instant) / 12);
  return {
    number: index % 15 + 1,
    paksha: index < 15 ? 'shukla' : 'krishna',
    endsAt: SearchMoonPhase(((index + 1) * 12) % 360, instant, 3)?.date ?? null,
  };
}

export function nextPhase(instant: Date, phase: 'full' | 'new') {
  return SearchMoonPhase(phase === 'full' ? 180 : 0, instant, 35)?.date ?? null;
}
