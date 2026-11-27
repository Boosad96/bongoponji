import worker from './index.js';

function check(condition, message) {
  if (!condition) throw new Error(message);
}

export default {
  async test(_controller, env, ctx) {
    const origin = 'https://bongoponji.example';
    const request = path => worker.fetch(new Request(origin + path), env, ctx);
    const RealDate = Date;
    let instant = '2026-11-27T18:15:00Z';
    globalThis.Date = class extends RealDate {
      constructor(...args) { super(...(args.length ? args : [instant])); }
      static now() { return RealDate.parse(instant); }
    };
    const today = await request('/panjika/today/?city=dhaka');
    const tomorrow = await request('/panjika/tomorrow/?city=dhaka');
    const todayHtml = await today.text();
    const tomorrowHtml = await tomorrow.text();
    for (const response of [today,tomorrow]) {
      check(response.status === 200, 'daily route should return 200');
      check(response.headers.get('Cache-Control')?.includes('no-store'), 'dynamic dates must never be cached');
      check(response.headers.get('X-Content-Type-Options') === 'nosniff', 'dynamic headers should be present');
    }
    check(todayHtml.includes('Asia/Dhaka') && todayHtml.includes('প্রকাশ অপেক্ষমাণ'), 'daily SSR should render timezone and verification state');
    check(!todayHtml.includes('<dt>সূর্যোদয়</dt>'), 'unreviewed horizon results must remain unavailable');
    const timestamp = html => Date.parse(/<time datetime="([^"]+)">/.exec(html)?.[1]);
    const kolkata = await request('/panjika/today/?city=kolkata');
    const kolkataHtml = await kolkata.text();
    check(kolkataHtml.includes('সূর্যোদয়ের তিথি যাচাইকৃত') && kolkataHtml.includes('তৃতীয়া'), 'Kolkata sample should render with its provenance state');
    check(timestamp(kolkataHtml) === Date.parse('2026-11-27'), 'Kolkata date must stay on its local day');
    check(timestamp(todayHtml) === Date.parse('2026-11-28'), 'Dhaka date must roll over at local midnight');
    check(timestamp(tomorrowHtml) - timestamp(todayHtml) === 86400000, 'tomorrow must be the following local civil day');
    check((await request('/panchang/not-a-city/')).status === 404, 'unknown city must return 404');
    const home = await request('/?city=dhaka&month=2027-01');
    check((await home.text()).includes('জানুয়ারি ২০২৭'), 'homepage month navigation should work without JavaScript');
    instant = '2026-11-30T00:00:00Z';
    const expiredSample = await request('/panjika/today/?city=kolkata');
    check((await expiredSample.text()).includes('প্রকাশ অপেক্ষমাণ'), 'expired sample must never be carried forward');
    globalThis.Date = RealDate;
  },
};
