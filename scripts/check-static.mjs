import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/client/',import.meta.url).pathname;
const sitemap = await readFile(join(root,'sitemap.xml'),'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>new URL(match[1]));
assert.ok(locs.length > 70);
assert.equal(new Set(locs.map(url=>url.href)).size,locs.length);
for (const url of locs) {
  if (url.pathname === '/') continue;
  const html = await readFile(join(root,url.pathname,'index.html'),'utf8');
  assert.ok(html.includes('content="index,follow"'));
  assert.ok(html.includes(`href="${url.href}"`));
}
const files = await readdir(root,{recursive:true});
const paths = new Set(files.filter(file=>file.endsWith('/index.html')).map(file=>`/${file.slice(0,-10)}`));
for (const path of ['/','/today/','/panjika/today/','/panjika/tomorrow/','/panchang/kolkata/']) paths.add(path);
const titles = new Set();
const converter = await readFile(join(root,'tools/date-converter/index.html'),'utf8');
assert.ok(!converter.includes('2026-04-15'), 'Uncleared PAC data must stay out of the converter bundle.');
for (const file of files.filter(file=>file.endsWith('/index.html'))) {
  const html = await readFile(join(root,file),'utf8');
  for (const [,href] of html.matchAll(/href="(\/[^?#"]+\/)"/g)) assert.ok(paths.has(href),`${file} links to missing ${href}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title),`Missing or duplicate title in ${file}`);
  titles.add(title);
  if (/^(festivals|muhurat)\//.test(file)) assert.ok(html.includes('content="noindex,follow"'));
}
console.log(`Checked ${locs.length} sitemap entries and ${titles.size} static HTML pages.`);
