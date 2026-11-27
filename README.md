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

The example origin is for tests. The production target is https://bongoponji.com after ownership and release approval. Keep the initial Pages review deployment noindexed. To audit a review build, run `npm run build` with SITE_URL unset, then `node scripts/check-static.mjs --preview`. Without SITE_URL the build is noindexed. The Cloudflare Pages output is `dist/client`, including its advanced-mode Worker. `npm run build:workers` builds the native Workers adapter output without Pages packaging.

Read [deployment](DEPLOYMENT.md), [validation](VALIDATION_REPORT.md), [known limitations](KNOWN_LIMITATIONS.md) and [progress](PROGRESS.md) before release.

See [Phase 3 report](PHASE_3_REPORT.md) and [SEO report](SEO_REPORT.md) for the current release checklist.

## Scheduled Kolkata verification

GitHub Actions runs a monthly recheck of the current UTC year and a separate October run for the following year. In GitHub, open **Actions → Scheduled calendar verification → Run workflow** and optionally enter a year or a month such as `2027-01`. Read the run summary or download the `calendar-validation-report` artifact. The workflow uses standard public-repository runners and requires no paid service, API key or AI access.

Each new approval requires a reviewed date-specific PAC reference and exact sunrise/sunset minutes, identical sunrise tithi, and tithi end within one minute. Existing approvals keep their original method. Missing inputs leave dates pending. If a check fails, review the artifact and correct the reference or documented rule before rerunning. The checked-in manifest starts empty while PAC reuse is unresolved. Add inputs only after confirming they can be stored in the public repository. The workflow keeps the review build noindexed.

Gregorian annual and monthly civil calendars cover 2026 through 2030, with links to the same month in other years. The Kolkata candidate generator works independently of that display range. Each October it checks the following year, and monthly runs recheck the current year. When a new [PAC English edition](https://packolkata.imd.gov.in/rashtriya-panchang-english.php) becomes available, review the Kolkata horizon and tithi references and confirm the comparison inputs may be stored before adding individually reviewed rows to `validation/approved-kolkata-references.json`. Dispatch the workflow with the year or month. Candidates without their own `REFERENCE_REVIEWED` row stay unpublished. The existing conflict holds always apply.
