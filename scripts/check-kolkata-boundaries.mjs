// Research only. The output cannot be used by the West Bengal publication gate.
import { SunPosition } from 'astronomy-engine';
import { pathToFileURL } from 'node:url';

const dayMs = 86_400_000;
const calibrationDate = Date.UTC(2026, 8, 20);
const calibrationDegrees = 24.23329;
const precessionDegreesPerYear = 50.29 / 3600;
const meanMidnightOffsetMs = (5 * 3600 + 53 * 60 + 27) * 1000;

function siderealSign(instant) {
  const years = (instant - calibrationDate) / (365.25 * dayMs);
  const offset = calibrationDegrees + years * precessionDegreesPerYear;
  const longitude = SunPosition(new Date(instant)).elon - offset;
  return Math.floor((longitude + 360) % 360 / 30);
}

export function kolkataBoundaryCandidates() {
  const records = [];
  let previousSign;
  for (let day = Date.UTC(2026, 3, 1); day < Date.UTC(2028, 4, 1); day += dayMs) {
    // Select the sign at Kolkata local mean midnight ending the previous civil day.
    const sign = siderealSign(day - meanMidnightOffsetMs);
    if (previousSign !== undefined && sign !== previousSign) {
      const date = new Date(day).toISOString().slice(0, 10);
      const year = Number(date.slice(0, 4)) - (sign >= 9 ? 594 : 593);
      if (year === 1433 || year === 1434) {
        records.push({ year, month: sign + 1, date, status: 'PENDING_VERIFICATION' });
      }
    }
    previousSign = sign;
  }
  return records;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(JSON.stringify({
    location: 'kolkata',
    timezone: 'Asia/Kolkata',
    method: 'research-sidereal-mean-midnight',
    records: kolkataBoundaryCandidates(),
  }, null, 2));
}
