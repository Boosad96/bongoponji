# Bongoponji owner launch checklist

The [Pages review deployment](https://bongoponji.pages.dev/) is live and noindexed. Keep the Preview environment without SITE_URL throughout this checklist. The owner executes the account, billing, DNS and Search Console steps after approving verified coverage in [VALIDATION_REPORT.md](VALIDATION_REPORT.md).

1. **Review the release.** Verify that the intended pages rely on the dates approved in the validation report. Read [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md) and confirm that missing dates and timings display as unavailable. Confirm that GitHub main passes CI.
2. **Buy the domain.** Check availability of `bongoponji.com` with your registrar, pay at checkout and confirm ownership. Follow Cloudflare's zone onboarding steps and wait for the zone to become active. [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
3. **Attach the apex.** In Cloudflare, open **Workers & Pages → bongoponji → Custom domains → Set up a custom domain**. Add `bongoponji.com`, complete DNS verification and wait for HTTPS to work. Keep the existing build command `npm run build`, output `dist/client`, and tested Node version.
4. **Set redirects.** With `www` proxied and HTTPS active, configure a permanent redirect from `www.bongoponji.com` to the apex that preserves the path and query string. Once the apex is serving the reviewed build, configure the equivalent permanent redirect for the production `bongoponji.pages.dev` host. See [DEPLOYMENT.md](DEPLOYMENT.md) for the Cloudflare rule and redirect references.
5. **Enable the configured production origin.** In the Pages project's **Settings → Variables and Secrets**, select **Production** and add `SITE_URL=https://bongoponji.com`. Leave it unset in Preview. Redeploy the tested `main` revision from the dashboard and check the build log.
6. **Verify the public build.** Run the audit below from the release checkout. On the live apex, open the homepage and the three approved festival pages: Saraswati Puja (`/festivals/saraswati-puja/2027/`), Maha Shivaratri (`/festivals/shivaratri/2027/`), and Poila Boishakh (`/festivals/pohela-boishakh/2027/`). Confirm HTTP 200, correct dates and provenance, matching HTTPS apex canonicals and Open Graph URLs, and absence of noindex for eligible pages. Confirm that `/sitemap.xml` contains only eligible apex URLs, `/robots.txt` points to that sitemap, pending ritual and unverified festival pages remain noindexed and absent from the sitemap, and the redirects preserve a nested path and query.
7. **Verify ownership and submit the sitemap.** In Search Console, add a **Domain** property for `bongoponji.com`, copy the verification TXT record into the domain's authoritative DNS, and select **Verify**. In **Sitemaps**, submit `https://bongoponji.com/sitemap.xml`. Use URL Inspection to confirm indexing eligibility on the homepage and the three festival pages. [Google Search Console ownership verification](https://support.google.com/webmasters/answer/9008080) · [Google sitemap submission](https://support.google.com/webmasters/answer/7451001)

## Repeatable build audit

This local test builds with an example origin and does not change Cloudflare configuration.

```sh
SITE_URL=https://bongoponji.example npm run build
node scripts/check-static.mjs
node scripts/test-worker.mjs
```

For the noindexed configuration, run `env -u SITE_URL npm run build` and `node scripts/check-static.mjs --preview`. For local Pages serving, run `npm run preview:pages -- --port 8789` after a build. The helper isolates the packaged output from Astro's generated Workers deployment configuration.
