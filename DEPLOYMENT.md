# GitHub to Cloudflare Pages

The owner has already connected the live, noindexed [Pages review deployment](https://bongoponji.pages.dev/). Use the [owner launch checklist](LAUNCH_CHECKLIST.md) when production publication is approved.

## Release prerequisites

Obtain owner authorization for the GitHub repository, Cloudflare account and any DNS changes. Review VALIDATION_REPORT.md and KNOWN_LIMITATIONS.md before enabling public production indexing. The verified P0 release remains blocked by Panchang data coverage and approval. Leave SITE_URL unset for a review build.

## Web interface

1. Use the existing [Boosad96/bongoponji repository](https://github.com/Boosad96/bongoponji) and check the latest main-branch validation run.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select the repository. Select `main` as the production branch.
3. Use the following build settings.

   | Field | Value |
   | --- | --- |
   | Framework preset | None |
   | Build command | `npm run build` |
   | Build output directory | `dist/client` |
   | Root directory | Repository root |
   | Node version | Set `NODE_VERSION` to `24.22.3` or a tested newer version |
   | Astro telemetry | Set `ASTRO_TELEMETRY_DISABLED` to `1` |
   | Site origin | Leave `SITE_URL` unset in both Pages environments for the initial review deployment |
   | Corrections | Set `PUBLIC_CORRECTION_EMAIL` to an owner-managed public address |

4. Deploy the review build and use the assigned Pages link. Confirm the annual calendars, conversion in both directions, source-rendered daily HTML, no-store response headers and real 404. The build packages an Astro Worker under `_worker.js` and uses `_routes.json` to limit Worker invocations to daily routes. Static assets use Pages directly. Inspect Cloudflare deployment logs for packaging and compatibility errors.
5. Once publication is approved, set `SITE_URL=https://bongoponji.com` in the production environment only and redeploy. Confirm canonical URLs and sitemap entries point to it. Verify Search Console using its supported ownership flow and submit `/sitemap.xml` through the Sitemaps interface. Keep preview SITE_URL unset. Cloudflare deployment and Search Console still require account access.

## Domain migration

Confirm ownership of `bongoponji.com` and complete Cloudflare zone setup. Keep the free Pages address noindexed until the custom domain is ready. Add `bongoponji.com` under **Custom domains** in Pages, verify DNS, and wait for the HTTPS certificate. In the Cloudflare DNS dashboard, make `www` a proxied record so the redirect rule can run. In **Rules → Overview → Redirect Rules**, use a Single Redirect matching `http.host eq "www.bongoponji.com"` with a dynamic target `concat("https://bongoponji.com", http.request.uri.path)`, status 301 and query-string preservation. Test the redirect over HTTPS and enable HTTP-to-HTTPS redirection. Once ready, set SITE_URL in the Pages production environment and redeploy. The build rejects a configured Pages origin other than the production apex and rejects indexing configuration on non-main Pages branches.

Use a Cloudflare Bulk Redirect for the assigned `.pages.dev` production hostname after the migration, preserving path and query. Keep preview SITE_URL unset. Verify the homepage and a nested route, HTTPS, canonical URLs, Open Graph, robots and the sitemap. In Google Search Console, add a Domain property for `bongoponji.com`, add the supplied DNS TXT record, verify ownership, and submit `https://bongoponji.com/sitemap.xml`. Submit only the eligible production URLs. [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Cloudflare redirects](https://developers.cloudflare.com/rules/url-forwarding/)

## Resources

The Cloudflare Pages Free limits include 500 builds monthly and 20,000 assets per site. Workers Free documents 100,000 requests per day and 10 ms CPU per request. Daily route visits count against the Workers quota. Static calendars, CSS and font requests bypass the Worker in the Pages package. Astronomy executes in the validation process and the request path reads the compiled daily JSON. No D1, KV or Images binding is required. D1 Free documents 10 databases per account and 500 MB per database. The current build has no database costs. Benchmark CPU in the Cloudflare dashboard before public launch. The workerd test measures a test suite locally and gives no production CPU or Core Web Vitals result. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/) · [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) · [D1 limits](https://developers.cloudflare.com/d1/platform/limits/)

CI runs on pushes, pull requests, manually and weekly. Estimate monthly workflow usage from observed job duration times build events. Private GitHub repositories draw on the account's included Actions minutes. Check the account's billing view before relying on this budget. The scheduled job validates and builds without replacing production data. Failed jobs are visible in Actions. Configure repository notifications if needed. [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
