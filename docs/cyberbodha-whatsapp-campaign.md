# CyberBodha — Click-to-WhatsApp Campaign (CEH v13)

Build specification for a "message us on WhatsApp" campaign, so the poster's *"DM 'CEH' for details"* promise leads to a real conversation instead of an instant form.

Ad account **1503896524973147** · Portfolio **1457794117413274** · Page **CyberBodha 1457789564080396** · WhatsApp Business app **+91 90638 09271** · Prepared 16 November 2026

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
| Media library | No CEH posters | Ads still error "Please specify the media" |

Two items block the campaign outright: **no payment method** and **no media**. The Lead Ads Terms item is now resolved, which also clears error **#1815089** on the existing instant-form campaigns.

### The two drafts now sitting in the account

**Draft 1 — keep this one.** Created under the Engagement objective, with the WhatsApp destination correctly bound.

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Inbound` | `120249035703480772` |
| Ad set `CB / WA / HYD +25km / 18-45` | `120249035703460772` |
| Ad `CB / WA / CEH v13 / Poster A` | `120249035703470772` |

**Draft 2 — keep it, never enable it.** An earlier attempt under the *Leads* objective. The conversion-location field there is read-only and stayed on Instant forms, so it can never become a WhatsApp campaign.

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Enquiries` | `120249035559060772` |
| Ad set `New Leads ad set` | `120249035559050772` |
| Ad `New Leads ad` | `120249035559070772` |

It has never delivered and carries no creative. Leave it paused as a record of the attempt rather than deleting it.

---

## 3. What is built, and what is left

Objective choice matters: **Engagement → Messaging apps → WhatsApp** is the supported path. Starting from *Leads* cannot work — its conversion location defaults to Instant forms and is not switchable in this account.

### 3.1 Already set in the draft

| Field | Value |
|---|---|
| Campaign name | `CB / WhatsApp / CEH v13 Inbound` |
| Campaign objective | **Engagement** (manual setup) |
| Budget mode | **Ad set budget** (campaign budget off) |
| Ad set name | `CB / WA / HYD +25km / 18-45` |
| Conversion location | **Message destinations** |
| Destinations | **Manual — WhatsApp only**, Messenger and Instagram unticked |
| WhatsApp number | **+91 90638 09271**, confirmed connected to Page CyberBodha |
| Performance goal | Maximise number of conversations |
| Ad name | `CB / WA / CEH v13 / Poster A` |
| Ad format | Single image or video |

### 3.2 Still to set by hand

| Field | Value | Why |
|---|---|---|
| Daily budget | **₹250** | Part of the ₹600/day plan: Leads ₹350 + WhatsApp ₹250 |
| Schedule | Start on publish, no end date | Kill by hand if quality is poor |
| Locations | India → **Hyderabad (+25 km)** | Same catchment as the lead campaign |
| Age | 18–45 | Students through early-career switchers |
| Gender | All | — |
| Detailed targeting | None | Let the creative qualify |
| Advantage+ audience | **Off** | Keeps the ₹250/day on the catchment, not on 100M people |
| Advantage+ placements | **On** | Cheap inventory; Facebook feed, Instagram feed, Reels, Stories |
| Bid strategy | Highest volume | Default; keep it |
| Ad media | Poster at 1080 × 1350 | Nothing uploaded yet |
| Ad copy | Section 4 below | Blocked behind the media upload |

Budget note: ₹250/day at Hyderabad CPMs buys roughly 5,000–9,000 impressions a day. Expect **5–12 conversations per week**, not per day, at ₹100–250 per conversation. Judge it after 7 days, on replies that mention budget or batch dates — not on conversation count.

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

### Option B — fee-qualified (fewer, better chats)

> 60 hours of CEH v13 training, starting soon in Hyderabad.
>
> Training only ₹20,000. Training with certification ₹45,000. Cyber range labs ₹6,000 for 6 months.
>
> Send "CEH" and we'll share the batch calendar and what's included in each track.

### Option C — curiosity, highest volume

> Thinking about CEH v13?
>
> 60 hours. Live instructors. Real labs — reconnaissance through exploitation to reporting.
>
> Send "CEH" on WhatsApp and we'll answer in minutes: fees, batch dates, and whether certification is worth it for your profile.

Use **A** first. **B** filters out people with no budget but shrinks volume. **C** produces the most chats and the most noise. Test A for 7 days before touching it.

---

## 5. What happens when they message

The campaign only works if someone is on the other end. WhatsApp Business app, after hours included.

### Automated greeting (WhatsApp Business app → Business tools → Greeting message)

> Hi 👋 Thanks for your interest in CEH v13 at CyberBodha.
>
> Quick details:
> • 60 hours, live instructor-led
> • Training only — ₹20,000
> • Training + certification — ₹45,000
> • Cyber range labs — ₹6,000 (6 months access)
>
> To point you to the right batch, tell me: **are you looking at training only, or with certification?** And **when would you like to start?**

### Quick replies to save typing

| Shortcut | Text |
|---|---|
| `/fees` | Fees: training only ₹20,000 · training + certification ₹45,000 · labs ₹6,000 for 6 months. GST extra where applicable. |
| `/batch` | Next batches: weekend (Sat–Sun) and weekday evening. Share your preferred timing and I'll block a seat. |
| `/syllabus` | 20 CEH v13 modules, reconnaissance → scanning → exploitation → post-exploitation → reporting. Full module list: cyberbodha.com/programs/ethical-hacking |
| `/cert` | Certification fee is separate from training and follows EC-Council's terms. We handle registration support and exam prep. |

### Response standard

Reply within **5 minutes** during 9am–9pm IST. Conversation quality and cost per conversation both depend on it. Every unanswered conversation is a paid impression that produced nothing.

---

## 6. Before switching it on

- [ ] Add a payment method to ad account 1503896524973147
- [ ] Start business portfolio verification (business info → Start verification)
- [ ] Upload the CEH posters to the Ads Manager media library at 1080 × 1350
- [ ] Confirm the stray draft `CB | WhatsApp | CEH v13 Enquiries` stays paused (Leads objective, unusable, kept for reference)
- [ ] Finish the `CB | WhatsApp | CEH v13 Inbound` draft: budget, audience, placements, media, copy
- [ ] Confirm the ad set still shows +91 90638 09271 and WhatsApp-only destinations
- [ ] Set the WhatsApp greeting message and the four quick replies
- [ ] Assign one person to answer chats, with a backup for evenings
- [ ] Send a test message to your own phone from the ad preview, then reply as the business
- [ ] Decide the display name: "Shadowxlab" is what users see today; CyberBodha needs a display-name review in WhatsApp Manager

---

## 7. Honest expectations

At ₹250/day this campaign will not transform the business. It is a tap that must be turned on to be judged, and it will produce somewhere between 15 and 40 conversations in its first month if the creative is decent and someone answers.

The number that matters is not conversations. It is **how many people, after two messages, tell you a batch date works for them**. If that is zero after 7 days and 30 conversations, the problem is the offer or the reply script, not the targeting — and no amount of budget fixes it.

The instant-form campaign stays live alongside it. Different people prefer different doors; form leads land in Cloudflare D1 table `leads`, and WhatsApp leads should be copied there by hand until an integration exists.
