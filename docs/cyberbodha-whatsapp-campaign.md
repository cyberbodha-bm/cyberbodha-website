# CyberBodha — Click-to-WhatsApp Campaign (CEH v13)

Build specification for a "message us on WhatsApp" campaign, so the poster's *"DM 'CEH' for details"* promise leads to a real conversation instead of an instant form.

Ad account **1503896524973147** · Portfolio **1457794117413274** · Page **CyberBodha 1457789564080396** · WhatsApp Business app **+91 90638 09271** · Updated 16 November 2026 — ad set configured in Ads Manager

---

## 1. What this campaign is, and what it is not

A click-to-WhatsApp (CTWA) ad is an ad that opens a WhatsApp chat instead of a form or a website. The person taps *Send message*, lands in a chat with the business, and the first message is pre-filled. Meta bills for impressions and optimises for **conversations started**, not for clicks.

It is a different animal from the instant-form campaign already built:

| | Instant form (existing) | Click-to-WhatsApp (this one) |
|---|---|---|
| What the user does | Fills 4 fields in an overlay | Sends a WhatsApp message |
| Who qualifies them | The form | A human in the chat |
| Cost per result | Higher | Lower per conversation, but each one costs staff time |
| Speed to lead | They wait for a callback | They are talking now |
| Best for | Collecting structured data | Fast, personal selling |

CTWA does not replace the lead-form campaign. It captures the buyers who will not fill a form but will send a message — which, for a ₹20,000–45,000 course in Hyderabad, is a large share of the market.

> **Rule of thumb:** a WhatsApp conversation is not a lead. Only count it as a lead once someone has replied twice and stated a batch preference.

---

## 2. Prerequisites — verified state

| Requirement | State | Evidence |
|---|---|---|
| WhatsApp Business app linked to the portfolio | Yes | Portfolio → WhatsApp accounts, status **Approved** |
| WhatsApp business account ID | 1373813987705146 | Business settings URL parameter |
| Number offered in the ad set | +91 90638 09271 | Ad set → Message destinations → WhatsApp |
| Display name on WhatsApp | Shadowxlab, not CyberBodha | Ad identity preview — changing it needs a display-name review |
| Business portfolio verification | **Unverified** | Business info → "Unverified — Start verification" |
| Payment method on ad account | **None** | Business info → "No payment method found"; billing hub empty |
| Meta Lead Ads Terms | **Accepted** | Ad set editor: "You've accepted Meta's Lead Ads Terms for this Page" |
| Media library | No CEH posters yet | Five posters committed in `marketing/campaigns/ceh-v13/`; ads still error "Please specify the media" until uploaded |

Two items block the campaign outright: **no payment method** and **no media**. The Lead Ads Terms item is now resolved, which also clears error **#1815089** on the existing instant-form campaigns.

### The two drafts now sitting in the account

**Draft 1 — keep this one.** Created under the Engagement objective, with the WhatsApp destination correctly bound.

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Inbound` | `120249035703480772` |
| Ad set `CB / WA / HYD 25km / 21-40 / CEH` | `120249035703460772` |
| Ad `CB / WA / CEH v13 / DM details` — Page selector locked, recreate (#1443121) | `120249035703470772` |

**Draft 2 — keep it, never enable it.** An earlier attempt under the *Leads* objective. The conversion-location field there is read-only and stayed on Instant forms, so it can never become a WhatsApp campaign.

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Enquiries` | `120249035559060772` |
| Ad set `New Leads ad set` | `120249035559050772` |
| Ad `New Leads ad` | `120249035559070772` |

It has never delivered and carries no creative. It is switched off; leave it as a record of the attempt rather than deleting it.

---

## 3. What is built, and what is left

Objective choice matters: **Engagement → Messaging apps → WhatsApp** is the supported path. Starting from *Leads* cannot work — its conversion location defaults to Instant forms and is not switchable in this account.

### 3.1 Already set in the draft

| Field | Value |
|---|---|
| Campaign name | `CB / WhatsApp / CEH v13 Inbound` |
| Campaign objective | **Engagement** (manual setup) |
| Budget mode | **Ad set budget** (campaign budget off) |
| Ad set name | `CB / WA / HYD 25km / 21-40 / CEH` |
| Conversion location | **Message destinations** |
| Destinations | **Manual — WhatsApp only**, Messenger and Instagram unticked |
| WhatsApp number | **+91 90638 09271**, confirmed connected to Page CyberBodha |
| Performance goal | Maximise number of conversations |
| Ad name | `CB / WA / CEH v13 / DM details` (replace with a new ad) |
| Ad format | Single image or video |

### 3.2 Applied on 16 Nov 2026

| Field | Value | Why |
|---|---|---|
| Daily budget | **₹350** | ₹600/day plan: WhatsApp ₹350 + Leads ₹250 |
| Schedule | Start on publish, no end date | Kill by hand if quality is poor |
| Locations | **Hyderabad (+25 km)**, "reach more people" off | Was all of India; same catchment as the lead campaign |
| Age | **21–40**, hard limit; unknown-age WhatsApp users excluded | Working professionals and final-year graduates who can pay |
| Gender | All | — |
| Audience | **Manual** (Advantage+ audience off) | Keeps the budget on the catchment |
| Detailed targeting | Computer security, Information security (interests); Network security (field of study) | Closest available; Meta has no "Certified Ethical Hacker" or "Ethical hacking" interest |
| Placements | Facebook + Instagram feeds, Explore, Stories/Reels | Audience Network, WhatsApp Status, Threads, in-stream and search off |
| Bid strategy | Highest volume | Default; keep it |

### 3.3 Still to do by hand

| Field | Value |
|---|---|
| New ad | Create a new ad in this ad set; pick Page CyberBodha and Instagram cyberbodha95, then delete the old ad |
| Ad media | `ceh-v13-dm-details-v2.jpg` at 1080 × 1350, footnote changed to "Exam voucher included in the certification track" |
| Ad copy | Option B below, the launch offer |
| Message template | Pre-filled "Hi CyberBodha, I'd like the CEH v13 fees and next batch date." with buttons *Training + Certification* / *Training only* |

Budget note: ₹350/day at Hyderabad CPMs buys roughly 7,000–12,000 impressions a day. Plan for about **10–25 conversations per week** at ₹100–250 each, and judge after 7 days on replies that name a track and a start month — not on conversation count.

---

## 4. Ad copy

### Option A — direct, matches the poster

> **DM "CEH" to get the full details.**
>
> We run the complete CEH v13 programme — 60 hours, live instructor-led, with hands-on labs on real attack and defence scenarios.
>
> Two ways to join:
> • Training only — build the skills
> • Training + certification — full CEH v13 pathway with exam prep and practice tests
>
> Batches run from Hyderabad. Message us and we'll send fees, the next start date and lab access details.

### Option B — launch offer, fee-qualified (use this first)

> **CEH v13 launch offer — Hyderabad**
>
> • Training + Certification: ₹45,000, includes the CEH v13 exam voucher, exam prep and practice tests
> • Training only: ₹20,000, the full 60-hour course
>
> 60 hours, live and instructor-led, with hands-on labs in authorised environments.
>
> DM "CEH" for the next batch date and the seats left.

Headline: `CEH v13 + Exam Voucher · ₹45,000 Launch Offer`.

### Option C — curiosity, highest volume

> Thinking about CEH v13?
>
> 60 hours. Live instructors. Real labs — reconnaissance through exploitation to reporting.
>
> Send "CEH" on WhatsApp and we'll answer in minutes: fees, batch dates, and whether certification is worth it for your profile.

Use **B** first: the prices are launch offers, and showing them filters out people who were never going to pay. **A** is the fallback if B gets fewer than 5 chats in its first ₹1,050. **C** produces the most chats and the most noise. Test one option for 7 days before touching it.

---

## 5. What happens when they message

The campaign only works if someone is on the other end. WhatsApp Business app, after hours included.

### Automated greeting (WhatsApp Business app → Business tools → Greeting message)

> Hi 👋 Thanks for your interest in CEH v13 at CyberBodha.
>
> Quick details:
> • 60 hours, live instructor-led
> • Training only — ₹20,000
> • Training + certification — ₹45,000 (CEH v13 exam voucher included)
> • Cyber range labs — ₹6,000 (6 months access)
>
> To point you to the right batch, tell me: **are you looking at training only, or with certification?** And **when would you like to start?**

### Quick replies to save typing

| Shortcut | Text |
|---|---|
| `/fees` | Fees: training only ₹20,000 · training + certification ₹45,000 including the CEH v13 exam voucher · labs ₹6,000 for 6 months. GST extra where applicable. |
| `/batch` | Next batches: weekend (Sat–Sun) and weekday evening. Share your preferred timing and I'll block a seat. |
| `/syllabus` | 20 CEH v13 modules, reconnaissance → scanning → exploitation → post-exploitation → reporting. Full module list: cyberbodha.com/programs/ethical-hacking |
| `/cert` | The ₹45,000 track includes the CEH v13 exam voucher. We handle registration, exam prep and practice tests; EC-Council's exam terms apply. |

### Response standard

Reply within **5 minutes** during 9am–9pm IST. Conversation quality and cost per conversation both depend on it. Every unanswered conversation is a paid impression that produced nothing.

---

## 6. Before switching it on

- [ ] Add a payment method to ad account 1503896524973147
- [ ] Start business portfolio verification (business info → Start verification)
- [ ] Upload the CEH posters (re-exported `-v2` files) to the Ads Manager media library at 1080 × 1350
- [ ] Confirm the stray draft `CB / WhatsApp / CEH v13 Enquiries` stays off (Leads objective, unusable, kept for reference)
- [ ] Recreate the ad in `CB / WhatsApp / CEH v13 Inbound` (budget, audience and placements are already set): Page, poster, copy, message template
- [ ] Confirm the ad set still shows +91 90638 09271 and WhatsApp-only destinations
- [ ] Set the WhatsApp greeting message and the four quick replies
- [ ] Assign one person to answer chats, with a backup for evenings
- [ ] Send a test message to your own phone from the ad preview, then reply as the business
- [ ] Decide the display name: "Shadowxlab" is what users see today; CyberBodha needs a display-name review in WhatsApp Manager

---

## 7. Honest expectations

At ₹350/day this campaign will not transform the business. It is a tap that must be turned on to be judged, and it should produce somewhere between 40 and 100 conversations in its first month if the creative is decent and someone answers.

The number that matters is not conversations. It is **how many people, after two messages, tell you a batch date works for them**. If that is zero after 7 days and 30 conversations, the problem is the offer or the reply script, not the targeting — and no amount of budget fixes it.

The instant-form campaign (₹250/day) runs alongside it. Different people prefer different doors. Instant-form leads stay in Meta Leads Center and WhatsApp leads stay on the business phone; only website-form leads reach Cloudflare D1 `leads`. Log all of them in one sheet until LeadFlow is connected.
