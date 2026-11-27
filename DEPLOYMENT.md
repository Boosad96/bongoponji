# GitHub to Cloudflare Pages

## Release prerequisites

Obtain owner authorization for the GitHub repository, Cloudflare account and any DNS changes. Review VALIDATION_REPORT.md and KNOWN_LIMITATIONS.md before enabling public production indexing. The verified P0 release remains blocked by Panchang data coverage and approval. Leave SITE_URL unset for a review build.

## Web interface

1. Create or connect a private GitHub repository named `bongoponji`. Transfer the local Git history using the GitHub integration once repository write access is available. Use the Actions tab to review the validation workflow.
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
   | Site origin | Set `SITE_URL` to the actual assigned HTTPS Pages origin after review, without a trailing slash |
   | Corrections | Set `PUBLIC_CORRECTION_EMAIL` to an owner-managed public address |

4. Deploy the review build and use the assigned Pages link. Confirm the annual calendars, conversion in both directions, source-rendered daily HTML, no-store response headers and real 404. The build packages an Astro Worker under `_worker.js` and uses `_routes.json` to limit Worker invocations to daily routes. Static assets use Pages directly. Inspect Cloudflare deployment logs for packaging and compatibility errors.
5. Once publication is approved, set the production origin and redeploy. Confirm canonical URLs and sitemap entries point to it. Verify Search Console using its supported ownership flow and submit `/sitemap.xml` through the Sitemaps interface. Keep preview SITE_URL unset. Cloudflare deployment and Search Console still require account access.

## Domain migration

Register the custom domain separately. In Pages, add the domain under **Custom domains**, complete DNS verification and wait for HTTPS. Set SITE_URL to that origin and redeploy. Set a Cloudflare Bulk Redirect from the old Pages address to the custom hostname with 301, path preservation, subpath matching and query preservation. Verify the home page, a nested path, sitemap and social tags. Check that preview addresses remain unindexed. Verify the custom domain property in Search Console and submit its sitemap. Bring any future widgets and hreflang links onto the same origin.

## Resources

The Cloudflare Pages Free limits include 500 builds monthly and 20,000 assets per site. Workers Free documents 100,000 requests per day and 10 ms CPU per request. Daily route visits count against the Workers quota. Static calendars, CSS and font requests bypass the Worker in the Pages package. Astronomy executes in the validation process and the request path reads the compiled daily JSON. No D1, KV or Images binding is required. D1 Free documents 10 databases per account and 500 MB per database. The current build has no database costs. Benchmark CPU in the Cloudflare dashboard before public launch. The workerd test measures a test suite locally and gives no production CPU or Core Web Vitals result. [Pages limits](https://developers.cloudflare.com/pages/platform/limits/) · [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) · [D1 limits](https://developers.cloudflare.com/d1/platform/limits/)

CI runs on pushes, pull requests, manually and weekly. Estimate monthly workflow usage from observed job duration times build events. Private GitHub repositories draw on the account's included Actions minutes. Check the account's billing view before relying on this budget. The scheduled job validates and builds without replacing production data. Failed jobs are visible in Actions. Configure repository notifications if needed. [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
