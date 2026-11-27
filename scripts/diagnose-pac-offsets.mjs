// Research only. Run with no arguments. No output enters the release dataset.
import {
  Body, DeltaT_EspenakMeeus, DeltaT_JplHorizons, Ecliptic, GeoVector, Observer,
  MoonPhase, SearchAltitude, SearchHourAngle, SearchMoonPhase, SearchRiseSet, SetDeltaTFunction, SunPosition,
} from 'astronomy-engine';
import { lahiriAyanamsa } from '@grahan/vedic';
import { readFileSync } from 'node:fs';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const daily = JSON.parse(read('../src/data/daily.v1.json')).records;
const report = read('../VALIDATION_REPORT.md');
const withheld = new Map();
for (const line of report.split('\n')) {
  const row = /^\| (20\d\d-\d\d-\d\d) \| (\d\d:\d\d) \/ .*? \| (\d\d:\d\d) \/ .*? \|.*\bWITHHELD \|$/.exec(line);
  if (row) withheld.set(row[1], row.slice(2, 4));
}
for (const record of daily) withheld.delete(record.date);
const controls = daily.map(({date, value}) => [date, [value.sunrise, value.sunset]]);
const examples = [...withheld, ...controls];
const minute = 60_000;
const day = 1440 * minute;
const ist = (date, clock = '00:00') => Date.parse(`${date}T${clock}:00+05:30`);
const clock = ms => new Date(Math.round(ms / minute) * minute + 330 * minute).toISOString().slice(11, 16);

const variants = [
  ['v2', {}],
  ['longitude inferred from PAC noon', { longitude: 88.375 }],
  ['nearest arcminute latitude only', { latitude: 22 + 34 / 60 }],
  ['PAC 31 arcminute refraction', { refraction: 31 / 60 }],
  ['PAC fixed 16 arcminute semidiameter', { semidiameter: 16 / 60 }],
  ['JPL delta T model', { deltaT: DeltaT_JplHorizons }],
  ['incorrect mean-time meridian sensitivity', { longitude: 82.5 }],
];
function horizon(date, direction, variant) {
  const observer = new Observer(variant.latitude ?? 22.5726, variant.longitude ?? 88.3639, 0);
  const start = new Date(ist(date));
  const baseline = SearchRiseSet(Body.Sun, observer, direction, start, 1).date;
  const { x, y, z } = GeoVector(Body.Sun, baseline, true);
  const radius = variant.semidiameter ?? 959.63 / (3600 * Math.hypot(x, y, z));
  return +SearchAltitude(Body.Sun, observer, direction, start, 1, -(radius + (variant.refraction ?? 0.6117))).date;
}
const baseline = new Map(examples.map(([date]) => [date, [horizon(date, 1, {}), horizon(date, -1, {})]]));
const pass = (values, expected) => values.every((instant, i) => clock(instant) === expected[i]);
console.log('variant | withheld both minutes | previously approved both minutes | newly broken v2 controls | rise/set shift ranges seconds');
const controlV2 = controls.filter(([date, expected]) => pass(baseline.get(date), expected));
for (const [name, variant] of variants) {
  SetDeltaTFunction(variant.deltaT ?? DeltaT_EspenakMeeus);
  const values = new Map(examples.map(([date]) => [date, [horizon(date, 1, variant), horizon(date, -1, variant)]]));
  const tally = rows => rows.filter(([date, expected]) => pass(values.get(date), expected)).length;
  const shifts = [0, 1].map(i => {
    const seconds = examples.map(([date]) => (values.get(date)[i] - baseline.get(date)[i]) / 1000);
    return [Math.min(...seconds), Math.max(...seconds)].map(n => n.toFixed(2)).join('…');
  });
  console.log([name, `${tally([...withheld])}/${withheld.size}`, `${tally(controls)}/${controls.length}`, controlV2.length - tally(controlV2), shifts.join(' / ')].join(' | '));
  if (name === 'PAC fixed 16 arcminute semidiameter') {
    for (const [date, expected] of withheld) {
      if (!pass(values.get(date), expected) || pass(baseline.get(date), expected)) continue;
      const rise = new Date(values.get(date)[0]);
      const phase = Math.floor(MoonPhase(rise) / 12);
      const end = SearchMoonPhase((phase + 1) * 12 % 360, rise, 3).date;
      console.log('fixed-radius additional horizon match:', date, expected, phase < 15 ? 'shukla' : 'krishna', phase % 15 + 1, end.toISOString());
    }
  }
}
SetDeltaTFunction(DeltaT_EspenakMeeus);

// PAC's listed mean offset and monthly apparent offsets are separate hypotheses.
const anchor = [
  ['2026-11-22', 6], ['2026-12-22', 12], ['2027-01-21', 18],
  ['2027-02-20', 23], ['2027-03-22', 26],
].map(([date, arcsec]) => [ist(date), 24 + 14 / 60 + arcsec / 3600]);
function pacApparent(ms) {
  const i = Math.min(anchor.length - 2, anchor.findLastIndex(([time]) => time <= ms));
  const [a, x] = anchor[i];
  const [b, y] = anchor[i + 1];
  return x + (y - x) * (ms - a) / (b - a);
}
const pacMean = ms => 24 + 13 / 60 + 24 / 3600 + (ms - ist('2026-03-22')) / (365.25 * day) * 50.29 / 3600;
const apparent = ms => SunPosition(new Date(ms)).elon;
const geometric = ms => Ecliptic(GeoVector(Body.Sun, new Date(ms), false)).elon;
const lahiri = ms => lahiriAyanamsa(ms / day + 2440587.5);
const cases = [
  ['2026-12-16', 240, '10:25'], ['2027-01-14', 270, '21:10'], ['2027-02-13', 300, '10:09'],
  ['2027-03-15', 330, '07:00'], ['2027-04-14', 0, '15:28'],
];
const combinations = [
  ['apparent/Lahiri', apparent, lahiri],
  ['apparent/PAC monthly', apparent, pacApparent],
  ['apparent/PAC mean', apparent, pacMean],
  ['geometric/Lahiri', geometric, lahiri],
  ['geometric/PAC monthly', geometric, pacApparent],
  ['geometric/PAC mean', geometric, pacMean],
];
console.log('\nvariant | date | PAC IST | calculated IST | rounded difference min');
for (const [name, sun, offset] of combinations) {
  for (const [date, target, expected] of cases) {
    let low = ist(date);
    let high = low + day;
    while (high - low > 1000) {
      const middle = Math.floor((low + high) / 2);
      const angle = (sun(middle) - offset(middle) - target + 540) % 360 - 180;
      if (angle < 0) low = middle;
      else high = middle;
    }
    console.log([name, date, expected, clock(high), Math.round((high - ist(date, expected)) / minute)].join(' | '));
  }
}

console.log('date | PAC Kolkata apparent noon | independent minus PAC seconds');
for (const [date, expected] of [
  ['2027-01-12', '11:44:37'], ['2027-01-13', '11:45:00'],
  ['2027-04-19', '11:35:43'], ['2027-04-20', '11:35:31'],
]) {
  const observed = SearchHourAngle(Body.Sun, new Observer(22.5726, 88.3639, 0), 0, new Date(ist(date))).time.date;
  const residual = (+observed - Date.parse(`${date}T${expected}+05:30`)) / 1000;
  console.log([date, expected, residual.toFixed(2)].join(' | '));
}
