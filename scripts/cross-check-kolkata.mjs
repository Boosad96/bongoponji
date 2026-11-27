// Research output only. This script has no write path to the release dataset.
import { panchangAtSunrise } from '@grahan/vedic';
import { kolkataBoundaryCandidates } from './check-kolkata-boundaries.mjs';
import { kolkataDailyCandidates } from './prepare-kolkata-sample.mjs';

const timezone = 'Asia/Kolkata';
const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: timezone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
const minute = instant => Math.round(+instant / 60_000);
const localClock = instant => formatter.format(new Date(minute(instant) * 60_000));

function compare(dates) {
  return kolkataDailyCandidates(dates).map(({ date, value }) => {
    const [year, month, day] = date.split('-').map(Number);
    const result = panchangAtSunrise({ year, month, day, latitude: 22.5726, longitude: 88.3639, timezone });
    const tithi = result.tithi[0];
    if (!result.sunrise || !result.sunset || !tithi?.endsAt) throw new Error(`Incomplete Grahan result for ${date}`);
    const grahan = {
      sunrise: localClock(result.sunrise),
      sunset: localClock(result.sunset),
      tithi: { number: tithi.index % 15 + 1, paksha: tithi.paksha, endsAt: new Date(minute(tithi.endsAt) * 60_000).toISOString() },
    };
    const tithiEndDifferenceMinutes = minute(new Date(grahan.tithi.endsAt)) - minute(new Date(value.tithi.endsAt));
    const sameTithi = grahan.tithi.number === value.tithi.number && grahan.tithi.paksha === value.tithi.paksha;
    return {
      date, status: 'PENDING_VERIFICATION', astronomyEngine: value, grahan, tithiEndDifferenceMinutes,
      agreement: {
        sunrise: grahan.sunrise === value.sunrise,
        sunset: grahan.sunset === value.sunset,
        tithi: sameTithi,
        tithiEnd: sameTithi && Math.abs(tithiEndDifferenceMinutes) <= 1,
      },
    };
  });
}

const boundaryCandidates = kolkataBoundaryCandidates();
const dailyDates = [];
for (let day = Date.UTC(2026, 11, 4); day <= Date.UTC(2027, 11, 31); day += 86_400_000) {
  dailyDates.push(new Date(day).toISOString().slice(0, 10));
}
console.log(JSON.stringify({
  location: 'kolkata', timezone,
  boundaryDays: compare(boundaryCandidates.map(record => record.date)).map((row, i) => ({
    bengaliYear: boundaryCandidates[i].year, bengaliMonth: boundaryCandidates[i].month, ...row,
  })),
  dailyDates: compare(dailyDates),
}, null, 2));
