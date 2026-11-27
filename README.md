# বঙ্গপঞ্জি · Bongoponji

Bengali-first Astro calendar with a Bangladesh civil date converter, Gregorian and Bengali annual and monthly views, and timezone-aware daily pages. The interface defaults to Kolkata. Regional evidence and the publication state determine which data appears.

## Development

Use Node 24.22.3 or newer. Run `npm ci`, then `npm run dev`. For validation:

```sh
npm run check
npm test
SITE_URL=https://bongoponji.example npm run build
node scripts/check-static.mjs
node scripts/test-worker.mjs
npx playwright install chromium
npm run test:e2e
```

The example origin is for tests. To audit a review build, run `npm run build` with SITE_URL unset, then `node scripts/check-static.mjs --preview`. Without SITE_URL the build is noindexed. The Cloudflare Pages output is `dist/client`, including its advanced-mode Worker. `npm run build:workers` builds the native Workers adapter output without Pages packaging.

Read [deployment](DEPLOYMENT.md), [validation](VALIDATION_REPORT.md), [known limitations](KNOWN_LIMITATIONS.md) and [progress](PROGRESS.md) before release.
