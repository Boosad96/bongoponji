import { cp, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = await mkdtemp(join(tmpdir(),'bongoponji-worker-'));
try {
  await cp(new URL('../dist/client/_worker.js/',import.meta.url),fixture,{recursive:true});
  await cp(new URL('../tests/runtime/worker.mjs',import.meta.url),join(fixture,'test.mjs'));
  const modules = (await readdir(fixture,{recursive:true})).filter(file=>/\.(m?js)$/.test(file));
  modules.sort((a,b)=>Number(b==='test.mjs')-Number(a==='test.mjs'));
  const {compatibility_date,compatibility_flags} = JSON.parse(await readFile(new URL('../dist/server/wrangler.json',import.meta.url),'utf8'));
  const entries = modules.map(file => `(name = ${JSON.stringify(file)}, esModule = embed ${JSON.stringify(file)})`);
  const config = `
using Workerd = import "/workerd/workerd.capnp";
const config :Workerd.Config = (
  services = [(name = "app", worker = (
    compatibilityDate = ${JSON.stringify(compatibility_date)},
    compatibilityFlags = [${compatibility_flags.map(flag => JSON.stringify(flag)).join(',')}],
    modules = [${entries.join(',')}],
  ))],
);
`;
  const file = join(fixture,'test.capnp');
  await writeFile(file,config);
  const {status,error} = spawnSync('node_modules/.bin/workerd',['test',file],{stdio:'inherit'});
  if (error) throw error;
  process.exitCode = status ?? 1;
} finally {
  await rm(fixture,{recursive:true,force:true});
}
