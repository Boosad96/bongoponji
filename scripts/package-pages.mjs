import { cp, mkdir, readdir, writeFile } from 'node:fs/promises';

const client = new URL('../dist/client/', import.meta.url);
const server = new URL('../dist/server/', import.meta.url);
const worker = new URL('_worker.js/', client);
await mkdir(worker, { recursive: true });
for (const filename of await readdir(server)) {
  if (filename === 'chunks' || filename.endsWith('.mjs')) {
    await cp(new URL(filename, server), new URL(filename, worker), {
      recursive: true, filter: source => !source.endsWith('.map'),
    });
  }
}
await writeFile(new URL('index.js', worker), 'export { default } from "./entry.mjs";\n');
await writeFile(new URL('_routes.json', client), JSON.stringify({
  version: 1,
  include: ['/', '/today', '/today/', '/panjika/*', '/panchang/*'],
  exclude: [],
}, null, 2) + '\n');
