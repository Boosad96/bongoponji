# Validation report

Source review date: 2026-11-27.

| Feature | Evidence and checks | Result |
| --- | --- | --- |
| Bengal and Assam solar calendar | PAC 1948 Saka regional table. All 12 published month starts tested. The RKM reader independently agrees with the Ashwin start and end. | Source-backed date conversion fixture, 15 April 2026 to 13 April 2027. Final day conservatively bounded. Publication clearance for the PAC-based dataset remains open. Bishuddha Siddhanta support is unclaimed. |
| Bangladesh civil calendar | 2019 rules described on Teachers' Portal and contemporary reporting quoting the calendar committee. February 21, March 26, April 14 and December 16 anchor checks. February 2028 leap handling and exhaustive round trips within the implemented date window. | Passed. Individual future government almanacs were not compared. |
| Kolkata horizon | PAC tables, five reference days from March, April, June, November and December 2026. Both sunrise and sunset compared using a maximum absolute tolerance of two minutes. | All ten comparisons passed. Scope is the listed fixtures, not blanket approval of the output. |
| Tithi | Checked a change from Krishna Amavasya to Shukla Pratipada around an Astronomy Engine new moon and a five-second internal boundary tolerance. | Internal consistency passed. Reference end times and sunrise-assigned tithi still require independent validation. |
| Publication | All five states tested, including wrong date and missing provenance. | Passed. No daily records have release approval. |

See DATA_SOURCES.md for source links. Festival observance rules, muhurat, nakshatra, yoga, karana and sankranti are pending.
