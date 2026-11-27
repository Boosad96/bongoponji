# Phase 3 execution checklist

- [x] Pull and preserve the existing main branch and review the preceding successful GitHub Actions run.
- [x] Extend independently verified Kolkata coverage, retain the publication gate, and record tolerances and provenance.
- [x] Keep the Bangladesh civil calendar separate and preserve existing conversion and leap-year coverage.
- [x] Add previous and next day navigation and test invalid dates, regional selection and theme persistence.
- [x] Prepare the Pages Worker package, noindexed review configuration and production apex settings.
- [x] Record outstanding source and ownership requirements for the next session.
- [ ] Acquire complete and permissible Bishuddha Siddhanta evidence for Kolkata 1433–1434.
- [ ] Validate broader Kolkata and city coverage, festival observance rules and remaining astronomical calculations.
- [ ] Measure mobile Lighthouse in a stable served environment, then obtain real-user metrics after launch.
- [ ] Prepare optional ad placement after core release validation and configuration decisions.
- [ ] Deploy the Pages review build through the owner’s authorized Cloudflare account and verify the live URL.
- [ ] Verify domain ownership, configure redirects, enable production indexing and verify Search Console.

## Decisions

Historical daily links use the existing server-rendered route with a validated ISO civil date and stay out of indexing. Kolkata remains the default. Pending dates render a Bengali availability message. The four added days cover the contiguous interval with directly inspected independent comparisons. The source-reuse status applies to the independently computed results only.

The free Pages address is a review deployment. The production canonical origin is https://bongoponji.com once ownership and authorization are confirmed. www redirection is documented at the Cloudflare edge. No Cloudflare API credentials were available to this session.

The repository and local build are suitable for technical review. Public release of a complete traditional Bengali calendar remains pending. See VALIDATION_REPORT.md, SEO_REPORT.md and DEPLOYMENT.md.

## Local verification and payload measurements

Clean npm installation, the complete dependency audit, Astro diagnostics, 20 Vitest tests, the packaged Worker integration test, and the example, apex and staging build checks passed. The configured builds each had 84 sitemap entries and 113 static pages. The staging sitemap was empty and all 113 checked pages were noindexed. A Pages preview configured with the production origin was rejected by the build guard.

In the local staged build, the main stylesheet was 12,468 bytes, the Bengali WOFF2 subset 107,720 bytes, the converter HTML 9,228 bytes and the January 2027 calendar HTML 7,465 bytes. These are uncompressed artifact sizes. Lighthouse ratings, LCP, CLS and field INP remain unmeasured.
