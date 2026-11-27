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

## Grahan cross-check — 2026-11-27

The research script ran Grahan's `panchangAtSunrise` on every one of the 24 Kolkata boundary candidates and every Step 2 daily date from 4 December 2026 through 31 December 2027 inclusive. The existing Astronomy Engine 2.1.19 daily generator supplies the comparison values. Grahan uses its own MIT-licensed core, with no Astronomy Engine dependency. Both calculations use the same Kolkata observer coordinates and timezone. Sunrise and sunset agree if rounded clock minutes are identical. Tithi agreement requires matching number and paksha at each engine's sunrise. End-time agreement requires a difference within one rounded minute for the same tithi.

This checks the astronomy **on** candidate boundary days. Grahan's sunrise output does not assign Bengali solar month starts or establish the printed calendar convention. All results below are research only. Agreement never changes publication status. A date-specific published source is still required. Run `node scripts/cross-check-kolkata.mjs` to reproduce the per-date JSON with both engine values and signed end-time differences. [Grahan source and API](https://github.com/svarbhanu/grahan)

### Boundary candidate days

| Year/month | Candidate date | Sunrise | Sunset | Tithi | End difference, Grahan minus Astronomy Engine |
| --- | --- | --- | --- | --- | ---: |
| 1433/1 | 2026-04-15 | Match | Match | Match | 0 min |
| 1433/2 | 2026-05-16 | Match | Match | Match | 0 min |
| 1433/3 | 2026-06-16 | Match | Match | Match | 0 min |
| 1433/4 | 2026-07-18 | Match | Differs | Match | -1 min |
| 1433/5 | 2026-08-18 | Differs | Match | Match | -1 min |
| 1433/6 | 2026-09-18 | Match | Match | Match | -1 min |
| 1433/7 | 2026-10-18 | Match | Match | Match | -1 min |
| 1433/8 | 2026-11-17 | Match | Differs | Match | -1 min |
| 1433/9 | 2026-12-17 | Match | Match | Match | -1 min |
| 1433/10 | 2027-01-15 | Match | Match | Match | -1 min |
| 1433/11 | 2027-02-14 | Match | Differs | Match | -1 min |
| 1433/12 | 2027-03-16 | Match | Match | Match | 0 min |
| 1434/1 | 2027-04-15 | Match | Match | Match | -1 min |
| 1434/2 | 2027-05-16 | Match | Match | Match | -1 min |
| 1434/3 | 2027-06-16 | Match | Match | Match | 0 min |
| 1434/4 | 2027-07-18 | Match | Differs | Match | -1 min |
| 1434/5 | 2027-08-18 | Match | Differs | Match | -1 min |
| 1434/6 | 2027-09-18 | Match | Differs | Match | -1 min |
| 1434/7 | 2027-10-19 | Match | Differs | Match | 0 min |
| 1434/8 | 2027-11-18 | Match | Match | Match | -1 min |
| 1434/9 | 2027-12-17 | Differs | Match | Match | 0 min |
| 1434/10 | 2028-01-16 | Match | Differs | Match | -1 min |
| 1434/11 | 2028-02-14 | Match | Match | Match | -1 min |
| 1434/12 | 2028-03-15 | Match | Match | Match | -1 min |

All 24 tithi labels matched, and all 24 end-time differences were within one minute. Minute-rounded sunrise matched on 22 dates and sunset on 16. All four fields agreed on 14 dates.

### Step 2 daily dates

| Batch | Dates checked | Sunrise matches | Sunset matches | Tithi matches | End-time matches | All four |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-12 | 28 | 23 | 22 | 28 | 28 | 20 |
| 2027-01 | 31 | 25 | 25 | 31 | 31 | 22 |
| 2027-02 | 28 | 20 | 23 | 28 | 28 | 16 |
| 2027-03 | 31 | 24 | 25 | 31 | 31 | 20 |
| 2027-04 | 30 | 26 | 24 | 30 | 30 | 20 |
| 2027-05 | 31 | 22 | 24 | 31 | 31 | 17 |
| 2027-06 | 30 | 23 | 25 | 30 | 30 | 18 |
| 2027-07 | 31 | 25 | 25 | 31 | 31 | 19 |
| 2027-08 | 31 | 26 | 25 | 30 | 30 | 20 |
| 2027-09 | 30 | 21 | 6 | 30 | 30 | 4 |
| 2027-10 | 31 | 22 | 26 | 31 | 31 | 18 |
| 2027-11 | 30 | 26 | 26 | 30 | 30 | 23 |
| 2027-12 | 31 | 25 | 22 | 31 | 31 | 18 |
| Total | 393 | 308 | 298 | 392 | 392 | 235 |

The only sunrise-tithi disagreement was 2027-08-05. Astronomy Engine labeled it shukla 3 at 05:09 IST. Grahan labeled it shukla 4 at 05:09 IST. The two end times belong to different tithis, so this row cannot establish end-time agreement.

### 1434 source availability

The printed 1434 Bishuddha Siddhanta Panjika could not be confirmed as published on 27 November 2026. The retailer listing still said “Coming Soon” and was out of stock, and a secondary reference described the edition as forthcoming. The Vivekananda Math search still surfaced only its 2026–27 observance schedule. Its separate 2027–28 school notice is unrelated. The remaining eleven 1434 boundaries are gated on publication or access to an authoritative reference. Computed candidates already exist. Reuse clearance remains open and the site dataset was unchanged. [Edition listing](https://bongohridoy.com/product/bisuddha-siddhanta-panjika-1434/) · [Publication status note](https://myastrology.in/en/bengali-calendar/marriage-dates-1434) · [Vivekananda Math 2026–27 schedule](https://asvarkvm.org/sites/default/files/Yearly%20Events%202026-2027.pdf)

## Step 2 anomaly investigation — 2026-11-27

**September 2027 sunsets.** Both engines use the apparent upper limb crossing a refracted horizon and the same Kolkata latitude and longitude. Astronomy Engine uses 34 arcminutes of near-horizon refraction at the zero-height observer. Grahan Core 1.0.1 uses 0.6117° (36.702 arcminutes) and a distance-dependent solar semidiameter. Before rounding, Grahan's 30 sunsets were consistently 12.318–12.472 seconds later. Re-running the Astronomy Engine centre-altitude search with Grahan's refraction and semidiameter convention reduced the residual to 0.557–0.619 seconds and raised nearest-minute agreement from 6/30 to 30/30. The refraction difference causes the systematic offset. September's event times cross the nearest-minute rounding threshold on 24 dates. The observer coordinates and comparator rounding rule were held fixed. [Grahan](https://github.com/svarbhanu/grahan) · [Astronomy Engine](https://github.com/cosinekitty/astronomy)

**5 August 2027, Kolkata.** The published Ved Prashnavali sunrise table labels the day **Shukla Chaturthi** at 05:09 IST, ending around 02:28 IST on 6 August. Tattva's Swiss Ephemeris calendar also assigns Shukla Chaturthi, using a displayed sunrise of 05:13. Drik Panchang's Kolkata festival list associates that day with Shukla Chaturthi observance. The festival listing provides secondary context for the sunrise question. Astronomy Engine's unrounded sunrise was 05:09:29.777 IST and its Tritiya end was 05:09:49.250. Grahan's sunrise was 05:09:16.707 and its Tritiya end was 05:09:16.426, less than one second before its sunrise. The published online label supports Chaturthi, but an applicable PAC or printed Bishuddha Siddhanta folio was unavailable and neither the unresolved engine record nor any August date was approved in this December-only batch. [Ved Prashnavali sunrise table](https://vedprashnavali.com/panchang/kolkata/2027-08) · [Tattva Kolkata table](https://mytattva.com/panchang/kolkata/2027-08) · [Drik Panchang Kolkata festival list](https://www.drikpanchang.com/festivals/month/festivals-august.html?geoname-id=1275004&year=2027)

## Step 2 December batch — checked 2026-11-27

This batch is limited to independently calculated Kolkata `drik-sunrise-tithi-v1` data from 4–31 December 2026. It does not certify Bengali month boundaries. PAC Kolkata horizon figures supply the exact minute comparison. The Agrahayana folio applies through 21 December and Pausha from 22 December. The ordered first tithi is checked against the local sunrise candidate. PAC's 24+ hour notation rolls into the following civil date. For 9 December the folio gives an all-day Pratipad and the next entry supplies its end time. Rows must match both solar minutes and the sunrise tithi, with tithi end within one minute. Comparison facts are recorded here and only independent computations were added to the release. [PAC Kolkata horizon](https://packolkata.imd.gov.in/panchang/en/tables) · [Agrahayana folio](https://packolkata.imd.gov.in/panchang/en/agrahayana) · [Pausha folio](https://packolkata.imd.gov.in/panchang/en/pausha)

| Date | Sunrise PAC / computed | Sunset PAC / computed | Sunrise tithi PAC / computed | End PAC / computed (IST) | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2026-12-04 | 06:02 / 06:02 | 16:52 / 16:51 | krishna 11 / krishna 11 | 04 Dec 23:45 / 04 Dec 23:46 | +1 min | WITHHELD |
| 2026-12-05 | 06:02 / 06:02 | 16:52 / 16:52 | krishna 12 / krishna 12 | 06 Dec 00:52 / 06 Dec 00:53 | +1 min | VERIFIED |
| 2026-12-06 | 06:03 / 06:03 | 16:52 / 16:52 | krishna 13 / krishna 13 | 07 Dec 02:23 / 07 Dec 02:23 | +0 min | VERIFIED |
| 2026-12-07 | 06:04 / 06:04 | 16:52 / 16:52 | krishna 14 / krishna 14 | 08 Dec 04:13 / 08 Dec 04:14 | +1 min | VERIFIED |
| 2026-12-08 | 06:04 / 06:04 | 16:52 / 16:52 | krishna 15 / krishna 15 | 09 Dec 06:22 / 09 Dec 06:23 | +1 min | VERIFIED |
| 2026-12-09 | 06:05 / 06:05 | 16:53 / 16:52 | shukla 1 / krishna 15 | 10 Dec 08:47 / 09 Dec 06:23 | Different tithis | WITHHELD |
| 2026-12-10 | 06:06 / 06:06 | 16:53 / 16:53 | shukla 1 / shukla 1 | 10 Dec 08:47 / 10 Dec 08:47 | +0 min | VERIFIED |
| 2026-12-11 | 06:06 / 06:06 | 16:53 / 16:53 | shukla 2 / shukla 2 | 11 Dec 11:24 / 11 Dec 11:24 | +0 min | VERIFIED |
| 2026-12-12 | 06:07 / 06:07 | 16:54 / 16:53 | shukla 3 / shukla 3 | 12 Dec 14:07 / 12 Dec 14:07 | +0 min | WITHHELD |
| 2026-12-13 | 06:07 / 06:07 | 16:54 / 16:54 | shukla 4 / shukla 4 | 13 Dec 16:48 / 13 Dec 16:49 | +1 min | VERIFIED |
| 2026-12-14 | 06:08 / 06:08 | 16:54 / 16:54 | shukla 5 / shukla 5 | 14 Dec 19:17 / 14 Dec 19:17 | +0 min | VERIFIED |
| 2026-12-15 | 06:09 / 06:09 | 16:55 / 16:54 | shukla 6 / shukla 6 | 15 Dec 21:20 / 15 Dec 21:21 | +1 min | WITHHELD |
| 2026-12-16 | 06:09 / 06:09 | 16:55 / 16:55 | shukla 7 / shukla 7 | 16 Dec 22:46 / 16 Dec 22:47 | +1 min | VERIFIED |
| 2026-12-17 | 06:10 / 06:10 | 16:55 / 16:55 | shukla 8 / shukla 8 | 17 Dec 23:26 / 17 Dec 23:27 | +1 min | VERIFIED |
| 2026-12-18 | 06:10 / 06:10 | 16:56 / 16:56 | shukla 9 / shukla 9 | 18 Dec 23:15 / 18 Dec 23:15 | +0 min | VERIFIED |
| 2026-12-19 | 06:11 / 06:11 | 16:56 / 16:56 | shukla 10 / shukla 10 | 19 Dec 22:10 / 19 Dec 22:10 | +0 min | VERIFIED |
| 2026-12-20 | 06:11 / 06:11 | 16:57 / 16:57 | shukla 11 / shukla 11 | 20 Dec 20:15 / 20 Dec 20:16 | +1 min | VERIFIED |
| 2026-12-21 | 06:12 / 06:12 | 16:57 / 16:57 | shukla 12 / shukla 12 | 21 Dec 17:37 / 21 Dec 17:37 | +0 min | VERIFIED |
| 2026-12-22 | 06:12 / 06:12 | 16:58 / 16:58 | shukla 13 / shukla 13 | 22 Dec 14:24 / 22 Dec 14:25 | +1 min | VERIFIED |
| 2026-12-23 | 06:13 / 06:13 | 16:58 / 16:58 | shukla 14 / shukla 14 | 23 Dec 10:48 / 23 Dec 10:48 | +0 min | VERIFIED |
| 2026-12-24 | 06:13 / 06:13 | 16:59 / 16:59 | shukla 15 / shukla 15 | 24 Dec 06:58 / 24 Dec 06:59 | +1 min | VERIFIED |
| 2026-12-25 | 06:14 / 06:14 | 16:59 / 16:59 | krishna 2 / krishna 2 | 25 Dec 23:27 / 25 Dec 23:27 | +0 min | VERIFIED |
| 2026-12-26 | 06:14 / 06:14 | 17:00 / 17:00 | krishna 3 / krishna 3 | 26 Dec 20:06 / 26 Dec 20:06 | +0 min | VERIFIED |
| 2026-12-27 | 06:15 / 06:15 | 17:01 / 17:00 | krishna 4 / krishna 4 | 27 Dec 17:14 / 27 Dec 17:14 | +0 min | WITHHELD |
| 2026-12-28 | 06:15 / 06:15 | 17:01 / 17:01 | krishna 5 / krishna 5 | 28 Dec 14:59 / 28 Dec 14:59 | +0 min | VERIFIED |
| 2026-12-29 | 06:15 / 06:15 | 17:02 / 17:01 | krishna 6 / krishna 6 | 29 Dec 13:25 / 29 Dec 13:26 | +1 min | WITHHELD |
| 2026-12-30 | 06:16 / 06:16 | 17:02 / 17:02 | krishna 7 / krishna 7 | 30 Dec 12:37 / 30 Dec 12:38 | +1 min | VERIFIED |
| 2026-12-31 | 06:16 / 06:16 | 17:03 / 17:03 | krishna 8 / krishna 8 | 31 Dec 12:33 / 31 Dec 12:34 | +1 min | VERIFIED |

22 of 28 dates verified. 4, 9, 12, 15, 27 and 29 December remain withheld. All six missed the exact sunset check by one minute. On 9 December the local Astronomy Engine sunrise also precedes the calculated Amavasya end, while the PAC folio labels the day Pratipad. Limits and methods were kept fixed.

## December sunset rerun and January batch — checked 2026-11-27

The December diagnostic used the same Kolkata observer and nearest-minute rounding. Astronomy Engine searched for the Sun's centre crossing the altitude defined by Grahan's 0.6117° refraction plus the distance-dependent solar semidiameter (959.63 arcseconds at 1 AU). The PAC sunset check still requires exactly the same displayed minute. [PAC Kolkata horizon](https://packolkata.imd.gov.in/panchang/en/tables) · [Grahan source](https://github.com/svarbhanu/grahan)

| December date | PAC sunset | Released method candidate | Corrected sunset IST | Exact-minute sunset result |
| --- | --- | --- | --- | --- |
| 4 | 16:52 | 16:51 | 16:51:40.828 → 16:52 | Pass |
| 9 | 16:53 | 16:52 | 16:52:42.715 → 16:53 | Pass |
| 12 | 16:54 | 16:53 | 16:53:35.596 → 16:54 | Pass |
| 15 | 16:55 | 16:54 | 16:54:39.482 → 16:55 | Pass |
| 27 | 17:01 | 17:00 | 17:00:29.798 → 17:00 | Fail |
| 29 | 17:02 | 17:01 | 17:01:40.521 → 17:02 | Pass |

The rerun is a sunset-only sensitivity check. The published method remains `drik-sunrise-tithi-v1`, and December release records were left as they were. 9 December also retains its independently established sunrise-tithi conflict.

January uses the existing `drik-sunrise-tithi-v1` method throughout. Both solar events must match the Kolkata table at the exact minute. Sunrise tithi number and paksha must agree and its end must be within ±1 minute. The Pausha folio covers 1–20 January and Magha covers 21–31 January. The next entry supplies the end time when a tithi lasts all day. Times after hour 24 roll into the following civil day. [PAC Kolkata horizon](https://packolkata.imd.gov.in/panchang/en/tables) · [Pausha folio](https://packolkata.imd.gov.in/panchang/en/pausha) · [Magha folio](https://packolkata.imd.gov.in/panchang/en/magha)

| Date | Sunrise PAC / computed | Sunset PAC / computed | Sunrise tithi PAC / computed | End PAC / computed, IST | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2027-01-01 | 06:16 / 06:16 | 17:04 / 17:03 | krishna 9 / krishna 9 | 01 Jan 13:11 / 01 Jan 13:11 | +0 min | WITHHELD |
| 2027-01-02 | 06:17 / 06:17 | 17:04 / 17:04 | krishna 10 / krishna 10 | 02 Jan 14:25 / 02 Jan 14:25 | +0 min | VERIFIED |
| 2027-01-03 | 06:17 / 06:17 | 17:05 / 17:05 | krishna 11 / krishna 11 | 03 Jan 16:09 / 03 Jan 16:09 | +0 min | VERIFIED |
| 2027-01-04 | 06:17 / 06:17 | 17:06 / 17:05 | krishna 12 / krishna 12 | 04 Jan 18:16 / 04 Jan 18:17 | +1 min | WITHHELD |
| 2027-01-05 | 06:17 / 06:18 | 17:06 / 17:06 | krishna 13 / krishna 13 | 05 Jan 20:40 / 05 Jan 20:41 | +1 min | WITHHELD |
| 2027-01-06 | 06:18 / 06:18 | 17:07 / 17:07 | krishna 14 / krishna 14 | 06 Jan 23:15 / 06 Jan 23:15 | +0 min | VERIFIED |
| 2027-01-07 | 06:18 / 06:18 | 17:08 / 17:07 | krishna 15 / krishna 15 | 08 Jan 01:54 / 08 Jan 01:55 | +1 min | WITHHELD |
| 2027-01-08 | 06:18 / 06:18 | 17:08 / 17:08 | shukla 1 / shukla 1 | 09 Jan 04:34 / 09 Jan 04:35 | +1 min | VERIFIED |
| 2027-01-09 | 06:18 / 06:18 | 17:09 / 17:09 | shukla 2 / shukla 2 | 10 Jan 07:08 / 10 Jan 07:08 | +0 min | VERIFIED |
| 2027-01-10 | 06:18 / 06:19 | 17:10 / 17:09 | shukla 2 / shukla 2 | 10 Jan 07:08 / 10 Jan 07:08 | +0 min | WITHHELD |
| 2027-01-11 | 06:19 / 06:19 | 17:10 / 17:10 | shukla 3 / shukla 3 | 11 Jan 09:29 / 11 Jan 09:30 | +1 min | VERIFIED |
| 2027-01-12 | 06:19 / 06:19 | 17:11 / 17:11 | shukla 4 / shukla 4 | 12 Jan 11:30 / 12 Jan 11:30 | +0 min | VERIFIED |
| 2027-01-13 | 06:19 / 06:19 | 17:12 / 17:11 | shukla 5 / shukla 5 | 13 Jan 13:02 / 13 Jan 13:03 | +1 min | WITHHELD |
| 2027-01-14 | 06:19 / 06:19 | 17:12 / 17:12 | shukla 6 / shukla 6 | 14 Jan 13:59 / 14 Jan 14:00 | +1 min | VERIFIED |
| 2027-01-15 | 06:19 / 06:19 | 17:13 / 17:13 | shukla 7 / shukla 7 | 15 Jan 14:14 / 15 Jan 14:15 | +1 min | VERIFIED |
| 2027-01-16 | 06:19 / 06:19 | 17:14 / 17:14 | shukla 8 / shukla 8 | 16 Jan 13:43 / 16 Jan 13:44 | +1 min | VERIFIED |
| 2027-01-17 | 06:19 / 06:19 | 17:15 / 17:14 | shukla 9 / shukla 9 | 17 Jan 12:27 / 17 Jan 12:28 | +1 min | WITHHELD |
| 2027-01-18 | 06:19 / 06:19 | 17:15 / 17:15 | shukla 10 / shukla 10 | 18 Jan 10:28 / 18 Jan 10:28 | +0 min | VERIFIED |
| 2027-01-19 | 06:19 / 06:19 | 17:16 / 17:16 | shukla 11 / shukla 11 | 19 Jan 07:50 / 19 Jan 07:50 | +0 min | VERIFIED |
| 2027-01-20 | 06:19 / 06:19 | 17:17 / 17:16 | shukla 13 / shukla 13 | 21 Jan 01:12 / 21 Jan 01:13 | +1 min | WITHHELD |
| 2027-01-21 | 06:18 / 06:19 | 17:17 / 17:17 | shukla 14 / shukla 14 | 21 Jan 21:31 / 21 Jan 21:31 | +0 min | WITHHELD |
| 2027-01-22 | 06:18 / 06:18 | 17:18 / 17:18 | shukla 15 / shukla 15 | 22 Jan 17:47 / 22 Jan 17:48 | +1 min | VERIFIED |
| 2027-01-23 | 06:18 / 06:18 | 17:19 / 17:18 | krishna 1 / krishna 1 | 23 Jan 14:13 / 23 Jan 14:14 | +1 min | WITHHELD |
| 2027-01-24 | 06:18 / 06:18 | 17:20 / 17:19 | krishna 2 / krishna 2 | 24 Jan 10:58 / 24 Jan 10:58 | +0 min | WITHHELD |
| 2027-01-25 | 06:18 / 06:18 | 17:20 / 17:20 | krishna 3 / krishna 3 | 25 Jan 08:11 / 25 Jan 08:11 | +0 min | VERIFIED |
| 2027-01-26 | 06:17 / 06:18 | 17:21 / 17:20 | krishna 5 / krishna 5 | 27 Jan 04:34 / 27 Jan 04:34 | +0 min | WITHHELD |
| 2027-01-27 | 06:17 / 06:17 | 17:22 / 17:21 | krishna 6 / krishna 6 | 28 Jan 03:54 / 28 Jan 03:55 | +1 min | WITHHELD |
| 2027-01-28 | 06:17 / 06:17 | 17:22 / 17:22 | krishna 7 / krishna 7 | 29 Jan 04:03 / 29 Jan 04:04 | +1 min | VERIFIED |
| 2027-01-29 | 06:17 / 06:17 | 17:23 / 17:23 | krishna 8 / krishna 8 | 30 Jan 04:59 / 30 Jan 04:59 | +0 min | VERIFIED |
| 2027-01-30 | 06:16 / 06:16 | 17:24 / 17:23 | krishna 9 / krishna 9 | 31 Jan 06:34 / 31 Jan 06:35 | +1 min | WITHHELD |
| 2027-01-31 | 06:16 / 06:16 | 17:24 / 17:24 | krishna 10 / krishna 9 | 01 Feb 08:42 / 31 Jan 06:35 | Different tithis | WITHHELD |

16 of 31 dates passed. Only independently computed passing records entered the release. The PAC figures were used for comparison only.

## Version 2 December and January reruns — checked 2026-11-27

New approvals use `drik-sunrise-tithi-v2`. Astronomy Engine computes both horizon events with Grahan's 0.6117° refraction and the distance-dependent solar semidiameter (959.63 arcseconds at 1 AU), using the engine's geocentric solar distance at the baseline event as the distance estimate for the corrected altitude search. Tithi is sampled at the unrounded v2 sunrise. Existing verified v1 records retain their original method and values. Both horizon minutes must still match exactly, the sunrise tithi label must match, and the end time must be within one minute. [PAC Kolkata horizon](https://packolkata.imd.gov.in/panchang/en/tables) · [Agrahayana](https://packolkata.imd.gov.in/panchang/en/agrahayana) · [Pausha](https://packolkata.imd.gov.in/panchang/en/pausha) · [Magha](https://packolkata.imd.gov.in/panchang/en/magha)

| Date | Sunrise PAC / v2 | Sunset PAC / v2 | Tithi PAC / v2 | End PAC / v2, IST | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2026-12-04 | 06:02 / 06:01 | 16:52 / 16:52 | krishna 11 / krishna 11 | 04 Dec 23:45 / 04 Dec 23:46 | +1 min | WITHHELD |
| 2026-12-09 | 06:05 / 06:05 | 16:53 / 16:53 | shukla 1 / krishna 15 | 10 Dec 08:47 / 09 Dec 06:23 | Different tithis | WITHHELD |
| 2026-12-12 | 06:07 / 06:07 | 16:54 / 16:54 | shukla 3 / shukla 3 | 12 Dec 14:07 / 12 Dec 14:07 | +0 min | VERIFIED |
| 2026-12-15 | 06:09 / 06:08 | 16:55 / 16:55 | shukla 6 / shukla 6 | 15 Dec 21:20 / 15 Dec 21:21 | +1 min | WITHHELD |
| 2026-12-27 | 06:15 / 06:14 | 17:01 / 17:00 | krishna 4 / krishna 4 | 27 Dec 17:14 / 27 Dec 17:14 | +0 min | WITHHELD |
| 2026-12-29 | 06:15 / 06:15 | 17:02 / 17:02 | krishna 6 / krishna 6 | 29 Dec 13:25 / 29 Dec 13:26 | +1 min | VERIFIED |
| 2027-01-01 | 06:16 / 06:16 | 17:04 / 17:04 | krishna 9 / krishna 9 | 01 Jan 13:11 / 01 Jan 13:11 | +0 min | VERIFIED |
| 2027-01-04 | 06:17 / 06:17 | 17:06 / 17:05 | krishna 12 / krishna 12 | 04 Jan 18:16 / 04 Jan 18:17 | +1 min | WITHHELD |
| 2027-01-05 | 06:17 / 06:17 | 17:06 / 17:06 | krishna 13 / krishna 13 | 05 Jan 20:40 / 05 Jan 20:41 | +1 min | VERIFIED |
| 2027-01-07 | 06:18 / 06:18 | 17:08 / 17:07 | krishna 15 / krishna 15 | 08 Jan 01:54 / 08 Jan 01:55 | +1 min | WITHHELD |
| 2027-01-10 | 06:18 / 06:18 | 17:10 / 17:10 | shukla 2 / shukla 2 | 10 Jan 07:08 / 10 Jan 07:08 | +0 min | VERIFIED |
| 2027-01-13 | 06:19 / 06:19 | 17:12 / 17:12 | shukla 5 / shukla 5 | 13 Jan 13:02 / 13 Jan 13:03 | +1 min | VERIFIED |
| 2027-01-17 | 06:19 / 06:19 | 17:15 / 17:14 | shukla 9 / shukla 9 | 17 Jan 12:27 / 17 Jan 12:28 | +1 min | WITHHELD |
| 2027-01-20 | 06:19 / 06:18 | 17:17 / 17:17 | shukla 13 / shukla 13 | 21 Jan 01:12 / 21 Jan 01:13 | +1 min | WITHHELD |
| 2027-01-21 | 06:18 / 06:18 | 17:17 / 17:17 | shukla 14 / shukla 14 | 21 Jan 21:31 / 21 Jan 21:31 | +0 min | VERIFIED |
| 2027-01-23 | 06:18 / 06:18 | 17:19 / 17:19 | krishna 1 / krishna 1 | 23 Jan 14:13 / 23 Jan 14:14 | +1 min | VERIFIED |
| 2027-01-24 | 06:18 / 06:18 | 17:20 / 17:19 | krishna 2 / krishna 2 | 24 Jan 10:58 / 24 Jan 10:58 | +0 min | WITHHELD |
| 2027-01-26 | 06:17 / 06:17 | 17:21 / 17:21 | krishna 5 / krishna 5 | 27 Jan 04:34 / 27 Jan 04:34 | +0 min | VERIFIED |
| 2027-01-27 | 06:17 / 06:17 | 17:22 / 17:21 | krishna 6 / krishna 6 | 28 Jan 03:54 / 28 Jan 03:55 | +1 min | WITHHELD |
| 2027-01-30 | 06:16 / 06:16 | 17:24 / 17:23 | krishna 9 / krishna 9 | 31 Jan 06:34 / 31 Jan 06:35 | +1 min | WITHHELD |
| 2027-01-31 | 06:16 / 06:16 | 17:24 / 17:24 | krishna 10 / krishna 9 | 01 Feb 08:42 / 31 Jan 06:35 | Different tithis | WITHHELD |

Nine of 21 reruns passed. December 9 and January 31 retain their sunrise-tithi conflicts. December 27 still misses the PAC sunset minute and now also misses the sunrise minute. December 4 and 15 pass sunset in isolation, but fail the v2 sunrise check.

## Step 2 February batch — checked 2026-11-27

All 28 Kolkata dates were computed with `drik-sunrise-tithi-v2` and compared against the PAC Kolkata horizon rows for February 2027 and the applicable tithi folio. Magha covers 1–19 February and Phalguna covers 20–28 February. The exact-minute solar and one-minute tithi end tolerances are the same as for the previous batches. Only independently computed passing rows were added. [PAC Kolkata horizon](https://packolkata.imd.gov.in/panchang/en/tables) · [Magha folio](https://packolkata.imd.gov.in/panchang/en/magha) · [Phalguna folio](https://packolkata.imd.gov.in/panchang/en/phalguna)

| Date | Sunrise PAC / v2 | Sunset PAC / v2 | Tithi PAC / v2 | End PAC / v2, IST | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2027-02-01 | 06:16 / 06:16 | 17:25 / 17:25 | krishna 10 / krishna 10 | 01 Feb 08:42 / 01 Feb 08:42 | +0 min | VERIFIED |
| 2027-02-02 | 06:15 / 06:15 | 17:26 / 17:25 | krishna 11 / krishna 11 | 02 Feb 11:11 / 02 Feb 11:11 | +0 min | WITHHELD |
| 2027-02-03 | 06:15 / 06:15 | 17:26 / 17:26 | krishna 12 / krishna 12 | 03 Feb 13:51 / 03 Feb 13:51 | +0 min | VERIFIED |
| 2027-02-04 | 06:14 / 06:14 | 17:27 / 17:27 | krishna 13 / krishna 13 | 04 Feb 16:32 / 04 Feb 16:32 | +0 min | VERIFIED |
| 2027-02-05 | 06:14 / 06:14 | 17:28 / 17:27 | krishna 14 / krishna 14 | 05 Feb 19:06 / 05 Feb 19:06 | +0 min | WITHHELD |
| 2027-02-06 | 06:14 / 06:13 | 17:28 / 17:28 | krishna 15 / krishna 15 | 06 Feb 21:26 / 06 Feb 21:27 | +1 min | WITHHELD |
| 2027-02-07 | 06:13 / 06:13 | 17:29 / 17:28 | shukla 1 / shukla 1 | 07 Feb 23:28 / 07 Feb 23:28 | +0 min | WITHHELD |
| 2027-02-08 | 06:13 / 06:12 | 17:29 / 17:29 | shukla 2 / shukla 2 | 09 Feb 01:07 / 09 Feb 01:08 | +1 min | WITHHELD |
| 2027-02-09 | 06:12 / 06:12 | 17:30 / 17:30 | shukla 3 / shukla 3 | 10 Feb 02:20 / 10 Feb 02:21 | +1 min | VERIFIED |
| 2027-02-10 | 06:12 / 06:11 | 17:31 / 17:30 | shukla 4 / shukla 4 | 11 Feb 03:05 / 11 Feb 03:06 | +1 min | WITHHELD |
| 2027-02-11 | 06:11 / 06:11 | 17:31 / 17:31 | shukla 5 / shukla 5 | 12 Feb 03:19 / 12 Feb 03:19 | +0 min | VERIFIED |
| 2027-02-12 | 06:10 / 06:10 | 17:32 / 17:31 | shukla 6 / shukla 6 | 13 Feb 03:00 / 13 Feb 03:00 | +0 min | WITHHELD |
| 2027-02-13 | 06:10 / 06:10 | 17:32 / 17:32 | shukla 7 / shukla 7 | 14 Feb 02:07 / 14 Feb 02:08 | +1 min | VERIFIED |
| 2027-02-14 | 06:09 / 06:09 | 17:33 / 17:33 | shukla 8 / shukla 8 | 15 Feb 00:42 / 15 Feb 00:42 | +0 min | VERIFIED |
| 2027-02-15 | 06:09 / 06:08 | 17:33 / 17:33 | shukla 9 / shukla 9 | 15 Feb 22:45 / 15 Feb 22:45 | +0 min | WITHHELD |
| 2027-02-16 | 06:08 / 06:08 | 17:34 / 17:34 | shukla 10 / shukla 10 | 16 Feb 20:20 / 16 Feb 20:20 | +0 min | VERIFIED |
| 2027-02-17 | 06:07 / 06:07 | 17:34 / 17:34 | shukla 11 / shukla 11 | 17 Feb 17:32 / 17 Feb 17:33 | +1 min | VERIFIED |
| 2027-02-18 | 06:07 / 06:06 | 17:35 / 17:35 | shukla 12 / shukla 12 | 18 Feb 14:28 / 18 Feb 14:29 | +1 min | WITHHELD |
| 2027-02-19 | 06:06 / 06:06 | 17:36 / 17:35 | shukla 13 / shukla 13 | 19 Feb 11:15 / 19 Feb 11:15 | +0 min | WITHHELD |
| 2027-02-20 | 06:05 / 06:05 | 17:36 / 17:36 | shukla 14 / shukla 14 | 20 Feb 08:00 / 20 Feb 08:01 | +1 min | VERIFIED |
| 2027-02-21 | 06:05 / 06:04 | 17:37 / 17:36 | krishna 1 / krishna 1 | 22 Feb 02:04 / 22 Feb 02:04 | +0 min | WITHHELD |
| 2027-02-22 | 06:04 / 06:04 | 17:37 / 17:37 | krishna 2 / krishna 2 | 22 Feb 23:40 / 22 Feb 23:40 | +0 min | VERIFIED |
| 2027-02-23 | 06:03 / 06:03 | 17:38 / 17:37 | krishna 3 / krishna 3 | 23 Feb 21:50 / 23 Feb 21:50 | +0 min | WITHHELD |
| 2027-02-24 | 06:02 / 06:02 | 17:38 / 17:38 | krishna 4 / krishna 4 | 24 Feb 20:41 / 24 Feb 20:41 | +0 min | VERIFIED |
| 2027-02-25 | 06:02 / 06:01 | 17:38 / 17:38 | krishna 5 / krishna 5 | 25 Feb 20:18 / 25 Feb 20:19 | +1 min | WITHHELD |
| 2027-02-26 | 06:01 / 06:01 | 17:39 / 17:39 | krishna 6 / krishna 6 | 26 Feb 20:44 / 26 Feb 20:44 | +0 min | VERIFIED |
| 2027-02-27 | 06:00 / 06:00 | 17:39 / 17:39 | krishna 7 / krishna 7 | 27 Feb 21:55 / 27 Feb 21:56 | +1 min | VERIFIED |
| 2027-02-28 | 05:59 / 05:59 | 17:40 / 17:40 | krishna 8 / krishna 8 | 28 Feb 23:47 / 28 Feb 23:47 | +0 min | VERIFIED |

15 dates passed and 13 remain withheld. The release now has 69 Kolkata records, of which 45 use v1 and 24 use v2. These approvals cover the recorded horizon and tithi fields only.

## Step A — Kolkata horizon rounding diagnostic, 2026-11-27

Recomputed both unrounded v2 horizon events for each of the 25 withheld December–February dates. Residual is the computed instant minus the PAC minute interpreted at second zero. For 5 August 2027, there is no applicable published PAC horizon minute to compare. No values below enter the release dataset. [PAC Kolkata horizon table](https://packolkata.imd.gov.in/panchang/en/tables)

| Date | Sunrise PAC / computed IST | Δ seconds | Sunset PAC / computed IST | Δ seconds |
| --- | --- | ---: | --- | ---: |
| 2026-12-04 | 06:02 / 06:01:26.664 | -33.336 | 16:52 / 16:51:40.828 | -19.172 |
| 2026-12-09 | 06:05 / 06:04:42.397 | -17.603 | 16:53 / 16:52:42.715 | -17.285 |
| 2026-12-15 | 06:09 / 06:08:23.446 | -36.554 | 16:55 / 16:54:39.482 | -20.518 |
| 2026-12-27 | 06:15 / 06:14:26.929 | -33.071 | 17:01 / 17:00:29.798 | -30.202 |
| 2027-01-04 | 06:17 / 06:17:08.947 | +8.947 | 17:06 / 17:05:28.392 | -31.608 |
| 2027-01-07 | 06:18 / 06:17:49.864 | -10.136 | 17:08 / 17:07:29.170 | -30.830 |
| 2027-01-17 | 06:19 / 06:18:39.156 | -20.844 | 17:15 / 17:14:27.407 | -32.593 |
| 2027-01-20 | 06:19 / 06:18:26.783 | -33.217 | 17:17 / 17:16:33.680 | -26.320 |
| 2027-01-24 | 06:18 / 06:17:50.833 | -9.167 | 17:20 / 17:19:20.278 | -39.722 |
| 2027-01-27 | 06:17 / 06:17:09.588 | +9.588 | 17:22 / 17:21:23.139 | -36.861 |
| 2027-01-30 | 06:16 / 06:16:16.447 | +16.447 | 17:24 / 17:23:23.644 | -36.356 |
| 2027-01-31 | 06:16 / 06:15:56.152 | -3.848 | 17:24 / 17:24:03.206 | +3.206 |
| 2027-02-02 | 06:15 / 06:15:11.768 | +11.768 | 17:26 / 17:25:21.316 | -38.684 |
| 2027-02-05 | 06:14 / 06:13:55.922 | -4.078 | 17:28 / 17:27:15.687 | -44.313 |
| 2027-02-06 | 06:14 / 06:13:28.224 | -31.776 | 17:28 / 17:27:53.001 | -6.999 |
| 2027-02-07 | 06:13 / 06:12:59.342 | -0.658 | 17:29 / 17:28:29.887 | -30.113 |
| 2027-02-08 | 06:13 / 06:12:29.293 | -30.707 | 17:29 / 17:29:06.331 | +6.331 |
| 2027-02-10 | 06:12 / 06:11:25.757 | -34.243 | 17:31 / 17:30:17.851 | -42.149 |
| 2027-02-12 | 06:10 / 06:10:17.758 | +17.758 | 17:32 / 17:31:27.491 | -32.509 |
| 2027-02-15 | 06:09 / 06:08:27.753 | -32.247 | 17:33 / 17:33:08.339 | +8.339 |
| 2027-02-18 | 06:07 / 06:06:28.698 | -31.302 | 17:35 / 17:34:44.842 | -15.158 |
| 2027-02-19 | 06:06 / 06:05:47.122 | -12.878 | 17:36 / 17:35:16.060 | -43.940 |
| 2027-02-21 | 06:05 / 06:04:21.294 | -38.706 | 17:37 / 17:36:17.114 | -42.886 |
| 2027-02-23 | 06:03 / 06:02:52.087 | -7.913 | 17:38 / 17:37:16.387 | -43.613 |
| 2027-02-25 | 06:02 / 06:01:19.724 | -40.276 | 17:38 / 17:38:13.961 | +13.961 |

| Residual interval, seconds | Sunrise | Sunset |
| --- | ---: | ---: |
| [-60, -45) | 0 | 0 |
| [-45, -40) | 1 | 5 |
| [-40, -35) | 2 | 4 |
| [-35, -30) | 8 | 6 |
| [-30, -15) | 2 | 5 |
| [-15, 0) | 7 | 1 |
| [0, 15) | 3 | 4 |
| [15, 30) | 2 | 0 |
| [30, 60) | 0 | 0 |

Nearest-minute rounding matches 14/25 sunrises and 10/25 sunsets. Flooring the same instants matches only 5/25 sunrises and 4/25 sunsets, and rescues zero misses. Every nearest-minute miss lies before the PAC minute, so flooring moves the displayed value in the wrong direction. Failed sunrise residuals range from −40.276 to −30.707 seconds, and failed sunsets range from −44.313 to −30.113 seconds. This shows a systematic early offset in the selected withheld sample. It does not establish a physical cause or a PAC-wide rounding convention. The sample is conditioned on failed days. No v3, tolerance change or promotion was made.

## Step B March 2027 — checked 2026-11-27

Kolkata v2 exact-minute horizon and sunrise-tithi checks apply, with at most one minute of difference for the same tithi end. For 1–21 March the references are the online Kolkata horizon table and Phalguna folio. For 22–31 March the reference is the 2027 Chaitra folio in the English PAC print edition, pages 98–104, and its 2027 Kolkata horizon table on page 117. The online Chaitra route displays the previous year's folio. [Horizon table](https://packolkata.imd.gov.in/panchang/en/tables) · [Phalguna](https://packolkata.imd.gov.in/panchang/en/phalguna) · [PAC English edition download](https://packolkata.imd.gov.in/rashtriya-panchang-english.php)

| Date | Sunrise PAC / v2 | Sunset PAC / v2 | Tithi PAC / v2 | End PAC / v2, IST | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2027-03-01 | 05:58 / 05:58 | 17:40 / 17:40 | krishna 9 / krishna 9 | 02 Mar 02:08 / 02 Mar 02:08 | +0 min | VERIFIED |
| 2027-03-02 | 05:58 / 05:57 | 17:41 / 17:41 | krishna 10 / krishna 10 | 03 Mar 04:45 / 03 Mar 04:45 | +0 min | WITHHELD |
| 2027-03-03 | 05:57 / 05:56 | 17:41 / 17:41 | krishna 11 / krishna 11 | 04 Mar 07:25 / 04 Mar 07:25 | +0 min | WITHHELD |
| 2027-03-04 | 05:56 / 05:56 | 17:42 / 17:41 | krishna 11 / krishna 11 | 04 Mar 07:25 / 04 Mar 07:25 | +0 min | WITHHELD |
| 2027-03-05 | 05:55 / 05:55 | 17:42 / 17:42 | krishna 12 / krishna 12 | 05 Mar 09:54 / 05 Mar 09:55 | +1 min | VERIFIED |
| 2027-03-06 | 05:54 / 05:54 | 17:42 / 17:42 | krishna 13 / krishna 13 | 06 Mar 12:04 / 06 Mar 12:05 | +1 min | VERIFIED |
| 2027-03-07 | 05:53 / 05:53 | 17:43 / 17:43 | krishna 14 / krishna 14 | 07 Mar 13:47 / 07 Mar 13:47 | +0 min | VERIFIED |
| 2027-03-08 | 05:53 / 05:52 | 17:43 / 17:43 | krishna 15 / krishna 15 | 08 Mar 14:59 / 08 Mar 15:00 | +1 min | WITHHELD |
| 2027-03-09 | 05:52 / 05:51 | 17:44 / 17:43 | shukla 1 / shukla 1 | 09 Mar 15:41 / 09 Mar 15:42 | +1 min | WITHHELD |
| 2027-03-10 | 05:51 / 05:50 | 17:44 / 17:44 | shukla 2 / shukla 2 | 10 Mar 15:53 / 10 Mar 15:54 | +1 min | WITHHELD |
| 2027-03-11 | 05:50 / 05:49 | 17:44 / 17:44 | shukla 3 / shukla 3 | 11 Mar 15:38 / 11 Mar 15:39 | +1 min | WITHHELD |
| 2027-03-12 | 05:49 / 05:48 | 17:45 / 17:45 | shukla 4 / shukla 4 | 12 Mar 14:58 / 12 Mar 14:58 | +0 min | WITHHELD |
| 2027-03-13 | 05:48 / 05:48 | 17:45 / 17:45 | shukla 5 / shukla 5 | 13 Mar 13:55 / 13 Mar 13:56 | +1 min | VERIFIED |
| 2027-03-14 | 05:47 / 05:47 | 17:46 / 17:45 | shukla 6 / shukla 6 | 14 Mar 12:32 / 14 Mar 12:33 | +1 min | WITHHELD |
| 2027-03-15 | 05:46 / 05:46 | 17:46 / 17:46 | shukla 7 / shukla 7 | 15 Mar 10:52 / 15 Mar 10:52 | +0 min | VERIFIED |
| 2027-03-16 | 05:45 / 05:45 | 17:46 / 17:46 | shukla 8 / shukla 8 | 16 Mar 08:55 / 16 Mar 08:55 | +0 min | VERIFIED |
| 2027-03-17 | 05:44 / 05:44 | 17:47 / 17:47 | shukla 9 / shukla 9 | 17 Mar 06:44 / 17 Mar 06:45 | +1 min | VERIFIED |
| 2027-03-18 | 05:43 / 05:43 | 17:47 / 17:47 | shukla 11 / shukla 11 | 19 Mar 01:52 / 19 Mar 01:52 | +0 min | VERIFIED |
| 2027-03-19 | 05:43 / 05:42 | 17:47 / 17:47 | shukla 12 / shukla 12 | 19 Mar 23:18 / 19 Mar 23:18 | +0 min | WITHHELD |
| 2027-03-20 | 05:42 / 05:41 | 17:48 / 17:48 | shukla 13 / shukla 13 | 20 Mar 20:46 / 20 Mar 20:46 | +0 min | WITHHELD |
| 2027-03-21 | 05:41 / 05:40 | 17:48 / 17:48 | shukla 14 / shukla 14 | 21 Mar 18:22 / 21 Mar 18:23 | +1 min | WITHHELD |
| 2027-03-22 | 05:40 / 05:39 | 17:49 / 17:48 | shukla 15 / shukla 15 | 22 Mar 16:14 / 22 Mar 16:14 | +0 min | WITHHELD |
| 2027-03-23 | 05:39 / 05:38 | 17:49 / 17:49 | krishna 1 / krishna 1 | 23 Mar 14:29 / 23 Mar 14:29 | +0 min | WITHHELD |
| 2027-03-24 | 05:38 / 05:37 | 17:49 / 17:49 | krishna 2 / krishna 2 | 24 Mar 13:15 / 24 Mar 13:15 | +0 min | WITHHELD |
| 2027-03-25 | 05:37 / 05:36 | 17:50 / 17:49 | krishna 3 / krishna 3 | 25 Mar 12:38 / 25 Mar 12:39 | +1 min | WITHHELD |
| 2027-03-26 | 05:36 / 05:35 | 17:50 / 17:50 | krishna 4 / krishna 4 | 26 Mar 12:44 / 26 Mar 12:45 | +1 min | WITHHELD |
| 2027-03-27 | 05:35 / 05:34 | 17:50 / 17:50 | krishna 5 / krishna 5 | 27 Mar 13:34 / 27 Mar 13:34 | +0 min | WITHHELD |
| 2027-03-28 | 05:34 / 05:33 | 17:51 / 17:50 | krishna 6 / krishna 6 | 28 Mar 15:05 / 28 Mar 15:06 | +1 min | WITHHELD |
| 2027-03-29 | 05:33 / 05:32 | 17:51 / 17:51 | krishna 7 / krishna 7 | 29 Mar 17:12 / 29 Mar 17:12 | +0 min | WITHHELD |
| 2027-03-30 | 05:32 / 05:31 | 17:51 / 17:51 | krishna 8 / krishna 8 | 30 Mar 19:40 / 30 Mar 19:41 | +1 min | WITHHELD |
| 2027-03-31 | 05:31 / 05:30 | 17:52 / 17:52 | krishna 9 / krishna 9 | 31 Mar 22:17 / 31 Mar 22:18 | +1 min | WITHHELD |

Nine of 31 March records passed. Only independently computed passing rows were added.

## Step B April 2027 — checked 2026-11-27

Kolkata v2 was computed for all 30 dates. For 1–20 April, compared the printed 1949 Saka Chaitra tithi folio (pp. 98–104) and Kolkata horizon table (p. 117) in PAC's English 2026–27 edition. Its 2027 appendix ends on 20 April. The exact-minute horizon checks, sunrise tithi identity and one-minute tithi end tolerance remain in force. [PAC English edition download](https://packolkata.imd.gov.in/rashtriya-panchang-english.php)

| Date | Sunrise PAC / v2 | Sunset PAC / v2 | Tithi PAC / v2 | End PAC / v2, IST | End difference | Result |
| --- | --- | --- | --- | --- | ---: | --- |
| 2027-04-01 | 05:30 / 05:30 | 17:52 / 17:52 | krishna 10 / krishna 10 | 02 Apr 00:46 / 02 Apr 00:46 | +0 min | VERIFIED |
| 2027-04-02 | 05:29 / 05:29 | 17:52 / 17:52 | krishna 11 / krishna 11 | 03 Apr 02:52 / 03 Apr 02:53 | +1 min | VERIFIED |
| 2027-04-03 | 05:28 / 05:28 | 17:53 / 17:53 | krishna 12 / krishna 12 | 04 Apr 04:27 / 04 Apr 04:28 | +1 min | VERIFIED |
| 2027-04-04 | 05:27 / 05:27 | 17:53 / 17:53 | krishna 13 / krishna 13 | 05 Apr 05:24 / 05 Apr 05:24 | +0 min | VERIFIED |
| 2027-04-05 | 05:26 / 05:26 | 17:53 / 17:53 | krishna 14 / krishna 14 | 06 Apr 05:41 / 06 Apr 05:42 | +1 min | VERIFIED |
| 2027-04-06 | 05:25 / 05:25 | 17:54 / 17:54 | krishna 15 / krishna 14 | 07 Apr 05:21 / 06 Apr 05:42 | Different tithis | WITHHELD |
| 2027-04-07 | 05:25 / 05:24 | 17:54 / 17:54 | shukla 1 / shukla 1 | 08 Apr 04:29 / 08 Apr 04:30 | +1 min | WITHHELD |
| 2027-04-08 | 05:24 / 05:23 | 17:54 / 17:54 | shukla 2 / shukla 2 | 09 Apr 03:11 / 09 Apr 03:11 | +0 min | WITHHELD |
| 2027-04-09 | 05:23 / 05:22 | 17:55 / 17:55 | shukla 3 / shukla 3 | 10 Apr 01:32 / 10 Apr 01:33 | +1 min | WITHHELD |
| 2027-04-10 | 05:22 / 05:21 | 17:55 / 17:55 | shukla 4 / shukla 4 | 10 Apr 23:40 / 10 Apr 23:41 | +1 min | WITHHELD |
| 2027-04-11 | 05:21 / 05:20 | 17:56 / 17:55 | shukla 5 / shukla 5 | 11 Apr 21:40 / 11 Apr 21:41 | +1 min | WITHHELD |
| 2027-04-12 | 05:20 / 05:19 | 17:56 / 17:56 | shukla 6 / shukla 6 | 12 Apr 19:35 / 12 Apr 19:36 | +1 min | WITHHELD |
| 2027-04-13 | 05:19 / 05:19 | 17:56 / 17:56 | shukla 7 / shukla 7 | 13 Apr 17:29 / 13 Apr 17:30 | +1 min | VERIFIED |
| 2027-04-14 | 05:18 / 05:18 | 17:57 / 17:57 | shukla 8 / shukla 8 | 14 Apr 15:24 / 14 Apr 15:25 | +1 min | VERIFIED |
| 2027-04-15 | 05:17 / 05:17 | 17:57 / 17:57 | shukla 9 / shukla 9 | 15 Apr 13:21 / 15 Apr 13:22 | +1 min | VERIFIED |
| 2027-04-16 | 05:16 / 05:16 | 17:57 / 17:57 | shukla 10 / shukla 10 | 16 Apr 11:22 / 16 Apr 11:23 | +1 min | VERIFIED |
| 2027-04-17 | 05:16 / 05:15 | 17:58 / 17:58 | shukla 11 / shukla 11 | 17 Apr 09:28 / 17 Apr 09:29 | +1 min | WITHHELD |
| 2027-04-18 | 05:15 / 05:14 | 17:58 / 17:58 | shukla 12 / shukla 12 | 18 Apr 07:43 / 18 Apr 07:43 | +0 min | WITHHELD |
| 2027-04-19 | 05:14 / 05:13 | 17:58 / 17:58 | shukla 13 / shukla 13 | 19 Apr 06:09 / 19 Apr 06:09 | +0 min | WITHHELD |
| 2027-04-20 | 05:13 / 05:13 | 17:59 / 17:59 | shukla 15 / shukla 15 | 21 Apr 03:57 / 21 Apr 03:58 | +1 min | VERIFIED |

21–30 April were computed and withheld because both applicable PAC fields are unavailable in the inspected edition. Ten of 30 dates passed. The release now has 88 Kolkata records. These daily approvals do not establish Bengali solar month boundaries or festival observance rules.

### May reference availability — 2026-11-27

The required consecutive monthly validation stops here. The official English downloads index and PAC's online folios still identify the 1948 Saka, 2026–27 edition. No accessible full 1949 Saka, 2027–28 Rashtriya Panchang was located. The printed appendix's Kolkata horizon and daily tithi series both end on 20 April 2027. The separate astronomical transit table does not provide the missing daily fields.

| Dates | Kolkata horizon reference | Applicable daily tithi reference | Released |
| --- | --- | --- | --- |
| 21–30 April 2027 | Unavailable | Unavailable | 0 |
| 1–31 May 2027 | Unavailable | Unavailable | 0 |

No May comparisons could be scored and no May records were approved. June–December remain pending. The festival, browser, growth and automation work below uses the existing approved coverage. [PAC English editions](https://packolkata.imd.gov.in/rashtriya-panchang-english.php) · [PAC online folios](https://packolkata.imd.gov.in/panchang/en/panchang)

## Step D — festival date verification, 2026-11-27

| Festival | Verified date | Bengali date and system | Independent date check |
| --- | --- | --- | --- |
| Saraswati Puja | 2027-02-11 | 28 Magh 1433, PAC Bengal and Assam solar convention | PAC principal festivals entry 76 and Magha folio both name the observance. Kolkata record passes Step B. |
| Maha Shivaratri | 2027-03-06 | 21 Falgun 1433, PAC Bengal and Assam solar convention | PAC principal festivals entry 81 and Phalguna folio name the observance. Kolkata record passes Step B. The night observance is distinct from the sunrise tithi. |
| Poila Boishakh | 2027-04-15 | 1 Baishakh 1434, Barrackpore Bishuddha Siddhanta schedule | The published Math schedule explicitly pairs the dates. Kolkata record passes Step B. Bangladesh civil New Year is 14 April. |

The first two Bengali dates use the independently corroborated Magh and Falgun starts on 15 January and 14 February. No ceremonial start/end times were approved. Dolayatra on 22 March, Kali Puja on 8 November, and Jagaddhatri Puja on 19 November have source listings but lack released daily comparisons in this scope. Poush observance labels vary by source and remain pending. [PAC edition](https://packolkata.imd.gov.in/rashtriya-panchang-english.php) · [Barrackpore schedule](https://asvarkvm.org/sites/default/files/Yearly%20Events%202026-2027.pdf)

## Step F — local browser and lab measurements

Five Playwright cases executed and passed in local Chromium against the already running Astro dev service. Captured full-page Pixel 7 screenshots of the homepage, converter, and Poila Boishakh page. Lighthouse 13.6.0 ran with mobile throttling against the same local service. These are development-server lab scores.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 84 | 100 | 96 | 100 | 0.9 s | 0 |
| Date converter | 86 | 96 | 96 | 100 | 0.8 s | 0.19 |
| Poila Boishakh | 84 | 100 | 96 | 100 | 4.1 s | 0 |

The Pages package omitted sourcemaps while retaining references to them. Packaging now removes the dangling directives. The packaged Worker test passed. Wrangler Pages preview moved past the sourcemap check and failed to start in this environment with a missing middleware facade. Live production and field INP remain unmeasured.

## Step G — growth tools

The birthday and completed-year age tools use the existing Bangladesh civil conversion and Dhaka date. The 30 Falgun anniversary falls on 29 Falgun in a common year. Unit checks cover the anniversary boundary, leap fallback and date-range rejection. Local Chromium passed seven cases, including the age form and the frameable, noindexed festival widget. Widget, countdown and share data come from the verified festival list only. A four-page Bangladesh civil 2027 PDF was generated with Chromium after the Bengali fonts loaded. It contains the twelve calendar tables and no religious date dataset. Ads remain off.

## Step H — scheduled verification

The January 2027 local trial reproduced all 23 previously verified records using their recorded method, left seven candidates pending for missing approved references, and retained the 31 January sunrise-tithi conflict. Zero new daily records qualified. The public fixture contains zero reviewed comparison rows because PAC redistribution clearance is open. Reproducing a previous approval checks reproducibility. Independent reference revalidation requires an approved row for that exact date. Kolkata daily coverage remains 88 records.

The [GitHub Actions January 2027 dispatch](https://github.com/Boosad96/bongoponji/actions/runs/46001172951) succeeded. Its release step reported “No new records.” GitHub lists the uploaded validation artifact, and CI logs confirm all seven browser cases passed.

## Step E — ritual rules and PAC comparisons, 2026-11-27

| Rite, reviewed in order | Result for Kolkata |
| --- | --- |
| Marriage | UNVERIFIED. The RKM reader documents printed selection checks, including tara and lunar exclusions, but does not establish a complete Kolkata wedding-date and lagna rule or supply a complete date-specific comparison set. |
| Annaprashan | UNVERIFIED. No complete, region-specific selection rule and independent dated timing reference were established. Annapurna Puja in the PAC observance list is a different rite. |
| Griha Pravesh | UNVERIFIED. Public computed lists use their own exclusion rules. The PAC edition supplies astronomical inputs rather than a Kolkata house-entry schedule or its controlling rule. |
| Upanayan | UNVERIFIED. No complete Kolkata rule and independent dated timing reference were established. |

All four routes retain noindex, a traditional-belief label and an explanation of what must be checked before publication. [RKM Panjika Reader](https://cs.rkmvu.ac.in/~tamal/jyotisha/panjika/) · [PAC edition index](https://packolkata.imd.gov.in/rashtriya-panchang-english.php)

The research probe uses Astronomy Engine 2.1.19 geocentric ecliptic positions and Grahan Vedic 1.0.1 Lahiri ayanamsa. It samples unrounded Kolkata sunrise using the method attached to each previously verified daily record. Nakshatra divides the sidereal lunar longitude into 27 segments. Yoga divides the sum of sidereal solar and lunar longitude into 27 segments. Karana divides the Moon–Sun elongation into 60 segments, with the fixed and repeating traditional names. Tests of the three sunrise labels compare the first listed element applicable at sunrise and its ending instant, with exact identity and a one-minute ending tolerance. The five checked dates already passed the exact-minute Kolkata horizon gate.

### Nakshatra, yoga and sunrise karana

Cells show PAC / independently calculated IST ending time, followed by the signed difference in minutes. Equivalent PAC spellings are normalized in the labels. The 1948 Saka Agrahayana folios contain the November dates. The 1949 Saka Chaitra appendix, pp. 102–103, contains the April dates. Only the independently calculated values enter the release records. Karana coverage is limited to the karana active at sunrise.

| Date | Nakshatra | Yoga | Sunrise karana | Result |
| --- | --- | --- | --- | --- |
| 2026-11-27 | Ardra 15:09 / 15:08 (−1) | Shubha 23:52 / 23:51 (−1) | Vishti 09:49 / 09:50 (+1) | VERIFIED |
| 2026-11-28 | Punarvasu 12:51 / 12:50 (−1) | Shukla 20:18 / 20:18 (0) | Balava 06:40 / 06:41 (+1) | VERIFIED |
| 2026-11-29 | Pushya 11:00 / 11:00 (0) | Brahma 17:09 / 17:08 (−1) | Gara 14:48 / 14:49 (+1) | VERIFIED |
| 2027-04-14 | Punarvasu 10:53 / 10:52 (−1) | Sukarma 11:10 / 11:10 (0) | Bava 15:24 / 15:25 (+1) | VERIFIED |
| 2027-04-15 | Pushya 09:34 / 09:33 (−1) | Dhriti 08:23 / 08:23 (0) | Kaulava 13:21 / 13:22 (+1) | VERIFIED |

### Sankranti

Compared the sidereal Sun's 30° boundary crossing against the PAC Nirayana Rasi transits table and the April Mesha ingress in the daily folio. The fixed-ayanamsa Saura Vaisakhadi entry is a separate event. All signs matched. All times failed the one-minute criterion with the same signed difference. This pilot does not establish which longitude or ayanamsa convention accounts for the offset. The workflow and the website publish no proposed ingress times or associated ritual windows.

| Date | Sign | PAC IST | Computed IST | Difference | Result |
| --- | --- | --- | --- | --- | --- |
| 2026-12-16 | Dhanu | 10:25 | 10:21 | −4 min | UNVERIFIED |
| 2027-01-14 | Makara | 21:10 | 21:06 | −4 min | UNVERIFIED |
| 2027-02-13 | Kumbha | 10:09 | 10:05 | −4 min | UNVERIFIED |
| 2027-03-15 | Meena | 07:00 | 06:56 | −4 min | UNVERIFIED |
| 2027-04-14 | Mesha | 15:28 | 15:24 | −4 min | UNVERIFIED |

### Festival LCP diagnostic

The original 4.1-second Lighthouse result identified the introductory paragraph as the LCP element. A fresh pre-change Astro dev run measured 0.824 s, so the original delay did not reproduce. The verified festival template now preloads the exact Bengali WOFF2 used by its stylesheet. The Astro development toolbar is disabled to remove its dev-only network traffic from local page work.

Lighthouse 13.6.0, Chromium, default mobile simulation, three runs on each set of built static files over loopback. The baseline and changed medians both measured 0.75 s. The preload moves Bengali font discovery ahead of stylesheet parsing. Test results do not establish an LCP gain or production field performance.

| Build | LCP runs (s) | Median LCP | Performance |
| --- | --- | --- | --- |
| Baseline | 0.758, 0.752, 0.753 | 0.753 s | 100 in all three |
| With preload | 0.751, 0.767, 0.752 | 0.752 s | 100 in all three |

## v4 Step 1 — reference availability, 2026-11-27 IST

The PAC English index still links the 2026–27 ZIP as its newest English edition. The linked download is the previously inspected 1948 Saka volume with the 1949 appendix through 20 April 2027. The inspected English list exposed no 2027–28 download. The 1434 retailer still advertises the edition as forthcoming. The Barrackpore Math site lists 2026–27 yearly events. The school admission notice for 2027–28 is unrelated. Step 2 was skipped. No reference gate changed. [PAC index](https://packolkata.imd.gov.in/rashtriya-panchang-english.php) · [PAC download](https://packolkata.imd.gov.in/download/EnglishRP2627.zip) · [1434 edition listing](https://bongohridoy.com/product/bisuddha-siddhanta-panjika-1434/) · [Math site](https://rkvmbarrackpore.org/)

## v4 Step 3 — offset diagnostics, 2026-11-27 IST

Run `node scripts/diagnose-pac-offsets.mjs`. The horizon panel includes every withheld date with published horizon minutes (57) and all 88 approved dates. For controls, the exact-minute PAC values equal the stored approval values. The three blocked tithi dates remain blocked. April 21–30 and 5 August lack applicable PAC horizon comparisons and therefore cannot be scored.

| One change from v2 | Withheld horizon pairs matched | Approved horizon pairs matched | Previously v2-matching controls lost | Sunrise / sunset shift vs v2 (seconds) |
| --- | ---: | ---: | ---: | --- |
| v2 baseline | 3/57 | 82/88 | 0 | 0 / 0 |
| 88°22′30″ E inferred from PAC's 23 min 30 s solar-noon difference at the IST meridian | 3/57 | 76/88 | 7 | −2.67…−2.66 / −2.67…−2.66 |
| 22°34′ N, nearest-arcminute sensitivity | 4/57 | 82/88 | 0 | −0.72…+0.35 / −0.35…+0.72 |
| PAC's stated 31′ refraction | 12/57 | 39/88 | 49 | +24.68…+27.29 / −27.29…−24.71 |
| PAC's stated fixed 16′ solar semidiameter | 4/57 | 82/88 | 0 | −0.34…+1.26 / −1.26…+0.35 |
| JPL Horizons ΔT formula instead of Espenak–Meeus | 3/57 | 82/88 | 0 | −0.02…−0.01 / −0.02…−0.01 |
| Replace observer longitude with the 82°30′ IST meridian as a sensitivity control | 0/57 | 0/88 | 82 | +1406.39…+1407.99 / +1407.32…+1408.02 |

The printed foreword explicitly gives IST, so the meridian comparison tests a wrong input rather than providing a candidate convention. Rounding latitude to an arcminute has no confirmed station provenance. The fixed radius improves the horizon count by one (8 February) and leaves six historical controls unmatched when used uniformly. It therefore fails the zero-break adoption bar on the full control set. The stated refraction moves the horizon events in opposite directions, losing 49 controls that v2 matched. Using the alternate ΔT has a subsecond effect. The solar offset remains unexplained and no daily method or tolerances changed. [PAC edition](https://packolkata.imd.gov.in/download/EnglishRP2627.zip)

### Sankranti comparison

PAC's foreword assigns its variable ayanamsa to the Nirayana transits. Interpolating its listed monthly ayanamsa values (linearly extrapolating the last segment for April) with Astronomy Engine's apparent geocentric longitude brings all five samples inside the unchanged one-minute tolerance. The alternative PAC mean offset propagated with 50.29″/year leaves residuals of −4 to −5 minutes. Unaberrated geocentric longitude leaves −8 minutes with the monthly ayanamsa and −12 to −13 minutes with the mean or Lahiri. This identifies the published variable offset as the relevant convention on the tested dates. The comparison uses edition-specific parameters and supports only these five geocentric instants. No festival date, ritual window, website ingress field or daily method was derived from it.

| Date | Sign | PAC IST | Apparent / PAC monthly IST | Difference | Result |
| --- | --- | --- | --- | --- | --- |
| 2026-12-16 | Dhanu | 10:25 | 10:25 | 0 min | VERIFIED |
| 2027-01-14 | Makara | 21:10 | 21:11 | +1 min | VERIFIED |
| 2027-02-13 | Kumbha | 10:09 | 10:09 | 0 min | VERIFIED |
| 2027-03-15 | Meena | 07:00 | 07:00 | 0 min | VERIFIED |
| 2027-04-14 | Mesha | 15:28 | 15:28 | 0 min | VERIFIED |

Source for all five rows: Rashtriya Panchang 1948 Saka, Nirayana Rasi transits table. [PAC edition](https://packolkata.imd.gov.in/download/EnglishRP2627.zip)

The apparent-noon cross-check against PAC on 12–13 January and 19–20 April gave residuals of +2.97, +2.96, +3.50 and +2.55 seconds. Equation-of-time and station-longitude effects at this scale do not explain the horizon residuals of several tens of seconds.

## v4 Step 4 — Kolkata sunrise element expansion, 2026-11-27 IST

Compared all 88 horizon-and-tithi approved dates against the 1948 Saka daily folios and the 1949 Chaitra appendix through 20 April. The comparison normalizes equivalent PAC spellings and resolves after-midnight times onto the next civil date. For ahoratra, the corresponding next-folio end is used. The previous folio is checked for an element still active at Kolkata sunrise. All 88 had matching labels and end-time differences within one minute. Five already had approvals. The 83 added rows store computed values only. The scope is the single nakshatra, yoga and karana active at sunrise. No later karana or other date is implied. [PAC edition](https://packolkata.imd.gov.in/download/EnglishRP2627.zip)

Each cell gives the matched label, PAC / calculated IST end, and signed difference in minutes. A leading date indicates an end on the following civil day.

| Date | Nakshatra | Yoga | Sunrise karana | Result |
| --- | --- | --- | --- | --- |
| 2026-11-27 | Ardra 15:09 / 15:08 (-1) | Shubha 23:52 / 23:51 (-1) | Vishti 09:49 / 09:50 (+1) | VERIFIED |
| 2026-11-28 | Punarvasu 12:51 / 12:50 (-1) | Shukla 20:18 / 20:18 (+0) | Balava 06:40 / 06:41 (+1) | VERIFIED |
| 2026-11-29 | Pushya 11:00 / 11:00 (+0) | Brahma 17:09 / 17:08 (-1) | Gara 14:48 / 14:49 (+1) | VERIFIED |
| 2026-11-30 | Ashlesha 09:43 / 09:42 (-1) | Indra 14:28 / 14:27 (-1) | Vishti 12:55 / 12:56 (+1) | VERIFIED |
| 2026-12-01 | Magha 09:01 / 09:01 (+0) | Vaidhriti 12:15 / 12:15 (+0) | Balava 11:39 / 11:39 (+0) | VERIFIED |
| 2026-12-02 | Purva Phalguni 08:55 / 08:55 (+0) | Vishkambha 10:32 / 10:31 (-1) | Taitila 10:59 / 11:00 (+1) | VERIFIED |
| 2026-12-03 | Uttara Phalguni 09:24 / 09:24 (+0) | Priti 09:15 / 09:15 (+0) | Vanija 10:54 / 10:55 (+1) | VERIFIED |
| 2026-12-05 | Chitra 11:49 / 11:49 (+0) | Saubhagya 07:53 / 07:53 (+0) | Kaulava 12:16 / 12:16 (+0) | VERIFIED |
| 2026-12-06 | Swati 13:38 / 13:38 (+0) | Shobhana 07:42 / 07:41 (-1) | Gara 13:35 / 13:35 (+0) | VERIFIED |
| 2026-12-07 | Vishakha 15:48 / 15:48 (+0) | Atiganda 07:47 / 07:46 (-1) | Vishti 15:15 / 15:16 (+1) | VERIFIED |
| 2026-12-08 | Anuradha 18:17 / 18:16 (-1) | Sukarma 08:07 / 08:06 (-1) | Chatushpada 17:15 / 17:16 (+1) | VERIFIED |
| 2026-12-10 | Mula 23:58 / 23:58 (+0) | Shula 09:25 / 09:24 (-1) | Bava 08:47 / 08:47 (+0) | VERIFIED |
| 2026-12-11 | Purva Ashadha 12-12 03:05 / 12-12 03:04 (-1) | Ganda 10:18 / 10:18 (+0) | Kaulava 11:24 / 11:24 (+0) | VERIFIED |
| 2026-12-12 | Uttara Ashadha 12-13 06:12 / 12-13 06:12 (+0) | Vriddhi 11:17 / 11:16 (-1) | Gara 14:07 / 14:07 (+0) | VERIFIED |
| 2026-12-13 | Uttara Ashadha 06:12 / 06:12 (+0) | Dhruva 12:15 / 12:14 (-1) | Vishti 16:48 / 16:49 (+1) | VERIFIED |
| 2026-12-14 | Shravana 09:13 / 09:12 (-1) | Vyaghata 13:05 / 13:04 (-1) | Balava 19:17 / 19:17 (+0) | VERIFIED |
| 2026-12-16 | Shatabhisha 14:03 / 14:02 (-1) | Vajra 13:46 / 13:46 (+0) | Gara 10:08 / 10:09 (+1) | VERIFIED |
| 2026-12-17 | Purva Bhadrapada 15:31 / 15:31 (+0) | Siddhi 13:22 / 13:21 (-1) | Vishti 11:13 / 11:13 (+0) | VERIFIED |
| 2026-12-18 | Uttara Bhadrapada 16:10 / 16:10 (+0) | Vyatipata 12:19 / 12:18 (-1) | Balava 11:27 / 11:28 (+1) | VERIFIED |
| 2026-12-19 | Revati 15:58 / 15:58 (+0) | Variyan 10:35 / 10:35 (+0) | Taitila 10:49 / 10:49 (+0) | VERIFIED |
| 2026-12-20 | Ashwini 14:56 / 14:56 (+0) | Parigha 08:10 / 08:10 (+0) | Vanija 09:18 / 09:19 (+1) | VERIFIED |
| 2026-12-21 | Bharani 13:09 / 13:09 (+0) | Siddha 12-22 01:32 / 12-22 01:32 (+0) | Bava 07:01 / 07:01 (+0) | VERIFIED |
| 2026-12-22 | Krittika 10:46 / 10:45 (-1) | Sadhya 21:32 / 21:32 (+0) | Taitila 14:24 / 14:25 (+1) | VERIFIED |
| 2026-12-23 | Rohini 07:57 / 07:56 (-1) | Shubha 17:16 / 17:15 (-1) | Vanija 10:48 / 10:48 (+0) | VERIFIED |
| 2026-12-24 | Ardra 12-25 01:47 / 12-25 01:47 (+0) | Shukla 12:51 / 12:51 (+0) | Bava 06:58 / 06:59 (+1) | VERIFIED |
| 2026-12-25 | Punarvasu 22:50 / 22:50 (+0) | Brahma 08:29 / 08:28 (-1) | Taitila 13:15 / 13:16 (+1) | VERIFIED |
| 2026-12-26 | Pushya 20:13 / 20:13 (+0) | Vaidhriti 12-27 00:23 / 12-27 00:22 (-1) | Vanija 09:43 / 09:43 (+0) | VERIFIED |
| 2026-12-28 | Magha 16:33 / 16:33 (+0) | Priti 17:55 / 17:55 (+0) | Taitila 14:59 / 14:59 (+0) | VERIFIED |
| 2026-12-29 | Purva Phalguni 15:43 / 15:43 (+0) | Ayushman 15:31 / 15:30 (-1) | Vanija 13:25 / 13:26 (+1) | VERIFIED |
| 2026-12-30 | Uttara Phalguni 15:37 / 15:37 (+0) | Saubhagya 13:42 / 13:41 (-1) | Bava 12:37 / 12:38 (+1) | VERIFIED |
| 2026-12-31 | Hasta 16:14 / 16:13 (-1) | Shobhana 12:27 / 12:26 (-1) | Kaulava 12:33 / 12:34 (+1) | VERIFIED |
| 2027-01-01 | Chitra 17:30 / 17:29 (-1) | Atiganda 11:44 / 11:43 (-1) | Gara 13:11 / 13:11 (+0) | VERIFIED |
| 2027-01-02 | Swati 19:20 / 19:19 (-1) | Sukarma 11:29 / 11:28 (-1) | Vishti 14:25 / 14:25 (+0) | VERIFIED |
| 2027-01-03 | Vishakha 21:37 / 21:37 (+0) | Dhriti 11:37 / 11:36 (-1) | Balava 16:09 / 16:09 (+0) | VERIFIED |
| 2027-01-05 | Jyeshtha 01-06 03:07 / 01-06 03:07 (+0) | Ganda 12:43 / 12:43 (+0) | Gara 07:26 / 07:27 (+1) | VERIFIED |
| 2027-01-06 | Mula 01-07 06:08 / 01-07 06:08 (+0) | Vriddhi 13:32 / 13:31 (-1) | Vishti 09:56 / 09:57 (+1) | VERIFIED |
| 2027-01-08 | Purva Ashadha 09:13 / 09:13 (+0) | Vyaghata 15:22 / 15:21 (-1) | Kimstughna 15:15 / 15:15 (+0) | VERIFIED |
| 2027-01-09 | Uttara Ashadha 12:16 / 12:16 (+0) | Harshana 16:16 / 16:15 (-1) | Balava 17:52 / 17:53 (+1) | VERIFIED |
| 2027-01-10 | Shravana 15:12 / 15:12 (+0) | Vajra 17:03 / 17:02 (-1) | Kaulava 07:08 / 07:08 (+0) | VERIFIED |
| 2027-01-11 | Dhanishta 17:54 / 17:53 (-1) | Siddhi 17:39 / 17:38 (-1) | Gara 09:29 / 09:30 (+1) | VERIFIED |
| 2027-01-12 | Shatabhisha 20:14 / 20:14 (+0) | Vyatipata 17:58 / 17:57 (-1) | Vishti 11:30 / 11:30 (+0) | VERIFIED |
| 2027-01-13 | Purva Bhadrapada 22:05 / 22:04 (-1) | Variyan 17:54 / 17:53 (-1) | Balava 13:02 / 13:03 (+1) | VERIFIED |
| 2027-01-14 | Uttara Bhadrapada 23:19 / 23:19 (+0) | Parigha 17:22 / 17:22 (+0) | Taitila 13:59 / 14:00 (+1) | VERIFIED |
| 2027-01-15 | Revati 23:51 / 23:51 (+0) | Shiva 16:18 / 16:18 (+0) | Vanija 14:14 / 14:15 (+1) | VERIFIED |
| 2027-01-16 | Ashwini 23:39 / 23:39 (+0) | Siddha 14:39 / 14:38 (-1) | Bava 13:43 / 13:44 (+1) | VERIFIED |
| 2027-01-18 | Krittika 21:06 / 21:05 (-1) | Shubha 09:34 / 09:33 (-1) | Gara 10:28 / 10:28 (+0) | VERIFIED |
| 2027-01-19 | Rohini 18:54 / 18:54 (+0) | Brahma 01-20 02:28 / 01-20 02:27 (-1) | Vishti 07:50 / 07:50 (+0) | VERIFIED |
| 2027-01-21 | Ardra 13:24 / 13:24 (+0) | Vaidhriti 18:08 / 18:08 (+0) | Gara 11:22 / 11:23 (+1) | VERIFIED |
| 2027-01-22 | Punarvasu 10:25 / 10:25 (+0) | Vishkambha 13:51 / 13:50 (-1) | Vishti 07:39 / 07:39 (+0) | VERIFIED |
| 2027-01-23 | Pushya 07:32 / 07:31 (-1) | Priti 09:39 / 09:38 (-1) | Kaulava 14:13 / 14:14 (+1) | VERIFIED |
| 2027-01-25 | Purva Phalguni 01-26 01:04 / 01-26 01:03 (-1) | Shobhana 22:54 / 22:54 (+0) | Vishti 08:11 / 08:11 (+0) | VERIFIED |
| 2027-01-26 | Uttara Phalguni 01-27 00:07 / 01-27 00:07 (+0) | Atiganda 20:19 / 20:18 (-1) | Kaulava 17:12 / 17:12 (+0) | VERIFIED |
| 2027-01-28 | Chitra 01-29 00:33 / 01-29 00:33 (+0) | Dhriti 16:58 / 16:57 (-1) | Vishti 15:53 / 15:53 (+0) | VERIFIED |
| 2027-01-29 | Swati 01-30 01:55 / 01-30 01:54 (-1) | Shula 16:14 / 16:13 (-1) | Balava 16:26 / 16:26 (+0) | VERIFIED |
| 2027-02-01 | Anuradha 06:28 / 06:28 (+0) | Dhruva 16:56 / 16:56 (+0) | Vishti 08:42 / 08:42 (+0) | VERIFIED |
| 2027-02-03 | Mula 12:26 / 12:26 (+0) | Harshana 18:45 / 18:44 (-1) | Taitila 13:51 / 13:51 (+0) | VERIFIED |
| 2027-02-04 | Purva Ashadha 15:33 / 15:32 (-1) | Vajra 19:42 / 19:41 (-1) | Vanija 16:32 / 16:32 (+0) | VERIFIED |
| 2027-02-09 | Purva Bhadrapada 02-10 03:41 / 02-10 03:40 (-1) | Shiva 21:43 / 21:42 (-1) | Taitila 13:47 / 13:48 (+1) | VERIFIED |
| 2027-02-11 | Revati 02-12 05:42 / 02-12 05:42 (+0) | Sadhya 20:21 / 20:20 (-1) | Bava 15:16 / 15:17 (+1) | VERIFIED |
| 2027-02-13 | Bharani 02-14 05:38 / 02-14 05:37 (-1) | Shukla 17:19 / 17:18 (-1) | Gara 14:38 / 14:38 (+0) | VERIFIED |
| 2027-02-14 | Krittika 02-15 04:47 / 02-15 04:46 (-1) | Brahma 15:09 / 15:08 (-1) | Vishti 13:28 / 13:29 (+1) | VERIFIED |
| 2027-02-16 | Mrigashira 02-17 01:38 / 02-17 01:38 (+0) | Vaidhriti 09:34 / 09:33 (-1) | Taitila 09:35 / 09:36 (+1) | VERIFIED |
| 2027-02-17 | Ardra 23:29 / 23:29 (+0) | Vishkambha 06:14 / 06:13 (-1) | Vanija 06:59 / 06:59 (+0) | VERIFIED |
| 2027-02-20 | Ashlesha 16:08 / 16:08 (+0) | Shobhana 15:09 / 15:08 (-1) | Vanija 08:00 / 08:01 (+1) | VERIFIED |
| 2027-02-22 | Purva Phalguni 11:55 / 11:55 (+0) | Sukarma 08:02 / 08:02 (+0) | Taitila 12:48 / 12:48 (+0) | VERIFIED |
| 2027-02-24 | Hasta 09:39 / 09:39 (+0) | Ganda 02-25 00:27 / 02-25 00:26 (-1) | Bava 09:10 / 09:10 (+0) | VERIFIED |
| 2027-02-26 | Swati 10:14 / 10:13 (-1) | Dhruva 22:19 / 22:18 (-1) | Gara 08:25 / 08:25 (+0) | VERIFIED |
| 2027-02-27 | Vishakha 11:40 / 11:40 (+0) | Vyaghata 22:09 / 22:08 (-1) | Vishti 09:14 / 09:15 (+1) | VERIFIED |
| 2027-02-28 | Anuradha 13:48 / 13:47 (-1) | Harshana 22:29 / 22:28 (-1) | Balava 10:47 / 10:47 (+0) | VERIFIED |
| 2027-03-01 | Jyeshtha 16:27 / 16:27 (+0) | Vajra 23:11 / 23:10 (-1) | Taitila 12:54 / 12:55 (+1) | VERIFIED |
| 2027-03-05 | Shravana 03-06 04:21 / 03-06 04:20 (-1) | Parigha 03-06 02:42 / 03-06 02:42 (+0) | Taitila 09:54 / 09:55 (+1) | VERIFIED |
| 2027-03-06 | Dhanishta 03-07 06:42 / 03-07 06:42 (+0) | Shiva 03-07 03:05 / 03-07 03:04 (-1) | Vanija 12:04 / 12:05 (+1) | VERIFIED |
| 2027-03-07 | Dhanishta 06:42 / 06:42 (+0) | Siddha 03-08 03:06 / 03-08 03:05 (-1) | Shakuni 13:47 / 13:47 (+0) | VERIFIED |
| 2027-03-13 | Bharani 11:03 / 11:03 (+0) | Vaidhriti 19:31 / 19:30 (-1) | Balava 13:55 / 13:56 (+1) | VERIFIED |
| 2027-03-15 | Rohini 09:27 / 09:26 (-1) | Priti 14:37 / 14:36 (-1) | Vanija 10:52 / 10:52 (+0) | VERIFIED |
| 2027-03-16 | Mrigashira 08:13 / 08:13 (+0) | Ayushman 11:51 / 11:50 (-1) | Bava 08:55 / 08:55 (+0) | VERIFIED |
| 2027-03-17 | Ardra 06:46 / 06:46 (+0) | Saubhagya 08:53 / 08:53 (+0) | Kaulava 06:44 / 06:45 (+1) | VERIFIED |
| 2027-03-18 | Pushya 03-19 03:21 / 03-19 03:21 (+0) | Shobhana 05:47 / 05:46 (-1) | Vanija 15:08 / 15:08 (+0) | VERIFIED |
| 2027-04-01 | Uttara Ashadha 09:26 / 09:25 (-1) | Shiva 08:52 / 08:52 (+0) | Vanija 11:33 / 11:34 (+1) | VERIFIED |
| 2027-04-02 | Shravana 12:17 / 12:16 (-1) | Siddha 09:41 / 09:40 (-1) | Bava 13:53 / 13:53 (+0) | VERIFIED |
| 2027-04-03 | Dhanishta 14:42 / 14:42 (+0) | Sadhya 10:11 / 10:10 (-1) | Kaulava 15:44 / 15:45 (+1) | VERIFIED |
| 2027-04-04 | Shatabhisha 16:33 / 16:33 (+0) | Shubha 10:14 / 10:13 (-1) | Gara 17:00 / 17:01 (+1) | VERIFIED |
| 2027-04-05 | Purva Bhadrapada 17:47 / 17:47 (+0) | Shukla 09:48 / 09:47 (-1) | Vishti 17:37 / 17:38 (+1) | VERIFIED |
| 2027-04-13 | Ardra 12:13 / 12:13 (+0) | Atiganda 13:59 / 13:59 (+0) | Gara 06:32 / 06:33 (+1) | VERIFIED |
| 2027-04-14 | Punarvasu 10:53 / 10:52 (-1) | Sukarma 11:10 / 11:10 (+0) | Bava 15:24 / 15:25 (+1) | VERIFIED |
| 2027-04-15 | Pushya 09:34 / 09:33 (-1) | Dhriti 08:23 / 08:23 (+0) | Kaulava 13:21 / 13:22 (+1) | VERIFIED |
| 2027-04-16 | Ashlesha 08:19 / 08:18 (-1) | Shula 05:39 / 05:38 (-1) | Gara 11:22 / 11:23 (+1) | VERIFIED |
| 2027-04-20 | Chitra 04-21 04:29 / 04-21 04:28 (-1) | Harshana 17:47 / 17:47 (+0) | Vishti 16:21 / 16:22 (+1) | VERIFIED |

### Ritual and festival gates

- Marriage: a secondary 1433 transcription supplies candidate Kolkata lagna times and RKM documents some checks. A complete controlling rule and independent verification of the times were not established. [Transcription](https://myastrology.in/en/bengali-calendar/marriage-dates-1433) · [RKM reader](https://cs.rkmvu.ac.in/~tamal/jyotisha/panjika/)
- Annaprashan: Beni Madhab Sil excerpts and independently computed tables surfaced. A complete applicable rule and the same tradition's independent Kolkata timings were not established. [Panjika excerpt](https://benimadhabsilpanjika.com/annaprashan-dates-in-1433/) · [Computed list](https://udyogjyotish.com/en/muhurat/annaprashan/2027/kolkata)
- Griha Pravesh: computed Kolkata lists describe their own selection rules. An independent dated benchmark for the same Kolkata rule was not established. [Computed list](https://www.drikpanchang.com/shubh-dates/griha-pravesh-dates-with-muhurat.html?geoname-id=1275004&year=2027)
- Upanayan: Kolkata predictions explicitly use North Indian rules. The Cultural Association of Bengal schedule does not establish a Kolkata timing benchmark and matching selection rule. [Predictions](https://udyogjyotish.com/hi/muhurat/upanayan/2027/kolkata) · [Association calendar](https://www.cabusa.org/bengali_panjika)

No ritual windows qualify. The other 13 festival routes remain noindexed. The daily gate did not advance, and the ingress comparison alone supplies no Poush observance rule. Dolayatra still lacks an approved daily record.

## v4 Step 5 — live review and local Pages QA, 2026-11-27 IST

Lighthouse 13.6.0 ran in mobile simulation against the live Cloudflare Pages review deployment around 19:40 IST. HTTPS was verified separately with curl. The audit Chromium needed a temporary certificate-error override for the managed network's proxy trust chain. Each row is one lab run. These are not field metrics.

| Live page | Performance | Accessibility | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| Homepage | 100 | 100 | 63 | 0.877 s | 0 |
| Poila Boishakh | 100 | 100 | 63 | 0.836 s | 0.0002 |
| Date converter, before fix | 87 | 96 | 63 | 0.856 s | 0.252 |
| Date converter, after Git-connected rebuild | 100 | 96 | 63 | 0.843 s | 0 |

Live LCP was close to the 0.75 s built-file median. Noindex is intentional and was verified on the live homepage, converter and all three approved festival routes. Lighthouse attributed the converter's CLS to Bengali and Latin font loads. The converter now preloads both subsets and uses optional display so a late font does not replace a fallback after initial rendering. In a matched local Lighthouse run using DevTools mobile throttling and an extra 350 ms font-response delay, CLS went from 0.252 to 0, Performance from 87 to 99, and LCP from 1.56 s to 1.66 s. After the Git-connected rebuild, the live converter served the updated font policy. The 19:45 IST repeat measured zero CLS and 0.843 s LCP.

The in-repository Wrangler command reproduced the missing facade error while picking up Astro's generated Workers configuration. The new isolated `npm run preview:pages -- --port 8789` started correctly. An HTTP request returned the supported 20 April Kolkata record with its following-day nakshatra end, and the packaged Poila Boishakh route returned HTTP 200. All seven Playwright cases ran and passed.

## v4 Step 6 — launch preparation, 2026-11-27 IST

Added LAUNCH_CHECKLIST.md for the owner. The configured example-origin build passed the sitemap, robots, canonical, indexability and internal-link checks across 89 sitemap entries and 112 static HTML pages. It also passed the packaged Worker check. No Cloudflare or Search Console account change was made.
