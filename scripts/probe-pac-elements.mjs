// Research only. Values are candidates and never enter the publication dataset.
import { EclipticGeoMoon, MoonPhase, SearchMoonPhase, SunPosition } from 'astronomy-engine';
import { lahiriAyanamsa, NAKSHATRA_NAMES, YOGA_NAMES, MOVABLE_KARANAS, RASHI_NAMES } from '@grahan/vedic';
import { kolkataSunrise } from './prepare-kolkata-sample.mjs';
import { readFileSync } from 'node:fs';

const dayMs = 86_400_000;
const cycle = angle => (angle % 360 + 360) % 360;
const sun = date => SunPosition(date).elon;
const moon = date => EclipticGeoMoon(date).lon;
const ayanamsa = date => lahiriAyanamsa(+date / dayMs + 2440587.5);
const nakshatra = date => cycle(moon(date) - ayanamsa(date));
const yoga = date => cycle(sun(date) + moon(date) - 2 * ayanamsa(date));
const siderealSun = date => cycle(sun(date) - ayanamsa(date));
const segment = (angle, width) => Math.floor(angle / width);

function nextCrossing(start, angle, width, limit) {
  const initial = segment(angle(start), width);
  let low = +start;
  let high = low + limit * dayMs;
  if (segment(angle(new Date(high)), width) === initial) return null;
  while (high - low > 1000) {
    const middle = Math.floor((low + high) / 2);
    if (segment(angle(new Date(middle)), width) === initial) low = middle;
    else high = middle;
  }
  return new Date(high);
}

function ist(date) {
  return new Date(Math.round(+date / 60_000) * 60_000 + 19_800_000).toISOString().slice(0, 16);
}

function lunarElement(rise, angle, names) {
  const width = 360 / names.length;
  const end = nextCrossing(rise, angle, width, 3);
  if (!end) throw new Error('Lunar crossing outside search window');
  return [names[segment(angle(rise), width)], ist(end)];
}

function karanaName(slot) {
  if (slot === 0) return 'Kimstughna';
  if (slot <= 56) return MOVABLE_KARANAS[(slot - 1) % 7];
  return ['Shakuni', 'Chatushpada', 'Naga'][slot - 57];
}

const release = JSON.parse(readFileSync(new URL('../src/data/daily.v1.json', import.meta.url), 'utf8'));
for (const date of process.argv.slice(2)) {
  const approved = release.records.find(record => record.date === date && record.location === 'kolkata');
  const midnight = new Date(date + 'T00:00:00+05:30');
  if (!Number.isFinite(+midnight) || ist(midnight).slice(0, 10) !== date) throw new Error('Invalid date: ' + date);
  const ingress = nextCrossing(midnight, siderealSun, 30, 1);
  const result = { date, status: 'PENDING_VERIFICATION' };
  if (ingress && ist(ingress).startsWith(date)) {
    result.sankranti = [RASHI_NAMES[(segment(siderealSun(midnight), 30) + 1) % 12], ist(ingress)];
  }
  if (approved) {
    const rise = kolkataSunrise(date, approved.method);
    const slot = segment(MoonPhase(rise), 6);
    const karanaEnd = SearchMoonPhase((slot + 1) * 6 % 360, rise, 2).date;
    result.nakshatra = lunarElement(rise, nakshatra, NAKSHATRA_NAMES);
    result.yoga = lunarElement(rise, yoga, YOGA_NAMES);
    result.karana = [karanaName(slot), ist(karanaEnd)];
  }
  console.log(JSON.stringify(result));
}
