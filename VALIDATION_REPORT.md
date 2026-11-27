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
