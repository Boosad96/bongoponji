// Run Pages from a directory outside Astro's generated Workers redirect configuration.
import { cp, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = new URL('../', import.meta.url);
const { compatibility_date, compatibility_flags = [] } = JSON.parse(
  await readFile(new URL('dist/server/wrangler.json', root), 'utf8'),
);
const directory = await mkdtemp(join(tmpdir(), 'bongoponji-pages-'));
try {
  await cp(new URL('dist/client/', root), join(directory, 'client'), { recursive: true });
  const subprocess = spawn(process.execPath, [
    join(dirname(require.resolve('wrangler/package.json')), 'bin/wrangler.js'), 'pages', 'dev', 'client',
    '--compatibility-date', compatibility_date,
    ...compatibility_flags.flatMap(flag => ['--compatibility-flag', flag]),
    ...process.argv.slice(2),
  ], { cwd: directory, stdio: 'inherit' });
  const stop = signal => subprocess.kill(signal);
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
  try {
    process.exitCode = await new Promise((resolve, reject) => {
      subprocess.once('error', reject);
      subprocess.once('exit', (code, signal) => resolve(code ?? (signal === 'SIGINT' ? 130 : 1)));
    });
  } finally {
    process.off('SIGINT', stop);
    process.off('SIGTERM', stop);
  }
} finally {
  await rm(directory, { recursive: true, force: true });
}
