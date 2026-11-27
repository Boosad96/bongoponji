# Validation report

Source review date: 2026-11-27.

| Feature | Evidence and checks | Result |
| --- | --- | --- |
| Bengal and Assam solar calendar | PAC 1948 Saka regional table. All 12 published month starts tested. The RKM reader independently agrees with the Ashwin start and end. | Source-backed date conversion fixture, 15 April 2026 to 13 April 2027. Final day conservatively bounded. Publication clearance for the PAC-based dataset remains open. Bishuddha Siddhanta support is unclaimed. |
| Bangladesh civil calendar | 2019 rules described on Teachers' Portal and contemporary reporting quoting the calendar committee. February 21, March 26, April 14 and December 16 anchor checks. February 2028 leap handling and exhaustive round trips within the implemented date window. | Passed. Individual future government almanacs were not compared. |
| Kolkata horizon | PAC tables, five reference days from March, April, June, November and December 2026. Both sunrise and sunset compared using a maximum absolute tolerance of two minutes. | All ten comparisons passed. Scope is the listed fixtures, not blanket approval of the output. |
| Tithi | Checked a change from Krishna Amavasya to Shukla Pratipada around an Astronomy Engine new moon and a five-second internal boundary tolerance. | Internal consistency passed. Three Kolkata sunrise-assigned tithis and their end times were independently checked against PAC as described below. Broader coverage is open. |
| Publication | All five states tested, including wrong date and missing provenance. | Passed. The three independently computed Kolkata records below passed the sample gate. |

See DATA_SOURCES.md for source links. Festival observance rules, muhurat, nakshatra, yoga, karana and sankranti are pending.

## Site checks

- Astro diagnostics passed on the upgraded dependency stack.
- 16 unit and comparison tests passed. The only release records are the three Kolkata samples below.
- Production build passed. With the CI test origin, the static audit checked 84 unique sitemap entries and 113 HTML pages, including generated internal links, unique titles and noindex flags for pending festival and muhurat content.
- The packaged Pages Worker passed a local workerd integration test for daily SSR, cache-control and security headers, no publication of unreviewed sunrise, local day increments, month navigation and unknown-city 404.
- npm production dependency audit reported zero known vulnerabilities at check time after upgrading Astro and the Cloudflare adapter. The initial Astro 5 build had advisories and was replaced.
- Playwright was invoked. Its web server failed to start in this environment, so browser cases did not execute. Managed browser preview also failed to start. Mobile, accessibility, screenshots, Lighthouse and production Core Web Vitals are unverified.

## Kolkata sample release

The 27–29 November 2026 dataset was generated with the MIT-licensed Astronomy Engine using an independently sourced city-center observer. The minute-rounded sunrise and sunset matched the PAC Kolkata table on each date. The sunrise tithi number and paksha matched the corresponding PAC daily entry. The sample's computed end times after rounding were one minute later than PAC on each date, including the transition after midnight on November 30 in the 29 November entry. The stated tolerance is one minute for tithi end times. The source table's own horizon values are presented in a different reference context on the daily folio, so the city-specific horizon table was used for horizon comparisons.

The versioned JSON contains independently computed values. PAC tables and almanac entries were used as comparison references and were not imported into the published dataset. Its clearance flag applies to the independent calculations only. The 1433 month-boundary fixture remains outside the deployed site. [Horizon table](https://packolkata.imd.gov.in/panchang/en/tables) · [PAC daily folio](https://packolkata.imd.gov.in/panchang/en/agrahayana) · [City center](https://mapcarta.com/Kolkata)
