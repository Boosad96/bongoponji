import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/client/',import.meta.url).pathname;
const verifiedFestivalDates = new Map([
  ['/festivals/pohela-boishakh/2027/', '2027-04-15'],
  ['/festivals/saraswati-puja/2027/', '2027-02-11'],
  ['/festivals/shivaratri/2027/', '2027-03-06'],
]);
const schemaBlocks = html => [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)]
  .map(([, contents]) => JSON.parse(contents));
const preview = process.argv.includes('--preview');
const robots = await readFile(join(root,'robots.txt'),'utf8');
const sitemap = await readFile(join(root,'sitemap.xml'),'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>new URL(match[1]));
if (preview) {
  assert.equal(locs.length,0,'Review builds must have an empty sitemap.');
  assert.equal(robots,'User-agent: *\nDisallow: /\n','Review builds must block crawling.');
} else {
  assert.ok(locs.length > 70);
  const origin = locs[0].origin;
  assert.equal(robots,`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  for (const url of locs) {
    assert.equal(url.origin,origin);
    assert.ok(!/^(?:\/festivals|\/muhurat)\//.test(url.pathname) || verifiedFestivalDates.has(url.pathname),'Pending observances must stay out of the sitemap.');
  }
}
assert.equal(new Set(locs.map(url=>url.href)).size,locs.length);
for (const url of locs) {
  if (url.pathname === '/') continue;
  const html = await readFile(join(root,url.pathname,'index.html'),'utf8');
  assert.ok(html.includes('content="index,follow"'));
  assert.ok(html.includes(`href="${url.href}"`));
}
const files = await readdir(root,{recursive:true});
const paths = new Set(files.filter(file=>file.endsWith('/index.html')).map(file=>`/${file.slice(0,-10)}`));
for (const path of ['/','/today/','/panjika/today/','/panjika/tomorrow/','/panchang/kolkata/','/widgets/']) paths.add(path);
const titles = new Set();
const converter = await readFile(join(root,'tools/date-converter/index.html'),'utf8');
assert.ok(!converter.includes('2026-04-15'), 'Uncleared PAC data must stay out of the converter bundle.');
for (const file of files.filter(file=>file.endsWith('/index.html'))) {
  const html = await readFile(join(root,file),'utf8');
  for (const [,href] of html.matchAll(/href="(\/[^?#"]+\/)"/g)) assert.ok(paths.has(href),`${file} links to missing ${href}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title),`Missing or duplicate title in ${file}`);
  titles.add(title);
  const path = `/${file.slice(0,-10)}`;
  const structuredData = schemaBlocks(html);
  assert.ok(structuredData.every(block => block['@context'] === 'https://schema.org'));
  const date = verifiedFestivalDates.get(path);
  if (date) {
    const pageSchema = structuredData.find(block => block['@type'] === 'WebPage');
    assert.equal(pageSchema?.temporalCoverage, date);
    assert.equal(pageSchema?.url, new URL(path, preview ? 'https://bongoponji.pages.dev' : locs[0].origin).href);
    assert.ok(html.includes(`datetime="${date}"`));
  } else {
    assert.ok(structuredData.every(block => !('temporalCoverage' in block) && block['@type'] !== 'Event'));
  }
  if (verifiedFestivalDates.has(path)) {
    assert.ok(html.includes('যাচাইয়ের তারিখ'));
    assert.equal(locs.some(url => url.pathname === path), !preview);
  }
  if (preview || (/^(festivals|muhurat)\//.test(file) && !verifiedFestivalDates.has(path))) {
    assert.ok(html.includes('content="noindex,follow"'), `${file} must be noindexed`);
  }
  if (preview) assert.ok(!html.includes('rel="canonical"'), `${file} must omit the canonical in review builds`);
}
for (let year = 2026; year <= 2030; year++) {
  for (const month of ['', 'january/', 'february/', 'march/', 'april/', 'may/', 'june/',
    'july/', 'august/', 'september/', 'october/', 'november/', 'december/']) {
    const path = `/calendar/${year}/${month}`;
    assert.ok(paths.has(path), `Missing civil calendar page ${path}`);
    assert.equal(locs.some(url => url.pathname === path), !preview);
  }
}
console.log(`Checked ${locs.length} sitemap entries and ${titles.size} static HTML pages.`);
