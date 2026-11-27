import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const site = process.env.SITE_URL;
if (process.env.CF_PAGES === '1' && site &&
    (site !== 'https://bongoponji.com' || process.env.CF_PAGES_BRANCH !== 'main')) {
  throw new Error('On Cloudflare Pages, SITE_URL may only be https://bongoponji.com on main. Leave it unset for staging.');
}
if (site && (new URL(site).origin !== site || !site.startsWith('https://'))) {
  throw new Error('SITE_URL must be an HTTPS origin without a trailing slash');
}
export default defineConfig({
  site, devToolbar: { enabled: false }, session: false, adapter: cloudflare({ configPath: 'wrangler.workers.toml', prerenderEnvironment: 'node', imageService: 'passthrough' }), trailingSlash: 'always', vite: { plugins: [tailwind()] },
});
