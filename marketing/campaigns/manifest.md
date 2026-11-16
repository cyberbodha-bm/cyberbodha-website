# Creative Manifest

Every poster that has appeared, or is queued to appear, in a Meta campaign. The `File` column is
the path in this repo. Where it says **pending upload**, the artwork exists only as a design file
and has not been committed yet.

## CEH v13 — Ethical Hacking (programme `ethical-hacking`)

Landing page: <https://cyberbodha.com/programs/ethical-hacking>

| #   | Creative                                                                                                            | File                                      | Size (ratio)         | Use in                         | Status                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------- | ------------------------------ | ---------------------------------------------------------- |
| 1   | Dark, "With Certification OR Training Only" with four bullets each, "Perfect for Students & Aspiring Professionals" | `ceh-v13/ceh-v13-tracks-detailed.jpg`     | 1199 × 1312 (≈11:12) | **Leads** — main image         | Committed; re-export at 1080 × 1350 before upload          |
| 2   | Dark, "Certified Ethical Hacker", both tracks, "You will practice" icons                                            | `ceh-v13/ceh-v13-tracks-comparison.jpg`   | 1199 × 1312 (≈11:12) | **Leads** — second image (A/B) | Committed; re-export at 1080 × 1350                        |
| 3   | Dark, "60 hours · Live training", "DM 'CEH' for details", voucher footnote                                          | `ceh-v13/ceh-v13-dm-details.jpg`          | 1122 × 1402 (4:5)    | **WhatsApp** — only image      | Committed; **fix footnote** (see below)                    |
| 4   | Light/white, minimal, two track buttons                                                                             | `ceh-v13/ceh-v13-tracks-light.jpg`        | 1199 × 1312 (≈11:12) | Retarget (later)               | Committed; not used at launch                              |
| 5   | Red/cyan circular emblem, hooded figure, `www.cyberbodha.com`                                                       | `ceh-v13/ceh-v13-brand-poster-legacy.jpg` | 1086 × 1448 (3:4)    | —                              | **Do not run** — old logo and palette, hooded-hacker image |

### Fixes before upload

- **#3 footnote** reads "Certification exam/voucher subject to separate terms". The ₹45,000 track
  includes the voucher, so this tells buyers the opposite. Change it to
  "*Exam voucher included in the certification track. EC-Council exam terms apply."
- **#1, #2, #4 are 1199 × 1312.** Meta shows that ratio in feed, but crops it in Stories/Reels and may
  crop the CTA. Re-export at 1080 × 1350 (4:5), keeping the logo and the "Enroll Now" button
  inside the frame, and commit as `-v2`.
- **Hooded figures** (#5 entirely; background monitor in #1; sleeve patch in #3) invite Meta's
  hacking-policy review. Prefer versions without them.
- **"Perfect for Students"** (#1) pulls the audience that can least afford ₹45,000. Keep it for now;
  test a "For IT professionals" line in the `-v2` export.

## By campaign

| Campaign                              | Objective               | IDs                                                  | Status                                   |
| ------------------------------------- | ----------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `CB \| WhatsApp \| CEH v13 Inbound`   | Engagement — WhatsApp   | ad set `120249035703460772`, ad `120249035703470772` | Launch — creative #3                     |
| `CB \| Leads \| Career Aspirants HYD` | Leads — instant form    | ad set `120248978478070772`, ad `120248978478080772` | Launch — creatives #1 + #2               |
| `CB \| Retarget \| Engaged 30d`       | Leads — instant form    | —                                                    | Keep off until the warm audience ≈ 2,000 |
| `CB \| Warm-Up \| Page + Video`       | Awareness — Page visits | ad set `120248978329810772`                          | Do not publish                           |
| `CB \| WhatsApp \| CEH v13 Enquiries` | Leads (stray)           | campaign `120249035559060772`                        | Delete                                   |

Step-by-step setup: `docs/META_CAMPAIGN_SETUP_CEH.md`.

## Rules the creative must respect

- **Landing page must exist and match.** All traffic goes to `/programs/ethical-hacking`, which
  states 60 hours, ₹20,000 training only, ₹45,000 with certification (exam voucher included), ₹6,000 labs.
- **No prices on the artwork.** Prices change; ads stay live for months. The page carries them.
- **Certification footnote** whenever certification is claimed: the voucher is included in the
  certification track and EC-Council's exam terms apply.
- **No placement, salary or hiring claims.** The academy does not publish placement statistics,
  and unverifiable claims are both a policy risk and a trust problem.
