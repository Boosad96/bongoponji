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
- 16 unit and comparison tests passed. This was the baseline before the Phase 3 extension.
- Production build passed. With the CI test origin, the static audit checked 84 unique sitemap entries and 113 HTML pages, including generated internal links, unique titles and noindex flags for pending festival and muhurat content.
- The packaged Pages Worker passed a local workerd integration test for daily SSR, cache-control and security headers, no publication of unreviewed sunrise, local day increments, month navigation and unknown-city 404.
- npm production dependency audit reported zero known vulnerabilities at check time after upgrading Astro and the Cloudflare adapter. The initial Astro 5 build had advisories and was replaced.
- Playwright was invoked. Its web server failed to start in this environment, so browser cases did not execute. Managed browser preview also failed to start. Mobile, accessibility, screenshots, Lighthouse and production Core Web Vitals are unverified.

## Kolkata sample release

The 27–29 November 2026 dataset was generated with the MIT-licensed Astronomy Engine using an independently sourced city-center observer. The minute-rounded sunrise and sunset matched the PAC Kolkata table on each date. The sunrise tithi number and paksha matched the corresponding PAC daily entry. The sample's computed end times after rounding were one minute later than PAC on each date, including the transition after midnight on November 30 in the 29 November entry. The stated tolerance is one minute for tithi end times. The source table's own horizon values are presented in a different reference context on the daily folio, so the city-specific horizon table was used for horizon comparisons.

The versioned JSON contains independently computed values. PAC tables and almanac entries were used as comparison references and were not imported into the published dataset. Its clearance flag applies to the independent calculations only. The 1433 month-boundary fixture remains outside the deployed site. [Horizon table](https://packolkata.imd.gov.in/panchang/en/tables) · [PAC daily folio](https://packolkata.imd.gov.in/panchang/en/agrahayana) · [City center](https://mapcarta.com/Kolkata)

## Phase 3 Kolkata extension

Date and location apply to Kolkata, Asia/Kolkata. The method is `drik-sunrise-tithi-v1`, using Astronomy Engine 2.1.19 at the existing observer coordinates. The end-time differences are calculated minus expected. Acceptance requires equality for the minute-rounded solar values and sunrise tithi identity, and an absolute difference of at most one minute for the tithi transition. Times are IST. A reference hour of 24 indicates the following civil day.

| Date | Sunrise expected / calculated | Sunset expected / calculated | Sunrise tithi expected / calculated | End expected / calculated | End difference | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-11-30 | 05:59 / 05:59 | 16:51 / 16:51 | Krishna 7 / 7 | Dec 1 00:12 / 00:13 | +1 min | VERIFIED |
| 2026-12-01 | 06:00 / 06:00 | 16:51 / 16:51 | Krishna 8 / 8 | 23:14 / 23:15 | +1 min | VERIFIED |
| 2026-12-02 | 06:00 / 06:00 | 16:51 / 16:51 | Krishna 9 / 9 | 22:53 / 22:53 | 0 min | VERIFIED |
| 2026-12-03 | 06:01 / 06:01 | 16:51 / 16:51 | Krishna 10 / 10 | 23:04 / 23:05 | +1 min | VERIFIED |

The daily release contains only independent computations for 27 November through 3 December 2026 inclusive. These comparisons use the city-specific horizon table and the Agrahayana tithi folio. The PAC almanac carries an all-rights-reserved notice. No permission to redistribute tables or a regional almanac was obtained. [PAC Kolkata horizon table](https://packolkata.imd.gov.in/panchang/en/tables) · [PAC Agrahayana folio](https://packolkata.imd.gov.in/panchang/en/agrahayana) · [PAC disclaimer](https://packolkata.imd.gov.in/disclaimer.php)

The PAC 1948 Saka Bengal and Assam solar table provides an internal 1433 comparison, including 15 April 2026. The RKM reader independently documents portions of the printed Bishuddha Siddhanta 1433 Ashwin edition. These sources establish specific reference dates and reading conventions. A complete Kolkata Bishuddha Siddhanta month-boundary set for both years, authorized reuse, and verified month transition rules remain open. The PAC folio lists nakshatra, yoga and karana, but source entries alone do not verify this project's calculations. Lunar phases, Ekadashi observance, Sankranti, festival rules and Adhik Maas remain outside the approved publication scope. [PAC regional table](https://packolkata.imd.gov.in/panchang/en/regional-calendars) · [RKM Panjika Reader](https://cs.rkmvu.ac.in/~tamal/jyotisha/panjika/)

The Bangladesh rules were reviewed separately. The Teachers' Portal explanation corroborates the October 2019 reform, six 31-day months and the leap-year Falgun adjustment. The portal is a secondary explanation on a government platform. The 2027 Ministry holiday circular was located, but its attachment was not used as a day-by-day civil calendar reference. [Teachers’ Portal](https://teachers.gov.bd/blog/details/593283) · [Ministry of Public Administration holiday notices](https://mopa.gov.bd/pages/public-holiday)

## Phase 4 Kolkata boundary review — 2026-11-27

The research probe independently evaluates the apparent Sun from Astronomy Engine at the previous evening's Kolkata local mean midnight (23:36:33 IST). It uses the Kundali Study's effective ayanamsha calibration near September 2026 and documented precession rate. The Kundali Study describes the July 2026 ingress as falling after that cutoff. This motivates the probe and confirms a specific rule example. A calibrated reconstruction and a complete printed edition check are separate forms of evidence. All probe rows remain pending and the script is outside the application. [RKM Kundali Study](https://cs.rkmvu.ac.in/~tamal/jyotisha/kundali/) · [Method notes in the study's script](https://cs.rkmvu.ac.in/~tamal/jyotisha/kundali/kcore.js)

The following date-only checks compare against the existing PAC 1948 Saka Bengal and Assam fixture. The tolerance is zero civil days. Agreement in this column establishes agreement with PAC for that month start only. The RKM notes identify where a printed Kolkata example is available. [PAC regional calendar](https://packolkata.imd.gov.in/panchang/en/regional-calendars) · [RKM Panjika Reader](https://cs.rkmvu.ac.in/~tamal/jyotisha/panjika/) · [RKM printed examples](https://cs.rkmvu.ac.in/~tamal/jyotisha/barbela.html)

| Month | PAC expected | Probe | Probe minus PAC | Comparison and printed evidence |
| --- | --- | --- | ---: | --- |
| 1433 Baishakh | 2026-04-15 | 2026-04-15 | 0 | PAC match |
| 1433 Jyaishtha | 2026-05-16 | 2026-05-16 | 0 | PAC match |
| 1433 Ashar | 2026-06-16 | 2026-06-16 | 0 | PAC match and printed example agrees |
| 1433 Srabon | 2026-07-17 | 2026-07-18 | +1 | PAC differs. RKM documents 17 July as the last day of Ashar |
| 1433 Bhadra | 2026-08-18 | 2026-08-18 | 0 | PAC match |
| 1433 Ashwin | 2026-09-18 | 2026-09-18 | 0 | PAC match and printed example agrees |
| 1433 Kartik | 2026-10-18 | 2026-10-18 | 0 | PAC match and printed Ashwin ends on 17 October |
| 1433 Agrahayan | 2026-11-17 | 2026-11-17 | 0 | PAC match |
| 1433 Poush | 2026-12-16 | 2026-12-17 | +1 | PAC differs. Printed Poush starts on 17 December |
| 1433 Magh | 2027-01-15 | 2027-01-15 | 0 | PAC match and printed Poush ends on 14 January |
| 1433 Falgun | 2027-02-14 | 2027-02-14 | 0 | PAC match |
| 1433 Chaitra | 2027-03-16 | 2027-03-16 | 0 | PAC match |
| 1434 Baishakh | Applicable printed or PAC regional date pending | 2027-04-15 | — | PAC gives the 14 April Mesha ingress in an all-India table. That field is an astronomical transition. The Kolkata month-start comparison is pending |
| 1434 Jyaishtha–Chaitra | Applicable printed or PAC regional dates pending | Generated by the research script | — | 11 candidates pending authoritative comparison |

No source-use permission was obtained. The scripts use independently calculated values. The public data still covers only 27 November–3 December 2026 and retains the existing method and publication checks. The Phase 4 sequencing requirement keeps new daily batches closed until applicable month boundaries are verified. [PAC ingress table](https://packolkata.imd.gov.in/panchang/en/transist_rasis) · [PAC reuse disclaimer](https://packolkata.imd.gov.in/disclaimer.php)

### Barrackpore cross-check — 2026-11-27

Vivekananda Math, Barrackpore, published an institutional schedule explicitly following Bishuddha Siddhanta. Its paired civil and Bengali dates provide the checks below. For rows after the first day of a Bengali month, subtract the Bengali day number minus one from the listed civil date. The schedule is a cross-reference for the dates it lists. Source reuse was not cleared, and no schedule data was added to the release. [2026–27 Vivekananda Math schedule](https://asvarkvm.org/sites/default/files/Yearly%20Events%202026-2027.pdf)

| Month | Schedule-derived start | Probe | Difference | Result |
| --- | --- | --- | ---: | --- |
| 1433 Ashar | 2026-06-16 | 2026-06-16 | 0 days | Corroborated |
| 1433 Srabon | 2026-07-18 | 2026-07-18 | 0 days | Corroborated, differs from PAC regional table |
| 1433 Bhadra | 2026-08-18 | 2026-08-18 | 0 days | Corroborated |
| 1433 Ashwin | 2026-09-18 | 2026-09-18 | 0 days | Corroborated |
| 1433 Kartik | 2026-10-18 | 2026-10-18 | 0 days | Corroborated |
| 1433 Agrahayan | 2026-11-17 | 2026-11-17 | 0 days | Corroborated |
| 1433 Poush | 2026-12-17 | 2026-12-17 | 0 days | Corroborated, differs from PAC regional table |
| 1433 Magh | 2027-01-15 | 2027-01-15 | 0 days | Corroborated |
| 1433 Falgun | 2027-02-14 | 2027-02-14 | 0 days | Corroborated |
| 1434 Baishakh | 2027-04-15 | 2027-04-15 | 0 days | Explicit calendar anchor |

The remaining printed comparisons are 1433 Baishakh, Jyaishtha and Chaitra, plus 1434 Jyaishtha through Chaitra. A search for the 1434 printed edition, an equivalent institutional schedule, and the PAC 1949 Saka regional table found no accessible complete applicable reference. The 1434 Baishakh anchor supersedes the earlier pending note for that month only. Step 1 remains open and the release dataset is unchanged.

Anandabazar's 1433 roundup attributes its dates to Bishuddha Siddhanta. It marks 15 April 2026 as 1 Baishakh and pairs 7 Chaitra with 22 March 2027, yielding 16 March as the Chaitra start. Both match the probe with a difference of zero days. These are secondary corroborations for the remaining printed-edition checks. [Anandabazar 1433 roundup](https://www.anandabazar.com/amp/horoscope/puja-dates-for-bengali-year-1433-from-15th-april-2026-to-14th-april-2027-dgtl/cid/1680312)
