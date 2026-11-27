import { Body, GeoVector, MoonPhase, Observer, SearchAltitude, SearchMoonPhase, SearchRiseSet } from 'astronomy-engine';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { acceptedDailyMethods, correctedDailyMethod, legacyDailyMethod } from '../src/lib/daily-methods.mjs';

const engine = JSON.parse(await readFile(new URL('../package.json',import.meta.url))).dependencies['astronomy-engine'];
const observer = new Observer(22.5726, 88.3639, 0);
const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
const rounded = instant => new Date(Math.round(+instant / 60000) * 60000);
function horizonEvent(start, direction, method) {
  const baseline = SearchRiseSet(Body.Sun, observer, direction, start, 1).date;
  if (method === legacyDailyMethod) return baseline;
  const { x, y, z } = GeoVector(Body.Sun, baseline, true);
  const semidiameter = 959.63 / (3600 * Math.hypot(x, y, z));
  return SearchAltitude(Body.Sun, observer, direction, start, 1, -(0.6117 + semidiameter)).date;
}

export function kolkataDailyCandidates(dates, method = legacyDailyMethod) {
  if (!acceptedDailyMethods.includes(method)) throw new RangeError('Unsupported daily method: ' + method);
  const generatedAt = new Date().toISOString();
  return [...new Set(dates)].map(date => {
    const start = new Date(date + 'T00:00:00+05:30');
    if (!/^20[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(date) || !Number.isFinite(+start) || new Date(+start + 19800000).toISOString().slice(0,10) !== date) throw new RangeError('Invalid Kolkata civil date: ' + date);
    const rise = horizonEvent(start, 1, method);
    const set = horizonEvent(start, -1, method);
    const index = Math.floor(MoonPhase(rise) / 12);
    const end = SearchMoonPhase(((index + 1) * 12) % 360,rise,3).date;
    return {
      date, location: 'kolkata', region: 'west-bengal', method,
      engine: 'astronomy-engine@' + engine, status: 'PENDING_VERIFICATION', generatedAt,
      value: { sunrise: format.format(rounded(rise)), sunset: format.format(rounded(set)),
        tithi: { paksha: index < 15 ? 'shukla' : 'krishna', number: index % 15 + 1, endsAt: rounded(end).toISOString() } },
    };
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const useCorrectedMethod = args[0] === '--v2';
  if (useCorrectedMethod) args.shift();
  const method = useCorrectedMethod ? correctedDailyMethod : legacyDailyMethod;
  const dates = args;
  const defaults = ['2026-11-27','2026-11-28','2026-11-29'];
  const records = kolkataDailyCandidates(dates.length ? dates : defaults, method);
  console.log(JSON.stringify({schemaVersion:1,records},null,2));
}
