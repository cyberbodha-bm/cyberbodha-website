# CEH v13 Meta Campaigns — Step-by-Step Setup

Click-by-click setup for the two launch campaigns, written against the drafts as they stood in Ads
Manager on **16 Nov 2026** (ad account `1503896524973147`). The reasons behind these choices are in
`docs/META_CAMPAIGN_REVIEW_CEH.md`; the creative index is `marketing/campaigns/manifest.md`.

## 0. What Ads Manager shows today

All five campaigns are **In draft**, all five toggles are **on**, and the top bar says **Review and
publish (15)**. Pressing that button would publish every draft, including the two that should never
run. Do not press it until step 7.

| Campaign                              | Ad set as configured now                                                                                                                                                           | Problems found                                                                                                                                                                                                                                |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CB \| WhatsApp \| CEH v13 Inbound`   | ₹200/day · **Location: India** (whole country, 60–70 crore people) · Advantage+ audience on · age 18+, unknown WhatsApp age included · Advantage+ placements incl. WhatsApp Status | Name says "HYD +25km" but targeting is all India. Ad has **no Page selected** (error #1443121) and **no media**. Securities declaration pending.                                                                                              |
| `CB \| Leads \| Career Aspirants HYD` | Campaign budget ₹100/day (Advantage+ leads campaign) · Hyderabad +25 km · Advantage+ audience on · age 18+ · all languages                                                         | Name says "20-34" but minimum age is 18 and no maximum. Ad named "SOC + CEH" has **no media, text or form**. Page shows error #1815089 (Lead Gen terms) although the Page banner says the terms are accepted. Securities declaration pending. |
| `CB \| Warm-Up \| Page + Video`       | Hyderabad 25 km                                                                                                                                                                    | Do not publish.                                                                                                                                                                                                                               |
| `CB \| Retarget \| Engaged 30d`       | —                                                                                                                                                                                  | Leave off.                                                                                                                                                                                                                                    |
| `CB \| WhatsApp \| CEH v13 Enquiries` | "New Leads ad set" / "New Leads ad"                                                                                                                                                | Stray Leads-objective copy. Delete.                                                                                                                                                                                                           |

### Applied in Ads Manager on 16 Nov 2026 (drafts, not published)

- Warm-Up, Retarget and the stray "CEH v13 Enquiries" campaigns switched **off** (not deleted).
- WhatsApp ad set renamed `CB | WA | HYD 25km | 21-40 | CEH`: ₹350/day; Hyderabad +25 km only
  ("reach more people" off); age 21–40 hard limit, unknown-age WhatsApp users excluded; manual
  audience; detailed targeting Computer security, Information security (interests) and Network
  security (field of study); placements Facebook + Instagram feeds, Explore, Stories/Reels only;
  limited spend on excluded placements off. Estimated audience 8.2–9.7 lakh.
- Leads campaign renamed `CB | Leads | CEH v13 | Instant Form`, ₹250/day. Ad set renamed
  `CB | Leads | HYD 25km | 21-40 | CEH` with the same location, age, interests and
  Facebook + Instagram platforms; Lead Ads terms error #1815089 cleared.
- Meta has no "Certified Ethical Hacker", "Ethical hacking", "Penetration test" or
  "Cybersecurity" interest; the three above are the closest that exist. For these objectives Meta
  treats detailed targeting as guidance.

Still to do by hand: recreate the WhatsApp ad (its Page selector is locked, error #1443121),
upload posters and copy to both ads, create the instant form, add a payment method, then publish.

## Launch plan — ₹600 per day

The first two weeks run on **₹600/day (₹4,200 a week)**, split across two campaigns:

| Campaign                         | Daily budget | Why                                                                                                    |
| -------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| A — WhatsApp (click-to-chat)     | **₹350**     | Cheapest real conversation in Hyderabad education. The counsellor qualifies the person in chat.        |
| B — Instant form (higher intent) | **₹250**     | Gives structured answers (track, background, start date) and reaches people who will not start a chat. |

Planning range for week 1, to replace with real numbers on day 7: roughly 15–40 WhatsApp
conversations and 5–12 form leads. These are planning assumptions, not benchmarks for this account.
Expect cost per result to be high on days 1–3 while Meta learns.

**Week 2:** move ₹100 from the campaign with the higher **cost per qualified lead** (section 7) to
the other one. Change budgets by at most ₹100 a day, and only once every 3 days. Do not add Warm-Up
or Retarget spend until the two launch campaigns have run for 14 days.

### Seven rules for decent leads, not just cheap ones

1. **Put the offer in the ad text.** Use "Launch offer: training + exam voucher ₹45,000 · training
   only ₹20,000" in the primary text. Prices stay off the artwork. A visible price costs a little more
   per lead, but it filters out people who were never going to pay.
2. **Narrow audience:** Hyderabad +25 km, age 21–40, CEH and security interests, Meta's automatic
   audience off (sections 3.1 and 4.2).
3. **Feed, Stories and Reels only.** Audience Network and WhatsApp Status bring accidental taps.
4. **Make people choose before they reach you.** Use the higher-intent form with the three
   multiple-choice questions, and the track buttons in the WhatsApp pre-filled message.
5. **Reply fast.** Answer WhatsApp within 5 minutes from 9 am to 9 pm. Call form leads within
   1 hour. If they don't answer, try 3 calls over 2 days, then send a WhatsApp message. Most paid
   leads are lost through slow replies, not bad ads.
6. **Log every lead the same day** (section 7). A lead counts as _qualified_ when the person names a
   track, gives a start month and answers the call or chat.
7. **Leave the ads alone for days 1–7.** Every edit restarts Meta's learning.

## 1. Before you touch the campaigns

1. **Payment method:** Business settings → Billing & payments → add a card or UPI. Nothing publishes without it.
2. **Securities declaration (India):** in each ad set → _Policy and regulatory requirements (India)_ →
   **Review requirements** → answer **No, my ads are not about securities or investments**. CyberBodha sells training.
3. **Lead Gen terms error #1815089:** open `https://www.facebook.com/ads/leadgen/tos?page_id=1457789564080396`
   while signed in as a Page admin and accept. Then, in the Leads ad set, re-select the
   _CyberBodha_ Page in the **Facebook Page** dropdown so the old validation clears.
4. **Re-export the posters** (see `marketing/campaigns/manifest.md` → _Fixes before upload_):
   - `ceh-v13-dm-details.jpg`: replace the footnote with
     "*Exam voucher included in the certification track. EC-Council exam terms apply."
   - `ceh-v13-tracks-detailed.jpg` and `ceh-v13-tracks-comparison.jpg`: re-export at 1080 × 1350.
   - Commit the new files as `-v2` and upload them: Ads Manager → **All tools → Media library → Upload**.
5. **WhatsApp Business app** on +91 90638 09271:
   - Business tools → **Greeting message** — use the text in section 6.
   - Business tools → **Quick replies** `/fees`, `/batch`, `/syllabus`, `/cert` — section 6.
   - Name the person on chat duty from 9 am to 9 pm, plus an evening backup.

## 2. Switch off what will not run

1. Campaigns tab → `CB | WhatsApp | CEH v13 Enquiries` → toggle **off**. Do not delete it: it records why the Leads objective cannot host a WhatsApp ad (playbook section 4.5).
2. Tick `CB | Warm-Up | Page + Video` and `CB | Retarget | Engaged 30d` → toggle **off**. Keep them as
   drafts. Retargeting is rebuilt in step 8.

## 3. Campaign A — WhatsApp (`CB | WhatsApp | CEH v13 Inbound`)

### 3.1 Ad set `CB | WA | HYD +25km | 18-45` → rename `CB | WA | HYD 25km | 21-40 | CEH`

| Section             | Set to                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conversion location | Message destinations → **Manual** → **WhatsApp only**, +91 90638 09271 (already set). Ignore the "+11 points, add destinations" suggestion: Messenger chats do not reach the business phone.                                                                                                                                                  |
| Performance goal    | Maximise number of conversations (already set)                                                                                                                                                                                                                                                                                                |
| Budget              | Daily **₹350**. Start date today, no end date.                                                                                                                                                                                                                                                                                                |
| Ad set scheduling   | Off for week 1. If chats arrive at night and wait until morning, turn it on for 9 am–9 pm.                                                                                                                                                                                                                                                    |
| Audience            | Click **Switch to original audience options** (turns Advantage+ audience off) so the limits below are hard limits.                                                                                                                                                                                                                            |
| Locations           | **Remove "India".** Add **Hyderabad, Telangana +25 km**. If the batch is online, add Bengaluru, Chennai, Pune, Visakhapatnam in a _separate_ ad set later, not here.                                                                                                                                                                          |
| Age                 | **21 – 40**. Untick _Include people with unknown age on WhatsApp_.                                                                                                                                                                                                                                                                            |
| Gender              | All                                                                                                                                                                                                                                                                                                                                           |
| Detailed targeting  | Include people who match **any** of: Certified Ethical Hacker, EC-Council, Ethical hacking, Penetration test, Kali Linux, Computer security, Information security, Cybersecurity, Offensive Security, CompTIA Security+, Bug bounty program. Type each one and keep only those Ads Manager finds. Leave **Advantage detailed targeting** off. |
| Languages           | English, Telugu, Hindi                                                                                                                                                                                                                                                                                                                        |
| Placements          | **Manual placements.** Facebook Feed, Instagram Feed, Instagram Explore, Facebook Stories, Instagram Stories, Instagram Reels, Facebook Reels. Turn off Audience Network, Messenger, WhatsApp Status, right column, in-stream, search.                                                                                                        |
| Policy (India)      | Not about securities (step 1.2)                                                                                                                                                                                                                                                                                                               |

The estimated audience size should fall to roughly 1–5 lakh. If it shows crores, the location is still India.

### 3.2 Ad `CB | WA | CEH v13 | Poster A` → rename `CB | WA | CEH v13 | DM details v2`

1. **Identity:** Facebook Page **CyberBodha** (fixes error #1443121). Instagram **cyberbodha95**.
2. **Format:** Single image or video.
3. **Media:** `ceh-v13-dm-details-v2.jpg`. Use the same image for every placement; check the 9:16 crop shows the logo and the "DM 'CEH'" line.
4. **Primary text:**
   > 🎓 CEH v13 launch offer — Hyderabad
   >
   > • Training + Certification: ₹45,000, includes the CEH v13 exam voucher, exam prep and practice tests
   > • Training only: ₹20,000, the full 60-hour course
   >
   > 60 hours, live and instructor-led, with hands-on labs in authorised environments.
   >
   > DM "CEH" for the next batch date and the seats left.
5. **Headline:** `CEH v13 + Exam Voucher · ₹45,000 Launch Offer`
6. **Call to action:** Send WhatsApp message.
7. **Message template → pre-filled message:** "Hi CyberBodha, I'd like the CEH v13 fees and next batch date." Add the quick-reply buttons _Training + Certification_ and _Training only_. People who pick a button have already told you their track.
8. **Tracking:** leave the dataset (Pixel `29155674314074371`) selected. URL parameters: `utm_source=meta&utm_medium=paid&utm_campaign=ceh_v13_wa`.
9. Remove any extra ad that appears in this ad set (for example "New Leads ad"). One ad per ad set for week 1.

## 4. Campaign B — Instant form (`CB | Leads | Career Aspirants HYD`)

### 4.1 Campaign

1. Rename to `CB | Leads | CEH v13 | Instant Form`.
2. Budget: campaign daily budget **₹250** (now ₹100). Keep Advantage+ campaign budget on; there is one ad set.
3. Special Ad Categories: none.

### 4.2 Ad set → rename `CB | Leads | HYD 25km | 21-40 | CEH`

| Section             | Set to                                                                                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conversion location | Instant forms · Page CyberBodha (re-select it, step 1.3)                                                                                                 |
| Performance goal    | Maximise number of leads. Switch to _Maximise number of conversion leads_ only after LeadFlow sends lead stages back to Meta (section 9).                |
| Audience            | **Switch to original audience options**, then: Hyderabad +25 km, age **21–40**, the same detailed-targeting list as 3.1, languages English/Telugu/Hindi. |
| Placements          | Manual: the same list as 3.1. Audience Network **off** — it is the main source of accidental form fills.                                                 |

### 4.3 Ad → rename `CB | Leads | CEH v13 | Tracks detailed v2`

1. **Identity:** CyberBodha / cyberbodha95.
2. **Format:** Single image. **Media:** add two images, `ceh-v13-tracks-detailed-v2.jpg` and
   `ceh-v13-tracks-comparison-v2.jpg`. Meta rotates them and reports each one.
3. **Primary text:**
   > CEH v13 launch offer — Hyderabad
   >
   > ✔ Training + Certification: ₹45,000, includes the CEH v13 exam voucher
   > ✔ Training only: ₹20,000, the full 60-hour course
   >
   > 60 hours, live and instructor-led, with hands-on labs.
   > Fill the 30-second form and our counsellor will call you with the next batch date.
4. **Headline:** `CEH v13 + Exam Voucher · ₹45,000 Launch Offer` · **Description:** `Live batches in Hyderabad`
5. **Call to action:** Apply now.
6. **Instant form → Create form** named `CEH v13 — Hyderabad — v1`:
   - **Form type: Higher intent** (adds a review step before submit).
   - **Intro:** headline "CEH v13 — 60 hours, live"; one line "Tell us which track suits you and we'll call with fees and dates."
   - **Questions** (multiple choice first, then contact fields):
     1. Which track interests you? — _Training + CEH certification_ / _Training only_ / _Not sure yet_
     2. What describes you best? — _Working in IT_ / _Working in security_ / _Student_ / _Other_
     3. When do you want to start? — _This month_ / _In 1–3 months_ / _Just exploring_
     4. Contact fields: Full name, Phone number, Email (pre-filled by Meta).
   - **Privacy policy:** `https://cyberbodha.com/privacy`.
   - **Completion screen:** "Thanks — we'll call you within one working day." Button **Chat on WhatsApp**, link `https://wa.me/919063809271`.
   - Optional: turn on **phone-number verification (OTP)** if more than 20% of numbers turn out wrong in week 1.
7. **Tracking:** Pixel selected. URL parameters `utm_source=meta&utm_medium=paid&utm_campaign=ceh_v13_form`.

## 5. Publish

1. Leave only campaigns A and B toggled on.
2. Click **Review and publish**. The list should show only the edits to A and B, plus the deletion of the stray campaign. If it lists the Warm-Up or Retarget drafts as _publishing_, cancel and toggle them off first.
3. Ads go into review (usually under 24 hours). If an ad is rejected for "hacking", appeal it as
   education: "Ethical-hacking certification training in authorised lab environments."

## 6. WhatsApp replies (set before publishing)

**Greeting message**

> Hi 👋 Thanks for your interest in CEH v13 at CyberBodha.
> • 60 hours, live instructor-led
> • Training only — ₹20,000
> • Training + certification — ₹45,000 (CEH v13 exam voucher included)
> • Cyber range labs — ₹6,000 (6 months access)
> Are you looking at training only or with certification, and when would you like to start?

| Shortcut    | Text                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/fees`     | Training only ₹20,000 · Training + certification ₹45,000 including the CEH v13 exam voucher · labs ₹6,000 for 6 months. GST extra where applicable. |
| `/batch`    | Next batches: weekend (Sat–Sun) and weekday evening. Share your preferred timing and I'll block a seat. _(Update with real dates.)_                 |
| `/syllabus` | 20 CEH v13 modules — reconnaissance → scanning → exploitation → post-exploitation → reporting. Full list: cyberbodha.com/programs/ethical-hacking   |
| `/cert`     | The ₹45,000 track includes the CEH v13 exam voucher. We handle registration, exam prep and practice tests; EC-Council's exam terms apply.           |

This replaces the playbook's old `/cert` text ("certification fee is separate"), which contradicted the price.

## 7. First 7 days

**Lead log** (a Google Sheet until LeadFlow is connected). One row per lead:
date · source (WhatsApp / form) · name · phone · track · background · start month · first reply time ·
call answered (Y/N) · qualified (Y/N) · next step · enrolled (Y/N, track).

Every evening, work out for each campaign: amount spent ÷ qualified leads = **cost per qualified lead**.
That number decides the week-2 budget split, not Meta's "cost per result".

| Day   | Check                                                                                                                                                                                                                                                                  |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Day 1 | Both ads _Active_. Spend started. First chats arrive on the phone. Download the first form leads: Ads Manager → **Leads Center** (Page → Leads).                                                                                                                       |
| Daily | Answer every chat within 5 minutes during 9–9. Call every form lead the same day. Log every lead with its track and status (section 9).                                                                                                                                |
| Day 3 | Frequency below 2. WhatsApp: if ₹1,050 is spent and there are fewer than 5 chats, check the location (Hyderabad, not India), age and placements before you change the creative. Form: if ₹750 is spent and there are fewer than 3 leads, do the same checks.           |
| Day 7 | Judge on at least 20 results per campaign: **qualified-lead share** (named a track and a start date and answered the call). Move budget towards the campaign with the lower cost per qualified lead. Do not edit the ads during days 1–7: each edit restarts learning. |

## 8. Retargeting (when the warm audience reaches ~2,000)

1. Audiences → Create **custom audience** → _Instant form_: opened or submitted, last 90 days.
2. Custom audience → _Messaging_: people who messaged the Page on WhatsApp, last 90 days.
3. Custom audience → _Website_: visitors to `/programs/ethical-hacking` in the last 30 days, plus the Pixel `Contact` event (WhatsApp button clicks on the site).
4. Combine 1–3 into one audience, `CB | Warm | CEH 90d`. Exclude people who submitted the form in the last 14 days.
5. Rebuild `CB | Retarget` on this audience, ₹150/day, creative `ceh-v13-tracks-light.jpg` (re-exported at 4:5), same instant form.

## 9. Where the leads go (LeadFlow)

LeadFlow (`D:\meta\Meta-Lead-Manager`) will be the one lead store for CyberBodha, Prime Realtors
and Theramax. For CyberBodha:

| Source            | Today                                       | In LeadFlow                                                                                                                                                                                                                                  |
| ----------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Meta instant form | Meta Leads Center only                      | LeadFlow's `leadgen` webhook already imports these once the CyberBodha workspace is connected to Page `1457789564080396`.                                                                                                                    |
| Click-to-WhatsApp | Business phone only (WhatsApp Business app) | LeadFlow ingests WhatsApp `messages` webhooks through the WhatsApp Business Account `1373813987705146`. The number must use the Cloud API or the app's _coexistence_ mode; the Business app alone sends nothing to webhooks.                 |
| Website form      | Cloudflare D1 `leads`                       | **Not connected yet.** LeadFlow has no authenticated intake endpoint for website leads. The site writes to D1 first and only uses `LEAD_WEBHOOK_URL` when D1 is absent, so it also needs a change to forward to LeadFlow after the D1 write. |

Until LeadFlow is live for CyberBodha, download Leads Center daily and keep the WhatsApp chats on the phone labelled by track.
