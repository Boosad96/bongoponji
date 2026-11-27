import { Body, MoonPhase, Observer, SearchMoonPhase, SearchRiseSet } from 'astronomy-engine';
import { readFile } from 'node:fs/promises';

const engine = JSON.parse(await readFile(new URL('../package.json',import.meta.url))).dependencies['astronomy-engine'];
const observer = new Observer(22.5726, 88.3639, 0);
const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
const rounded = instant => new Date(Math.round(+instant / 60000) * 60000);
const generatedAt = new Date().toISOString();
const records = ['2026-11-27','2026-11-28','2026-11-29'].map(date => {
  const start = new Date(date + 'T00:00:00+05:30');
  const rise = SearchRiseSet(Body.Sun,observer,1,start,1).date;
  const set = SearchRiseSet(Body.Sun,observer,-1,start,1).date;
  const index = Math.floor(MoonPhase(rise) / 12);
  const end = SearchMoonPhase(((index + 1) * 12) % 360,rise,3).date;
  return {
    date, location: 'kolkata', region: 'west-bengal', method: 'drik-sunrise-tithi-v1',
    engine: 'astronomy-engine@' + engine, status: 'PENDING_VERIFICATION', generatedAt,
    value: { sunrise: format.format(rounded(rise)), sunset: format.format(rounded(set)),
      tithi: { paksha: index < 15 ? 'shukla' : 'krishna', number: index % 15 + 1, endsAt: rounded(end).toISOString() } },
  };
});
console.log(JSON.stringify({schemaVersion:1,records},null,2));
