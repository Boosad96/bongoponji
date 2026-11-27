import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const site = process.env.SITE_URL;
if (site && (new URL(site).origin !== site || !site.startsWith('https://'))) {
  throw new Error('SITE_URL must be an HTTPS origin without a trailing slash');
}
export default defineConfig({
  site, session: false, adapter: cloudflare({ configPath: 'wrangler.workers.toml', prerenderEnvironment: 'node', imageService: 'passthrough' }), trailingSlash: 'always', vite: { plugins: [tailwind()] },
});
