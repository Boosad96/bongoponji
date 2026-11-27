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

## Phase 4 v3 prompt, Step B March

Checked all 31 March dates with v2 and approved nine. The print edition provides the 2027 Chaitra tithi and horizon rows from 22 March onward. The online Chaitra page contains 2026 data. Next check April against the printed 2027 folio and horizon table.

## Phase 4 v3 prompt, Step B April

Checked all 30 April candidates. The PAC 2027 appendix covers 1–20 April and ten of those dates passed under v2. Withheld 21–30 April for missing applicable references and ten other April dates for failed comparisons. Release total is 88. Next confirm whether PAC has published its full 2027–28 horizon and tithi edition before checking May.

The May batch is blocked: the latest accessible PAC Kolkata horizon and tithi references end on 20 April 2027, and no applicable 2027–28 edition was located. March and April each passed 24 Vitest tests, Astro diagnostics, the example-origin static audit and Worker smoke test. April also passed the noindexed review audit. The [March CI run](https://github.com/Boosad96/bongoponji/actions/runs/45998528630) and [April CI run](https://github.com/Boosad96/bongoponji/actions/runs/45998665267) also passed. A continuation recheck of the [PAC English editions index](https://packolkata.imd.gov.in/rashtriya-panchang-english.php) still found 2026–27 as the latest listed edition on 2026-11-27. No new daily records qualified for comparison.

## Step D, verified festival pages

Published source-attributed pages in the repository for Saraswati Puja, Maha Shivaratri and Poila Boishakh. Each requires an existing verified Kolkata daily record. The pages show the applicable Bengali calendar convention and no ritual timings. Other festival pages remain noindexed. May validation and the 1434 publication check are deferred by instruction. Next run Step F browser and Lighthouse checks.

## Step F, local browser and Lighthouse

All five Playwright cases passed locally. Captured three mobile screenshots and measured Lighthouse on the local Astro dev service. See VALIDATION_REPORT.md for scores and metric caveats. Fixed dangling sourcemap references in the Pages package. The Wrangler preview still hits a local missing-facade error. Next implement Step G growth features with verified festival inputs only.

## Step G, growth features

Added embeddable today, calendar month and verified-festival countdown views, verified festival sharing, a Bangladesh civil 2027 PDF download, and Bengali birthday and age tools. Local browser checks passed on seven cases. Next implement Step H with a fail-closed reference gate and run the manual workflow.

## Step H, scheduled verification

Added a keyless GitHub Actions workflow for October generation, monthly revalidation and on-demand runs. Local January 2027 dry run regenerated 31 candidates, reproduced 23 prior approvals, found seven missing references and retained one conflict. The release file was unchanged. New approvals require an individually reviewed PAC comparison that clears every existing tolerance. The local suite passed 26 Vitest tests, Astro diagnostics, seven Playwright cases, and packaged Worker tests for both build configurations. The configured-origin and review audits passed with 89 and zero sitemap entries respectively, over 112 static HTML pages.

The [manual January workflow run](https://github.com/Boosad96/bongoponji/actions/runs/46001172951) succeeded, uploaded the report, ran seven browser cases and recorded zero new records. The [main-branch CI run](https://github.com/Boosad96/bongoponji/actions/runs/46001171920) also passed.

## Step E, ritual review, sunrise elements, and festival performance

Reviewed marriage, Annaprashan, Griha Pravesh and Upanayan in that order. All remain UNVERIFIED and noindexed pending a complete Kolkata rule and independent dated reference. Verified and exposed sunrise nakshatra, yoga and karana for five previously approved Kolkata dates only. The other dates and later karanas remain pending. Five sankranti candidates matched the signs but missed their PAC times by four minutes, so the timings stay withheld. See VALIDATION_REPORT.md for each comparison and the exact scope.

Added a Bengali font preload to verified festival pages. Lighthouse mobile lab medians on the built Poila Boishakh page were 0.75 s before and after, and the earlier 4.1-second dev result did not reproduce. The suite passed 26 Vitest tests, seven Chromium cases, Astro diagnostics, build audits and packaged Worker checks.

## v4 reference checkpoint

Rechecked the PAC index and download listing, the printed 1434 listing and the Math schedule on 27 November 2026 IST. No applicable new references surfaced. Skipped Step 2 and continued with the offset diagnostics.

## v4 diagnostics, approved expansion and launch preparation

Compared 57 withheld and 88 approved horizon pairs across six variants and checked apparent noon separately. Retained v2 and all existing tolerances. PAC's variable monthly ayanamsa brought five sankranti instants within one minute, with verification recorded in VALIDATION_REPORT.md and no ritual or ingress UI output. Confirmed sunrise nakshatra, yoga and karana on all 88 approved Kolkata dates, up from five. Four rites and thirteen festivals remain withheld.

Measured three live review pages via mobile Lighthouse. Live LCP was 0.836–0.877 s. Identified the converter's font-driven CLS regression and changed its font display policy. After the automatic review rebuild, live mobile Lighthouse measured CLS 0, LCP 0.843 s and Performance 100. Fixed local Wrangler Pages preview by isolating the package from Astro's generated Workers configuration. Added LAUNCH_CHECKLIST.md for the owner. The suite passed after the reference, diagnostics, expansion, performance and launch checkpoints, including 26 Vitest tests, Astro diagnostics, the configured-origin audit (89 sitemap entries and 112 static pages), and the packaged Worker checks. The final seven Playwright cases passed.

## v4 follow-up, structured data and multi-year calendars

Added homepage and verified festival JSON-LD and extended civil year and month routes through 2030. The local generator processed 1,096 future candidates across 2028–2030 and approved zero. The configured-origin audit passed on 115 sitemap entries and 138 HTML pages. The review audit passed with an empty sitemap. All 26 unit and eight Playwright tests passed, along with Astro diagnostics and packaged Worker checks in both configurations.

The [2028 workflow dispatch](https://github.com/Boosad96/bongoponji/actions/runs/46015687227) passed and published zero records. The live Git-connected review now serves the homepage and all three verified festival JSON-LD blocks, plus the February 2030 civil calendar. The tested review routes retain noindex.

## v5 design review

Confirmed the live report against desktop and a 390 px Chromium viewport. Preserved the West Bengal and Bangladesh publication gate. Fixed converter first use, birthday results and explicit historical coverage, hero and calendar density, navigation affordances, labels, and the verified festival lists. See VALIDATION_REPORT.md for the findings that did not reproduce.

After the automatic live rebuild, verified the first-click conversion, adult and covered birthday cases, both themes, the West Bengal and Dhaka data gate, the November today marker, and the three dated festivals. Chromium passed the main pages at 390 px. The 26 unit tests, 11 Playwright tests, and both build audits passed.

## v5.1 Pages production origin

On 27 November 2026 IST, deployment `d070122e` and the Pages project alias both served a zero-entry sitemap and `User-agent: *` followed by `Disallow: /`. That output corresponds to the review build. Local tests could not reproduce the failure with the correct build environment. With Cloudflare Pages production flags and SITE_URL set, the build emitted 115 apex sitemap entries and robots.txt with `Allow: /` and `Sitemap: https://bongoponji.com/sitemap.xml`. With SITE_URL unset, the review build retained zero entries and `Disallow: /`. All 26 unit tests, Astro diagnostics, both builds and static audits, and the production Worker smoke test passed.

Astro now logs the validated public SITE_URL or that it is unset during builds. A fresh Git push of `7da6fdc` triggered successful Pages deployment [d341a5ca-ce4f-4606-a9f6-908fe0bff121](https://d341a5ca.bongoponji.pages.dev). Direct requests confirmed zero sitemap entries and robots.txt containing exactly `User-agent: *` and `Disallow: /`. Retry reuse alone cannot explain both deployments. The fresh artifacts still have no effective production origin. Cloudflare sign-in was required to check the deployment log and whether SITE_URL was stored as plaintext or encrypted, or scoped incorrectly. The exact dashboard cause remains unconfirmed.

Next for v5.1: in Cloudflare Pages → bongoponji → Settings → Variables and Secrets, select Production and check that SITE_URL is a Text variable with value `https://bongoponji.com`. Keep it unset in Preview. On the next fresh build, check the `[bongoponji] SITE_URL:` log line, then fetch the new deployment's sitemap and robots files directly. Acceptance requires exactly 115 apex URLs and the two production robots directives recorded above.

## v5.2 Pages variable delivery

The owner confirmed that Production has a plaintext SITE_URL with the correct apex value and Preview has no SITE_URL. The supplied build log for d341a5ca shows Astro received no SITE_URL and that Pages reported no build variables while reading wrangler.toml. The fallback log wording describes the resolved build settings. The deployment itself was marked Production.

GitHub's Cloudflare Pages check for the main push at 7da6fdc points to the expected bongoponji project and deployment. That corroborates the reported branch and Git connection. The reported build command and output match package.json and the root Pages configuration. The dashboard build preset and effective Node version still need inspection. The repository runs Astro directly and packages its output afterward. Neither GitHub workflow deploys to Pages. The root Pages config has no vars, and the Workers config is used by the Astro adapter. Cloudflare documents that a Pages Wrangler file can take precedence over dashboard settings, making the active root config a plausible lead. Which source the builder used for this deployment remains unconfirmed. [Cloudflare Pages configuration](https://developers.cloudflare.com/pages/functions/wrangler-configuration/)

The dashboard session is signed out and displayed a verification error. At that checkpoint, the Production re-save, retry, and fresh Git build remained pending. See the subsequent checks below. Record the deployment ID, resolved-origin log line and direct sitemap/robots responses after each attempt before moving on. Repo code and staging configuration were untouched. If these dashboard remedies fail, obtain owner approval before testing a build-configuration fallback. One candidate is to have the dashboard own the Pages configuration in a controlled trial, preserving the output directory and compatibility date and keeping the Workers configuration in place. Avoid a default SITE_URL.

Local verification passed all 26 unit tests and Astro diagnostics. The configured build produced 115 apex URLs, `Allow: /` and the apex sitemap line. The unset preview build produced zero URLs and `Disallow: /`. Both static audits passed on 138 pages. Production deployment verification remains open.

### Fresh production build request, 27 November 2026 at about 23:01 IST

The owner confirmed that d341a5ca remained the latest Production deployment. The two intervening documentation commits skipped CI, so neither tested the current dashboard settings. The owner reconfirmed that Production SITE_URL is plaintext and Preview has no SITE_URL. This documentation commit intentionally triggers a fresh Git-connected Production build without changing configuration. Verify the resolved SITE_URL in the new deployment log and check the deployment URL for exactly 115 apex sitemap URLs, `Allow: /` and the apex sitemap directive.

The non-skipped main commit `9a1038e` triggered [deployment b0063586-4413-4b11-b06e-45f5928d03c2](https://b0063586.bongoponji.pages.dev), which the Cloudflare Pages GitHub check reported successful. Direct requests after completion returned an empty sitemap (0 URLs) and robots.txt with `User-agent: *` and `Disallow: /`. The fresh deployment therefore still lacks an effective canonical origin. The GitHub check links to the authenticated Cloudflare log and does not expose its lines. The new deployment's exact SITE_URL log line and the cause of variable delivery remain unconfirmed. No local checks were repeated and no configuration was changed.

### Production re-save and retry, 27 November 2026 at about 23:23 IST

The owner re-saved the Production Text variable. The dashboard required a value change to enable Save, so the owner temporarily saved a trailing slash and then restored exactly `https://bongoponji.com`. Preview was untouched. Both retry clicks created deployments. The latest [Production attempt 8b8b2405](https://8b8b2405.bongoponji.pages.dev), built from `9a1038e`, succeeded in 30 seconds according to the owner. The owner reported these exact build log lines:

```text
Build environment variables: (none found)
[bongoponji] SITE_URL: unset (noindexed review build)
```

Direct requests to that deployment confirmed 0 sitemap URLs and robots.txt containing `User-agent: *` and `Disallow: /`. The fresh Git build and the retry after a re-save both reproduced the failure. The underlying configuration precedence is still a hypothesis.

Proposed next step, pending owner approval: confirm the dashboard holds the same Pages build command, output directory and compatibility date, then temporarily remove only the root Pages `wrangler.toml` so the dashboard controls Pages configuration for one fresh Git build. Leave `wrangler.workers.toml` and Astro's SITE_URL handling in place. Check the production build log and direct sitemap/robots responses, and verify a Preview build still blocks crawling. If the test fails or deviates from the expected settings, revert the one-file change. No build behavior was changed in this documentation update. [Cloudflare Pages configuration](https://developers.cloudflare.com/pages/functions/wrangler-configuration/)

### Dashboard-managed Pages test

The owner confirmed the Production command `npm run build`, output `dist/client`, blank root directory and runtime compatibility date `2026-11-27`. With approval, commit `e4acf22` removed only the root Pages `wrangler.toml` and triggered one fresh Git build. Cloudflare reported success for [deployment 91be1933-315b-4bd7-bab6-748fc6c098b2](https://91be1933.bongoponji.pages.dev). Its sitemap served exactly 115 URLs, all under `https://bongoponji.com`. Its robots.txt served:

```text
User-agent: *
Allow: /
Sitemap: https://bongoponji.com/sitemap.xml
```

The artifacts confirm the production origin reached Astro after the one-file change, which was retained. The authenticated Cloudflare build log is unavailable from this session, so the exact origin line was not read directly. With the trial checkout, an unset SITE_URL and the Preview branch environment, a local Preview build logged `[bongoponji] SITE_URL: unset (noindexed review build)`, served zero sitemap entries and emitted `Disallow: /`. Its 138-page static audit and Worker smoke test passed. No new remote Preview deployment was triggered.

## v6 analytics and policy pages

The owner reported the apex and www launch and successful sitemap submission on 28 November 2026 IST. Added direct GA4 tag G-WYKF4P7K3L to the shared layout for the configured apex build. Preview and the separate third-party iframe embed remain untracked. Added Bengali Privacy, Contact and Terms with footer links, exposed all three in the production sitemap, and redirected the legacy Privacy Policy path. No advertising code or consent banner was added.

The privacy policy describes aggregate reporting rather than promising anonymous collection. Google can use cookies and browser identifiers, and email correspondence includes the sender's address and message. The policy limits its storage statement to on-site tool inputs, identifies advertising cookie choices, and states that AdSense is currently inactive. GA4 account-level retention and advertising settings were not audited.

Passed 26 unit tests, Astro diagnostics, both static audits and Worker smoke tests. The configured build emitted 118 distinct apex sitemap URLs and the production robots directives. The built calendar emitted the direct tag and the policy pages had apex canonicals. The review build emitted an empty sitemap and `Disallow: /`, with no indexing or analytics tag on the checked pages.

## Resume here

1. Continue April 21 onward and the eleven 1434 boundaries when their published references become available. Use the unchanged exact-minute horizon and one-minute end-time gates. Keep the three sunrise-tithi conflicts held.
2. Continue ritual and festival coverage when date-specific approvals and independent evidence of the applicable observance rules are available. For more sankranti checks, use the edition-specific variable ayanamsa and apparent geocentric probe with independent dated PAC comparisons. The five checked ingresses have no associated ritual windows.
3. See LAUNCH_CHECKLIST.md for the owner-only launch steps. Keep SITE_URL unset in the review environment.
