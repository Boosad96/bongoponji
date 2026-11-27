import expansion from '../data/verified-elements.json';
import { published, type RecordEnvelope } from './publication';

const method = 'drik-lunar-elements-lahiri-v1';
const engine = 'astronomy-engine@2.1.19 + @grahan/vedic@1.0.1';
const source = 'https://packolkata.imd.gov.in/rashtriya-panchang-english.php';
type Element = { label: string; endsAt: string };
type Elements = { nakshatra: Element; yoga: Element; karana: Element };

function checked(
  date: string,
  nakshatra: Element,
  yoga: Element,
  karana: Element,
  generatedAt = '2026-11-27T12:57:08Z',
): RecordEnvelope<Elements> {
  return {
    date, location: 'kolkata', region: 'west-bengal', method, engine,
    status: 'VERIFIED', generatedAt,
    evidence: {
      source, checked: '2026-11-27', redistribution: 'cleared', origin: 'independent-computation',
    },
    value: { nakshatra, yoga, karana },
  };
}

function element(label: string, date: string, clock: string): Element {
  return { label, endsAt: `${date}T${clock}:00+05:30` };
}

// Independently calculated output. The PAC folio was used for comparison.
const records = [
  ...expansion.records.map(({ date, nakshatra, yoga, karana }) =>
    checked(date, nakshatra, yoga, karana, expansion.generatedAt),
  ),
  checked('2026-11-27', element('আর্দ্রা', '2026-11-27', '15:08'), element('শুভ', '2026-11-27', '23:51'), element('বিষ্টি', '2026-11-27', '09:50')),
  checked('2026-11-28', element('পুনর্বসু', '2026-11-28', '12:50'), element('শুক্ল', '2026-11-28', '20:18'), element('বালব', '2026-11-28', '06:41')),
  checked('2026-11-29', element('পুষ্যা', '2026-11-29', '11:00'), element('ব্রহ্ম', '2026-11-29', '17:08'), element('গর', '2026-11-29', '14:49')),
  checked('2027-04-14', element('পুনর্বসু', '2027-04-14', '10:52'), element('সুকর্মা', '2027-04-14', '11:10'), element('বব', '2027-04-14', '15:25')),
  checked('2027-04-15', element('পুষ্যা', '2027-04-15', '09:33'), element('ধৃতি', '2027-04-15', '08:23'), element('কৌলব', '2027-04-15', '13:22')),
];

export function verifiedElements(date: string, location: string, region: string) {
  const matches = records.filter(record => record.date === date && record.location === location && record.region === region);
  const [record] = matches;
  return matches.length === 1 && published(record, { date, location, region, method, engine })
    ? record
    : null;
}
