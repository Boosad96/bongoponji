import { bn } from './dates';
export const gregorianMonths = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
export const gregorianSlugs = ['january','february','march','april','may','june','july','august','september','october','november','december'];
export const years = [2026, 2027, 2028];
export const bdYears = [1433, 1434, 1435];
export const unavailable = 'এই তথ্যের যাচাই চলছে। যাচাই সম্পূর্ণ হলে এখানে প্রকাশ করা হবে।';
const configuredEmail = import.meta.env.PUBLIC_CORRECTION_EMAIL;
export const correctionEmail = typeof configuredEmail === 'string' &&
  /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(configuredEmail) ? configuredEmail : undefined;
export const festivals = [
  ['durga-puja','দুর্গাপূজা','বোধন, সন্ধিপূজা ও বিসর্জনের সময় দেখার আগে সংশ্লিষ্ট দিনের তিথি এবং স্থানীয় পঞ্জিকা মিলিয়ে নিন।'],
  ['kali-puja','কালীপূজা','দীপান্বিতা কালীপূজার আচার সাধারণত অমাবস্যার রাতে পালিত হয়। নিশীথের সময় স্থানভেদে বদলায়।'],
  ['saraswati-puja','সরস্বতী পূজা','বিদ্যার দেবী সরস্বতীর আরাধনায় শিক্ষাপ্রতিষ্ঠান ও বাড়িতে পুষ্পাঞ্জলির আয়োজন করা হয়।'],
  ['jagaddhatri-puja','জগদ্ধাত্রী পূজা','চন্দননগর ও কৃষ্ণনগরের জগদ্ধাত্রী পূজায় আঞ্চলিক আয়োজনের নিজস্ব রীতি রয়েছে।'],
  ['lakshmi-puja','কোজাগরী লক্ষ্মীপূজা','শরৎকালের পূর্ণিমায় বহু বাঙালি পরিবার কোজাগরী লক্ষ্মীর আরাধনা করে।'],
  ['mahalaya','মহালয়া','পিতৃপক্ষের শেষে তর্পণের প্রথা রয়েছে। তর্পণের সময়ের জন্য স্থানীয় রীতি অনুসরণ করা হয়।'],
  ['pohela-boishakh','পহেলা বৈশাখ','বাংলাদেশের নাগরিক বর্ষপঞ্জি এবং পশ্চিমবঙ্গের সৌর পঞ্জিকার নববর্ষের দিন আলাদা হতে পারে।'],
  ['dol-purnima','দোল পূর্ণিমা','বসন্তের দোলযাত্রায় আবির ও কীর্তনের রীতি প্রচলিত।'],
  ['rath-yatra','রথযাত্রা','জগন্নাথ, বলরাম ও সুভদ্রার রথ বের করার প্রথা বিভিন্ন অঞ্চলে পালিত হয়।'],
  ['janmashtami','জন্মাষ্টমী','কৃষ্ণের জন্মোৎসব পালনে স্মার্ত ও বৈষ্ণব রীতির মধ্যে দিনভেদ হতে পারে।'],
  ['shivaratri','মহাশিবরাত্রি','মহাশিবরাত্রিতে বহু ভক্ত রাত্রিজাগরণ করে শিবের আরাধনা করেন।'],
  ['jamai-sasthi','জামাইষষ্ঠী','পারিবারিক আপ্যায়ন ও ষষ্ঠীর আচার এই উৎসবের পরিচিত অংশ।'],
  ['bhai-phonta','ভাইফোঁটা','ভাইফোঁটায় বোনেরা ভাইয়ের মঙ্গল কামনায় কপালে ফোঁটা দেন।'],
  ['vishwakarma-puja','বিশ্বকর্মা পূজা','কারখানা ও কর্মশালায় যন্ত্রপাতির সঙ্গে বিশ্বকর্মার আরাধনার প্রথা রয়েছে।'],
  ['akshaya-tritiya','অক্ষয় তৃতীয়া','অনেক পরিবার ও ব্যবসায়ী এই তিথিতে নতুন কাজের সূচনা করেন।'],
  ['poush-sankranti','পৌষ সংক্রান্তি','বাংলার পৌষ সংক্রান্তিতে পিঠে, নতুন চাল ও খেজুরের গুড়ের আয়োজন দেখা যায়।'],
] as const;
export const muhurats = [['marriage','বিয়ের শুভ দিন'],['annaprashan','অন্নপ্রাশনের শুভ দিন'],['griha-pravesh','গৃহপ্রবেশের শুভ দিন'],['upanayan','উপনয়নের শুভ দিন']] as const;
export const cityNames = [
  ['kolkata','কলকাতা'],['howrah','হাওড়া'],['siliguri','শিলিগুড়ি'],['durgapur','দুর্গাপুর'],
  ['asansol','আসানসোল'],['krishnanagar','কৃষ্ণনগর'],['malda','মালদা'],['cooch-behar','কোচবিহার'],
  ['bolpur','বোলপুর'],['medinipur','মেদিনীপুর'],['dhaka','ঢাকা'],['chattogram','চট্টগ্রাম'],
  ['sylhet','সিলেট'],['rajshahi','রাজশাহী'],['khulna','খুলনা'],
] as const;
export function cityFor(slug: string | null) {
  const index = Math.max(0, cityNames.findIndex(([id]) => id === slug));
  const [id, name] = cityNames[index];
  return { id, name, timezone: index < 10 ? 'Asia/Kolkata' : 'Asia/Dhaka' };
}
export const yearLabel = (year: number) => `বাংলা ক্যালেন্ডার ${bn(year)}`;
