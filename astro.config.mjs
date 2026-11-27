import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

const site = process.env.SITE_URL;
if (site && (new URL(site).origin !== site || !site.startsWith('https://'))) {
  throw new Error('SITE_URL must be an HTTPS origin without a trailing slash');
}
export default defineConfig({
  site, trailingSlash: 'always', vite: { plugins: [tailwind()] },
});
