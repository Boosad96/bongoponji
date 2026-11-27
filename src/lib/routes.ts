import { bdYears, festivals, gregorianMonths, gregorianSlugs, muhurats, years } from './site';
import { months, monthSlugs } from './bengali';
import { bn } from './dates';
import { verifiedFestivals } from './verified-festivals';
type Page = {
  slug: string; title: string; description: string; kind: 'text' | 'gregorian' | 'bengali' | 'converter' | 'pending' | 'birthday' | 'age';
  festival?: typeof verifiedFestivals[number];
  noindex?: boolean; year?: number; month?: number; links?: { label: string; href: string }[]; bd?: boolean;
};
const link = (slug: string, label: string) => ({ href: `/${slug}/`, label });
const text = (slug: string, title: string, description: string, kind: Page['kind'] = 'text', noindex = false): Page =>
  ({slug, title, description, kind, noindex});
const gregorian: Page[] = years.flatMap(year => {
  const slug = `calendar/${year}`;
  const monthsList = gregorianSlugs.map((month, i): Page => ({
    ...text(`${slug}/${month}`, `${gregorianMonths[i]} ${bn(year)} ক্যালেন্ডার`,
      `${gregorianMonths[i]} ${bn(year)} মাসের গ্রেগরিয়ান দিন ও বাংলাদেশের নাগরিক বাংলা তারিখ।`, 'gregorian'),
    year, month: i+1, bd: true, links: [link(slug, `${bn(year)} সালের সব মাস`),
      ...[i-1,i+1].filter(n => gregorianSlugs[n]).map(n => link(`${slug}/${gregorianSlugs[n]}`, gregorianMonths[n]))],
  }));
  return [{
    ...text(slug, `ক্যালেন্ডার ${bn(year)}`, `${bn(year)} সালের বারো মাসের গ্রেগরিয়ান ক্যালেন্ডার ও বাংলাদেশের নাগরিক বাংলা তারিখ।`, 'gregorian'),
    year, bd: true, links: monthsList.map(page => link(page.slug, gregorianMonths[page.month!-1])),
  }, ...monthsList];
});
const bengali: Page[] = bdYears.flatMap(year => {
  const slug = `calendar/bengali-year/${year}`;
  const entries = monthSlugs.map((month, i): Page => ({
    ...text(`${slug}/${month}`, `${months[i]} ${bn(year)}`, `বাংলাদেশের নাগরিক বর্ষপঞ্জি অনুযায়ী ${months[i]} ${bn(year)} মাসের বাংলা ও গ্রেগরিয়ান দিন।`, 'bengali'),
    year, month: i+1, links: [link(slug,`বাংলা সন ${bn(year)}`)],
  }));
  return [{ ...text(slug, `বাংলা ক্যালেন্ডার ${bn(year)}`, `বাংলাদেশের সংশোধিত নাগরিক বর্ষপঞ্জি অনুযায়ী ${bn(year)} সনের সব মাস ও গ্রেগরিয়ান তারিখ।`, 'bengali'),
    year, links: entries.map((page,i) => link(page.slug, months[i])) }, ...entries];
});
const festivalPages = festivals.map(([slug,title,description]): Page => {
  const festival = verifiedFestivals.find(record => record.slug === slug);
  return festival
    ? { ...text(`festivals/${slug}/2027`, `${festival.title} ২০২৭`, festival.note), festival }
    : text(`festivals/${slug}/2027`, `${title} ২০২৭`, description, 'pending', true);
});
const muhuratPages = muhurats.map(([slug,title]) => text(`muhurat/${slug}/2027`, `${title} ২০২৭`, 'শুভ সময় নির্ধারণ একটি প্রথাগত বিশ্বাস। অঞ্চল ও পরিবারভেদে আচারের নিয়ম বদলাতে পারে। কলকাতার জন্য প্রযোজ্য রীতির নিয়ম ও সময় যাচাই হলে এখানে প্রকাশ করা হবে।', 'pending', true));
export const pages: Page[] = [
  {...text('calendar','বার্ষিক ও মাসিক ক্যালেন্ডার','গ্রেগরিয়ান বছর বা বাংলা সন বেছে নিয়ে বাংলাদেশের নাগরিক তারিখ ও মাস দেখুন।'),links:[
    ...years.map(year=>link(`calendar/${year}`,`${bn(year)} ক্যালেন্ডার`)),
    ...bdYears.map(year=>link(`calendar/bengali-year/${year}`,`বাংলা সন ${bn(year)}`))]},
  ...gregorian, ...bengali,
  {...text('bangladesh/calendar/2027','বাংলাদেশের নাগরিক বর্ষপঞ্জি ২০২৭','সংশোধিত নাগরিক বাংলা তারিখসহ ২০২৭ সালের ক্যালেন্ডার।','text',true),links:[link('calendar/2027','২০২৭ সালের ক্যালেন্ডার')]},
  {...text('festivals','বাংলার পূজা ও উৎসব','বাংলার পূজা, পারিবারিক উৎসব ও আঞ্চলিক আচার। ২০২৭ সালের দিনক্ষণ যাচাই চলছে।','text',true),links:[link('festivals/2027','২০২৭-এর উৎসব')]},
  {...text('festivals/2027','বাংলার উৎসব ২০২৭','পূজা ও উৎসবের পালনরীতি এবং যাচাইয়ের অবস্থা দেখুন।','pending',true),links:festivalPages.map(page=>link(page.slug,page.title))},
  ...festivalPages.map(page=>({...page,links:[link('festivals/2027','২০২৭-এর সব উৎসব'),link('sources','তথ্যসূত্র')]})),
  ...muhuratPages.map(page=>({...page,links:muhuratPages.filter(other=>other.slug!==page.slug).map(other=>link(other.slug,other.title))})),
  text('tools/date-converter','বাংলা তারিখ রূপান্তর','বাংলাদেশের সংশোধিত নাগরিক নিয়মে ১৬ অক্টোবর ২০১৯ থেকে ৩১ ডিসেম্বর ২০৯৯ পর্যন্ত বাংলা ও গ্রেগরিয়ান তারিখ রূপান্তর করুন।','converter'),
  text('tools/bengali-birthday','বাংলা জন্মদিন','বাংলাদেশের নাগরিক বর্ষপঞ্জিতে জন্মতারিখ ও পরের বাংলা জন্মদিন দেখুন।','birthday'),
  text('tools/age-calculator','বয়স গণনা','বাংলাদেশের নাগরিক বর্ষপঞ্জি অনুযায়ী পূর্ণ বয়স গণনা করুন।','age'),
  text('methodology','গণনাপদ্ধতি','বাংলাদেশের নাগরিক বাংলাবর্ষ ১৪ এপ্রিল শুরু হয়। প্রথম ছয় মাস ৩১ দিনের। ফাল্গুন সাধারণ বছরে ২৯ দিন এবং সংশ্লিষ্ট গ্রেগরিয়ান অধিবর্ষে ৩০ দিন। বাকি পাঁচ মাস ৩০ দিনের। পশ্চিমবঙ্গের সৌর বর্ষপঞ্জির জন্য পৃথক তথ্যসূত্র প্রযোজ্য।'),
  text('sources','তথ্যসূত্র','নাগরিক বর্ষপঞ্জি, আঞ্চলিক সৌর বর্ষপঞ্জি ও জ্যোতির্বৈজ্ঞানিক গণনার জন্য পর্যালোচিত তথ্যসূত্র।'),
  text('about','বঙ্গপঞ্জির পরিচয়','বঙ্গপঞ্জি বাংলা তারিখ দেখার, ক্যালেন্ডার পড়ার ও দিন রূপান্তরের একটি বাংলা ভাষার সরঞ্জাম।'),
  text('contact','যোগাযোগ','তারিখ বা তিথির সংশোধন, মতামত ও সাধারণ প্রশ্ন ইমেলে জানান।'),
  text('privacy','গোপনীয়তা নীতি','বঙ্গপঞ্জিতে ব্যবহার-পরিসংখ্যান, কুকি ও ইমেল যোগাযোগের তথ্য কীভাবে ব্যবহৃত হয়।'),
  text('terms','ব্যবহারের শর্ত','বঙ্গপঞ্জির পঞ্জিকা ও বর্ষপঞ্জির তথ্য ব্যবহার ও ভাগ করার শর্ত।'),
  text('corrections','সংশোধন নথি','তথ্যে গরমিল দেখলে সংশ্লিষ্ট পাতার ঠিকানা, শহর, তারিখ ও প্রামাণ্য সূত্র উল্লেখ করুন।','text',true),
];
export const indexablePaths = ['/', ...pages.filter(page => !page.noindex).map(page => `/${page.slug}/`)];
