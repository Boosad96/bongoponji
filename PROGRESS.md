# Project progress

## Phase 1

Created the local Git repository and established an Astro, TypeScript and Tailwind baseline. Built civil and West Bengal source-check engines, an Astronomy Engine wrapper and a publication gate. Documented PAC, RKM and Bangladesh evidence, tolerances and rule boundaries. The first milestone tests passed. Full traditional validation and source table reuse clearance are open.

## Phase 2, civil product and fail-closed daily shell

Built the Bengali-first homepage, light and dark themes, local-time daily routes, city and region selection, bidirectional Bangladesh conversion, and annual and monthly views. Static HTML includes calendar data. Workerd exercised the packaged Pages Worker and the three independently checked Kolkata sample records. The dependency audit prompted upgrades to Astro 7 and the Cloudflare 14 adapter after their package requirements were verified. Production build, source checks and the refreshed audit passed. Browser QA remains blocked by the managed server startup failure.

Added conditional sitemap and canonical origins, noindexed festival and muhurat routes, Search Console and migration guidance, CI and competitor research. These are support for the core milestone. Phase 3 verification and deployment are open.

## Phase 3, GitHub recovery and indexing checks

Reconnected the existing checkout to the public repository `Boosad96/bongoponji`. The initial remote `main` already matched the two original local commits, and local `main` now tracks `origin/main`. This checkpoint adds an audit for both review and configured-origin builds. The configured-origin build passed checks for 84 sitemap URLs and 113 static pages. The review build passed checks for an empty sitemap, blocked crawling and noindex metadata on all 113 static pages. Pending festival and muhurat routes stay out of the configured-origin sitemap. No daily Panchang records or observance dates were added.

All 16 Vitest tests, Astro diagnostics and the packaged workerd integration test passed. The Playwright web server exited before browser cases could run. Cloudflare deployment and Search Console verification remain open.

## Phase 3, validation and domain preparation

Expanded independently checked Kolkata solar and sunrise-tithi coverage to 27 November–3 December 2026. Added navigable daily dates with invalid-input handling, production-origin restrictions for Cloudflare Pages, publisher metadata and browser regressions for date navigation, regional switching and theme persistence. See PHASE_3_REPORT.md for the execution checklist and VALIDATION_REPORT.md for date-by-date comparisons.

Next: obtain the verified 1434 Kolkata month boundaries and permission or an independently reusable rule set for traditional calendar work. Continue authoritative comparisons beyond 3 December, deploy the noindexed Pages build through the owner account, then verify the custom apex and Search Console after release clearance.

## Phase 4, Step 1 boundary investigation

Added a research-only Kolkata solar boundary probe based on RKM's described local mean midnight convention and an independently evaluated Sun position. It generated 24 pending candidates. Ten 1433 candidates agree with the existing PAC fixture, and two differ by one civil day. Printed examples reported by RKM corroborate the probe on the two differences. The dated comparison table and method notes are in VALIDATION_REPORT.md. A follow-up cross-check against the Vivekananda Math, Barrackpore schedule corroborated nine 1433 starts and explicitly anchored 1 Baishakh 1434 to 15 April 2027. Full 1433–1434 coverage and reuse clearance remain unresolved. No daily records or publication paths changed.

GitHub Actions run [45984998863](https://github.com/Boosad96/bongoponji/actions/runs/45984998863) confirms all five Phase 3 browser tests executed and passed on commit 4401e9a. The managed local startup failure remains a separate issue. Phase 4 browser work has not begun because the earlier steps are gated.

The Phase 4 checkpoint passed 21 Vitest tests, Astro diagnostics, the example-origin audit (84 sitemap entries and 113 static pages), the packaged Worker integration, and the noindexed review build audit (zero sitemap entries and 113 static pages).

## Phase 4, Grahan cross-check

Pinned MIT-licensed Grahan Vedic 1.0.1 as a development dependency and ran the independent sunrise comparison on 24 boundary candidate days and all 393 Step 2 dates. Reproduce the per-date report with `node scripts/cross-check-kolkata.mjs`. See VALIDATION_REPORT.md for agreement counts and the differing sunrise tithi on 5 August 2027. Engine agreement has no publication authority. The 1434 printed edition and equivalent 2027–28 institutional schedule could not be confirmed as published. Eleven 1434 boundaries remain gated on the reference becoming available. The release dataset still covers 27 November–3 December 2026.

## Resume here

1. Finish Step 1. Run `node scripts/check-kolkata-boundaries.mjs`. Compare the pending candidates against the applicable printed Kolkata Bishuddha Siddhanta editions, starting with 1433 Baishakh, Jyaishtha and Chaitra and 1434 Jyaishtha through Chaitra as listed in VALIDATION_REPORT.md. Confirm the applicable cutoffs and ayanamsha across both years. Record each dated result and source-use status. PAC may serve as a comparison reference. Obtain rights before importing protected source material.
2. The separately authorized December 2026 through February 2027 PAC comparisons are complete. Before starting later batches, resolve the boundary gate and confirm applicable date-specific references. Preserve the remaining December, January and February exclusions unless later evidence and a verified calculation resolve them. Keep 5 August 2027 withheld until an applicable release-grade reference and the calculation agree. Apply the existing exact solar-minute and one-minute tithi end tolerances.
3. Continue in order with festival observance rules, muhurat and other traditional fields, local browser and Lighthouse work, then growth features. Keep the review build noindexed with SITE_URL unset. Deployment remains owner-managed.

Step 7 is gated on Steps 1–2. Once daily reference comparisons work against an accessible, authoritative source, implement the October and monthly GitHub Actions schedules plus manual dispatch. Keep generated candidates separate from releasable records, make the workflow reject dates without adequate reference evidence, and verify a real run before marking automation complete.

## Step 2, December-only checkpoint

Resolved the September Grahan sunset anomaly by isolating its higher refraction constant. Published online Kolkata tables assign Shukla Chaturthi on 5 August 2027. The two engines disagree close to sunrise, and the applicable PAC or printed folio is still unavailable, so the date is withheld. Compared all 28 December candidate dates with PAC and approved 22. The six failed dates are listed in VALIDATION_REPORT.md. The authorized December batch does not open the 1434 boundary gate or subsequent months.

Local validation passed 22 Vitest tests, Astro diagnostics, the example-origin static audit and Worker test, and the noindexed review build with an empty sitemap. The dataset holds 29 records in total.

## Step 2, January checkpoint

Reran the six withheld December dates as a sunset diagnostic with Grahan's refraction and solar semidiameter. Five passed the exact-minute check. 27 December still missed, and 9 December still has a separate tithi conflict under the existing method. December publication entries were left intact.

Validated all 31 January dates against the PAC Kolkata horizon table and Pausha or Magha folio under the established method. Approved 16 dates and withheld 15. See VALIDATION_REPORT.md for each comparison. The release dataset now contains 45 records. Later batches and the traditional month-boundary gate remain open tasks.

Local checks passed 23 Vitest tests, Astro diagnostics, the example-origin build and static audit, the packaged Worker test, and the noindexed review build audit.

## Step 2, versioned horizon correction

Adopted `drik-sunrise-tithi-v2` for new approvals. Earlier v1 approvals keep their method and values. The v2 rerun approved December 12 and 29 and January 1, 5, 10, 13, 21, 23 and 26. The other twelve reruns remain withheld. January 31 and December 9 retain the sunrise-tithi conflicts. December 27 still misses the exact solar comparison. Next batch is February 2027 under v2.

## Step 2, February checkpoint

Compared 28 February Kolkata dates under v2. Approved 15, bringing the release total to 69. The 13 withheld February dates and their comparisons are in VALIDATION_REPORT.md. Future daily batches should use v2 for new approvals, retain v1 provenance on existing records, and use the same date-specific PAC checks. The separate 1434 month-boundary publication gate remains unresolved.

Local validation passed 24 Vitest tests, Astro diagnostics, the example-origin static and packaged Worker checks, and the noindexed review build audit.

## Phase 4 v3 prompt, Step A

Recorded unrounded v2 residuals for both horizon events on all 25 withheld dates with PAC rows. Flooring matches 9 of 50 compared events versus 24 for nearest-minute rounding, and rescues no misses. The evidence does not justify v3. Proceed with the March Step B batch using v2 and the existing gate.
