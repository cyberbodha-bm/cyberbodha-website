# CyberBodha — Website, Meta Campaigns & Git Playbook

The complete operating document: what is live, what is built, what is blocked, and the exact steps from here to active campaigns.

Ad account **1503896524973147** · Portfolio **1457794117413274** · Page **CyberBodha 1457789564080396** · Instagram **@cyberbodha95** · Pixel **29155674314074371** · WhatsApp **+91 90638 09271** · Repo **github.com/cyberbodha-bm/cyberbodha-website** · Updated 16 November 2026 — Ads Manager drafts fixed, site deployed

---

## 0. Status at a glance

| Area | State |
|---|---|
| Website | Live at cyberbodha.com — CEH v13 landing page deployed 16 Nov 2026 (Worker version `ade2ae76`) |
| SEO | Technical SEO complete: canonicals, unique titles/descriptions, Open Graph images, JSON-LD, sitemap, robots |
| Lead capture | Form → Cloudflare D1 table `leads`, consent required, Meta `Lead` event fired on delivery; WhatsApp button fires `Contact` |
| Campaign 1 — Warm-Up | Switched off — not part of the launch (kept, not deleted) |
| Campaign 2 — Leads (instant form) | Draft, ready — **₹250/day**, ad `CB / Leads / CEH v13 / Tracks detailed v2` with poster, launch-offer text and form "CEH v13 — Hyderabad — v1" |
| Campaign 3 — Retarget | Switched off until the warm audience reaches ~2,000 |
| Campaign 4 — WhatsApp | Draft, ready — **₹350/day**, new ad `CB / WA / CEH v13 / DM details v2` with poster, copy and chat template; old ad switched off |
| Payment method | **Missing** — blocks all publishing |
| Business verification | **Unverified** — needed for WhatsApp display name and full ad review |

**The launch runs two campaigns at ₹600/day: WhatsApp ₹350 and instant form ₹250.** Warm-Up, Retarget and the stray Enquiries draft are switched off, not deleted. Section 4 explains each; the click-by-click setup is `docs/META_CAMPAIGN_SETUP_CEH.md`.

---

**Built on 16 Nov 2026 (drafts):**

- WhatsApp ad `CB / WA / CEH v13 / DM details v2`: poster `ceh-v13-dm-details-v2.jpg`, launch-offer primary text, headline "CEH v13 + Exam Voucher · ₹45,000 Launch Offer", button Send WhatsApp message, chat template "CB CEH v13 WA chat - Nov 2026" (welcome message with fees and the voucher; pre-filled "Hi CyberBodha, I'd like the CEH v13 fees and next batch date."). This welcome message replaces the WhatsApp Business app greeting for chats started from the ad.
- Leads ad `CB / Leads / CEH v13 / Tracks detailed v2`: poster `ceh-v13-tracks-detailed-v2.jpg`, launch-offer text, headline as above, button Apply now, form "CEH v13 — Hyderabad — v1" (greeting, 3 multiple-choice questions, email/name/phone, privacy URL, Meta's SMS verification and contact confirmation allowed, ending button Chat on WhatsApp).
- All Advantage+ creative enhancements (music, overlays, text rewrites, touch-ups, animation) are off on both ads; AI-generated images not used.
- `ceh-v13-tracks-comparison-v2.jpg` is uploaded but not used yet: this ad type takes one image. Run it later as a second Leads ad to compare.
- Left for the client: payment method, then **Review and publish** with only campaigns 2 and 4 on.

## 1. The website

Stack: TanStack Start (React 19) with a Nitro server build, deployed as a Cloudflare Worker with static assets. Leads are written to Cloudflare D1 through a server function; the browser never sees a credential.

### Pages that matter for the campaign

| URL | Purpose |
|---|---|
| `/programs/ethical-hacking` | **Primary campaign landing page.** Headline "CEH v13 Ethical Hacking Training", 60 hours, two tracks, fees, enquiry form and a Chat on WhatsApp button |
| `/courses/ceh-v13-ai-ethical-hacking` | Detailed CEH v13 curriculum, 20 modules |
| `/contact` | Full enquiry form with consent checkbox |
| `/privacy` | DPDP-aligned privacy policy, linked from every form and the footer |
| `/programs` | Programme index — the internal-linking hub |

### What the landing page now says

- **CEH v13 Ethical Hacking Training** — 60 hours, live instructor-led, Hyderabad
- **Training only — ₹20,000**
- **Training + certification — ₹45,000** (CEH v13 exam voucher included)
- Cyber range labs — **₹6,000**, 6 months validity
- Footnote: the ₹45,000 track includes the CEH v13 exam voucher; EC-Council's exam terms apply; GST where applicable
- **Chat on WhatsApp** button with a pre-filled message naming the programme; each click fires the Meta Pixel `Contact` event, GA4 `contact` and GTM `whatsapp_click`

The page carries the prices so the creative does not have to. Prices in ads go stale; a page can be edited in a minute.

### Removed from public navigation

- **Portal Login** — gone from the desktop header and the mobile drawer
- **Learner Workspace** — gone from the footer

The `/student`, `/instructor` and `/admin` routes still exist but are marked `Disallow` in robots.txt and are no longer linked from the public site. The home page still has a "Role-Based Learning Workspaces" section linking to those portals — remove that block if the portals should be invisible entirely.

---

## 2. SEO — what is complete

| Check | State |
|---|---|
| Canonical URL on every public page | Yes — home, about, contact, programs, programme pages, courses, course pages, reviews |
| Unique `<title>` per page | Yes |
| Unique meta description per page | Yes |
| Open Graph `og:title`, `og:description`, `og:type` | Yes |
| `og:url` per page | Yes |
| `og:image` — branded 1200 × 630 | Yes, `/og/cyberbodha-og.png` site-wide |
| `og:image` — campaign-specific | Yes, `/og/ceh-v13-og.png` on the ethical-hacking page |
| Twitter card | Yes, `summary_large_image` |
| JSON-LD `EducationalOrganization` + `WebSite` | Yes, site-wide |
| JSON-LD `Course` + `Offer` with ₹20,000 / ₹45,000 | Yes, on the ethical-hacking page |
| `sitemap.xml` | 22 URLs; landing page priority 0.9, weekly |
| `robots.txt` | Allows public pages, blocks admin/student/instructor |
| Facebook domain verification meta tag | Yes |
| Mobile viewport, theme colour, favicons | Yes |

### What is not done, and needs a human

- **Google Search Console / Bing Webmaster**: submit `https://cyberbodha.com/sitemap.xml` and request indexing for the landing page. This requires account access.
- **Google Business Profile**: the strongest local signal for "cyber security course Hyderabad". The organisation schema already declares the Hyderabad address.
- **Content**: no blog posts target the commercial phrases people actually search ("CEH training Hyderabad fees", "ethical hacking course with placement"). Ads fill that gap at a price; organic does not.
- **Backlinks**: none. A single listing on a training directory is worth more than any further on-page work.

---

## 3. Git and deployment

| Item | Value |
|---|---|
| Repository | `github.com/cyberbodha-bm/cyberbodha-website` (private) |
| Branch | `main` — the only long-lived branch |
| Site release | `20c6585` — CEH v13 landing page, WhatsApp button, campaign docs (deployed 16 Nov 2026) |
| Deploy target | Cloudflare Worker `cyberbodha-learning-academy` |
| Build | `bun run build` → `.output/` (Nitro generates `.output/server/wrangler.json`) |
| CI | GitHub Actions "Validate, Build & Deploy" — lint, typecheck, tests, build, deploy |
| Database | D1 `cyberbodha-leads` (`cdc8072f-4b1c-40da-b809-e907c55bf2cd`), table `leads` |
| Secrets | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` in repo secrets |

### Rules of the road

1. **Never force-push or rebase `main`.** The repo is connected to Lovable, which pushes directly. Merge remote changes instead: `git pull --no-rebase`.
2. **Rebuild before deploying** after touching `wrangler.jsonc`. Adding a binding without a rebuild deploys a stale config and the binding silently does not exist.
3. **Deploy from the merged build**, not from a half-finished branch.
4. If CI fails at deploy but the build job passes, the token scopes are the cause; a local `npx wrangler@4 deploy` works and is the fallback.
5. **Campaign documents are generated.** Edit the `.md` in `docs/`, then run the builders in `docs/builders/`; never hand-edit a DOCX.

### Manual deploy

```bash
cd /d/CB
git pull --no-rebase
bun run build
npx wrangler@4 deploy
```

Then confirm: the Worker version ID changes, and the live site serves the new build.

### Campaign creative assets live in git

All Meta creative goes in `marketing/campaigns/<programme>/` and is tracked in `marketing/campaigns/manifest.md`, which records the file, ratio, campaign, ad ID and status. The folder README defines naming (`ceh-v13-dm-details.jpg`), sizes (1080 × 1350 for feed) and the rule that a re-cut gets `-v2` rather than overwriting.

This exists because Meta's Media library keeps bytes but not history. Six months from now, when nobody remembers which poster ran, the repo answers it.

**Current state: all five posters are committed** in `marketing/campaigns/ceh-v13/` (commit `1dbc596`), and the manifest maps each one to its ad. A re-cut poster gets a `-v2` suffix and its own commit:

```bash
git add marketing/campaigns/ceh-v13
git commit -m "assets(ceh-v13): add <poster>-v2 for <campaign>"
git push origin main
```

---

## 4. The four campaigns

### 4.1 Summary

| # | Campaign | Objective | Conversion | Destination | Status |
|---|---|---|---|---|---|
| 1 | `CB / Warm-Up / Page + Video` | Awareness | Page visits | Facebook Page | Switched off |
| 2 | `CB / Leads / CEH v13 / Instant Form` | Leads | Instant form | Meta form | Draft — ₹250/day |
| 3 | `CB / Retarget / Engaged 30d` | Leads | Instant form | Meta form | Switched off |
| 4 | `CB / WhatsApp / CEH v13 Inbound` | Engagement | Messaging | WhatsApp chat | Draft — ₹350/day |

**Launch decision (16 Nov 2026): only campaigns 2 and 4 run, at ₹600/day in total.** The warm-up buys low-intent Page visits, and retargeting waits for about 2,000 warm people.

All four stay in the account: the warm-up and retarget campaigns are the scale-up path once the launch numbers justify them.

### 4.2 Campaign 1 — Warm-Up (page visits)

| Field | Value |
|---|---|
| Objective | Awareness / Traffic — maximise Page visits |
| Ad set | `120248978329810772` |
| Budget | **Off — ₹0** for the test period (was ₹100/day) |
| Audience | Hyderabad +25 km, broad, Advantage+ audience **off** |
| Creative | `ceh-v13-tracks-light.jpg`, re-exported at 4:5, when switched on |
| Purpose | Cheap impressions that build an engaged audience for campaign 3 |
| Step-by-step | Not used at launch. When switched on: upload the poster, choose it in the ad, confirm the Page destination, publish. |

### 4.3 Campaign 2 — Leads (instant form)

| Field | Value |
|---|---|
| Objective | Leads, conversion location **Instant forms** |
| Campaign | `120248978478060772` — renamed `CB / Leads / CEH v13 / Instant Form` |
| Ad set | `120248978478070772` — `CB / Leads / HYD 25km / 21-40 / CEH` |
| Budget | **₹250/day** at campaign level (applied 16 Nov 2026) |
| Audience | Hyderabad +25 km, age **21–40 hard limit**, manual audience; Computer security, Information security, Network security; Facebook + Instagram only (applied) |
| Form | New **Higher-intent** form "CEH v13 — Hyderabad — v1" (to build) |
| Status detail | Lead Ads Terms error #1815089 **cleared** 16 Nov 2026 |
| Step-by-step | 1. Upload `ceh-v13-tracks-detailed-v2` and `ceh-v13-tracks-comparison-v2`. 2. Build the Higher-intent form with privacy URL `https://cyberbodha.com/privacy`. 3. Add three questions: track, background, start month. 4. Add the launch-offer text, then publish with campaign 4. |

Form fields: name, phone, email, plus the three multiple-choice questions. Every extra typed field costs completions.

### 4.4 Campaign 3 — Retarget (off on purpose)

| Field | Value |
|---|---|
| Objective | Leads, instant form |
| Campaign | `120248978633380772` |
| Budget | **Off — ₹0.** ₹100–150/day when switched on, funded from the weaker launch campaign |
| Audience | Instant-form openers and WhatsApp chatters (90 days), landing-page visitors and WhatsApp-button clicks (30 days) |
| Gate | Do not enable until that audience reaches ~2,000 — below that, frequency climbs and cost per lead doubles |

### 4.5 Campaign 4 — WhatsApp (ad set done, ad to recreate)

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Inbound` | `120249035703480772` |
| Ad set `CB / WA / HYD 25km / 21-40 / CEH` | `120249035703460772` |
| Ad `CB / WA / CEH v13 / DM details` (Page selector locked — recreate) | `120249035703470772` |

**Already configured:** objective Engagement (manual setup), ad-set budget mode, conversion location *Message destinations*, destinations *manual — WhatsApp only*, number +91 90638 09271, performance goal *maximise number of conversations*.

**Applied on 16 Nov 2026, and what the ad still needs:**

| Field | Value |
|---|---|
| Daily budget | **₹350** (applied) |
| Locations | Hyderabad +25 km, "reach more people" off (applied; was all of India) |
| Age / gender | 21–40 hard limit, all genders, unknown-age WhatsApp users excluded (applied) |
| Advantage+ audience | Off — manual audience; Computer security, Information security, Network security (applied) |
| Placements | Facebook + Instagram feeds, Explore, Stories/Reels only; no Audience Network, WhatsApp Status or Threads (applied) |
| Media | `ceh-v13-dm-details-v2.jpg` (voucher footnote fixed), 4:5 |
| Primary text | Launch-offer copy in section 5. A new ad is needed: Meta locked the old ad's Page selector (#1443121) |

**Leave this one alone:** campaign `CB / WhatsApp / CEH v13 Enquiries` (`120249035559060772`) was built under the Leads objective, where the conversion location is locked to Instant forms, so it can never become a WhatsApp campaign. It is switched off; keep it unpublished as a record of the attempt — do not delete it, and do not confuse it with campaign 4.

**Why Engagement and not Leads:** in this account the Leads objective will not allow *Messaging apps* as a conversion location. Engagement is the supported path, and it bills per conversation.

---

### 4.6 Budget allocation — ₹600 per day

A ₹600 daily budget does not stretch across four campaigns. Meta's minimum is about ₹100 per ad set, and an ad set needs roughly 50 optimisation events a week to leave the learning phase. Four ad sets at ₹150 each produce about three results a week each — never enough to learn, and the learning-phase premium is paid on every one.

So the money goes to two campaigns, as configured in Ads Manager on 16 Nov 2026. An earlier draft of this plan put ₹350 on Leads; WhatsApp gets the larger share because click-to-chat is usually the cheaper qualified contact for Hyderabad lead generation.

| Campaign | Daily budget | Status | Role |
|---|---|---|---|
| `CB / WhatsApp / CEH v13 Inbound` | **₹350** | Active on go-live | Cheapest qualified conversation — buyers who will not fill a form |
| `CB / Leads / CEH v13 / Instant Form` | **₹250** | Active on go-live | Structured enquiries: track, background, start month |
| `CB / Warm-Up / Page + Video` | **₹0 — off** | Off | Not needed while two ads are already generating engagement |
| `CB / Retarget / Engaged 30d` | **₹0 — off** | Off | Switches on at ~2,000 warm people, then: WhatsApp ₹250 · Leads ₹250 · Retarget ₹100 |
| `CB / WhatsApp / CEH v13 Enquiries` (stray draft) | **₹0** | Never enable | Dead-end draft under the wrong objective. Keep it, do not delete it |

**Do not delete any campaign.** The warm-up and retarget campaigns are off, not removed — they are the scale-up path once the numbers justify them. The stray draft stays as a record of a failed attempt; deleting it would also destroy the audit trail of why the Leads objective cannot host a WhatsApp ad.

**Week 2:** move ₹100/day towards the campaign with the lower cost per qualified lead. Change budgets at most once every 3 days.

### What ₹600/day actually costs

| Line | Amount |
|---|---|
| Meta ad spend | ₹600/day · ₹18,000/month |
| **+ 18% GST** (Meta bills Indian advertisers) | **₹708/day · ₹21,240/month** |
| Planning range: WhatsApp conversations at ₹100–250 each | ~40–100 per month at ₹350/day, roughly a third becoming real enquiries |
| Planning range: instant-form leads at ₹250–450 each | ~17–30 per month at ₹250/day |

A daily budget may bill up to 25% over on a single day (₹750), never more than 7× daily in a week. If cash flow matters more than flexibility, use a 7-day lifetime budget for the first test instead of daily.

## 5. WhatsApp ad copy and reply flow

### Primary text

> **CEH v13 launch offer — Hyderabad**
>
> • Training + Certification: ₹45,000, includes the CEH v13 exam voucher, exam prep and practice tests
> • Training only: ₹20,000, the full 60-hour course
>
> 60 hours, live and instructor-led, with hands-on labs in authorised environments.
>
> DM "CEH" for the next batch date and the seats left.

Headline: `CEH v13 + Exam Voucher · ₹45,000 Launch Offer`. Description: `Reply "CEH" for batch dates and lab access.`

Pre-filled first message: "Hi CyberBodha, I'd like the CEH v13 fees and next batch date." Quick-reply buttons: *Training + Certification* and *Training only*.

The prices are launch offers. Keep them in the ad text, never on the artwork, so they can change without a new poster.

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

### Quick replies

| Shortcut | Text |
|---|---|
| `/fees` | Fees: training only ₹20,000 · training + certification ₹45,000 including the CEH v13 exam voucher · labs ₹6,000 for 6 months. GST extra where applicable. |
| `/batch` | Next batches: weekend (Sat–Sun) and weekday evening. Share your preferred timing and I'll block a seat. |
| `/syllabus` | 20 CEH v13 modules — reconnaissance → scanning → exploitation → post-exploitation → reporting. Full list: cyberbodha.com/programs/ethical-hacking |
| `/cert` | The ₹45,000 track includes the CEH v13 exam voucher. We handle registration, exam prep and practice tests; EC-Council's exam terms apply. |

Reply within **5 minutes**, 9am–9pm IST. A conversation nobody answers is a paid impression that produced nothing.

---

## 6. Campaign images — the five posters

| # | Creative | File | Use | Note |
|---|---|---|---|---|
| 1 | Tracks detailed — With Certification OR Training Only | `ceh-v13-tracks-detailed.jpg` | **Leads — image 1** | Re-export at 1080 × 1350 |
| 2 | "DM 'CEH' for details", 60 hours live | `ceh-v13-dm-details.jpg` | **WhatsApp** | Fix the footnote: the voucher is included in the certification track |
| 3 | Certified Ethical Hacker, practice icons | `ceh-v13-tracks-comparison.jpg` | **Leads — image 2** | Re-export at 1080 × 1350 |
| 4 | Light/white minimal | `ceh-v13-tracks-light.jpg` | Retarget, later | Not used at launch |
| 5 | Red/cyan circular-emblem brand poster | `ceh-v13-brand-poster-legacy.jpg` | **Do not run** | Different logo and palette — looks like another business next to 1–4 |

All five are committed in `marketing/campaigns/ceh-v13/`. Re-exports get a `-v2` suffix; upload at **1080 × 1350** (4:5), under 8 MB.

---

## 7. Go-live runbook — payment to active

Do these in order. Items 1–3 are the hard blockers.

| # | Step | Where | Why it blocks |
|---|---|---|---|
| 1 | Add a payment method | Business settings → Billing & payments | Nothing publishes or spends without it |
| 2 | Start business verification | Business settings → Business info → Start verification | Needed for the WhatsApp display name and smooth ad review |
| 3 | Upload the posters | Ads Manager → Assets → Media library | Every ad errors "Please specify the media" |
| 4 | Confirm the stray WhatsApp draft stays off | Campaigns → `120249035559060772` | Keep it, unpublish it — never enable it |
| 5 | Recreate the WhatsApp ad | Ad set is done (₹350, audience, placements); new ad needs Page, poster and copy | The old ad's Page selector is locked |
| 6 | Finish the Leads ad and form; publish campaigns 2 and 4 | Ads Manager | Only these two run at launch; the publish list must show nothing else |
| 7 | Set the WhatsApp greeting and four quick replies | WhatsApp Business app | Without these the ad produces silence |
| 8 | Assign chat duty, with an evening backup | — | Unanswered conversations waste the budget |
| 9 | Leave campaigns 1 and 3 off | — | ₹600/day covers two campaigns; the retarget audience is not large enough yet |
| 10 | Verify after 24 hours | Ads Manager + WhatsApp | Check delivery, spend, first conversations, form leads in Leads Center, and that the website form still writes to D1 |

### The India securities declaration

Ads Manager asks for a declaration for financial-products advertising on some accounts. CyberBodha sells education, not securities — if the prompt appears, it is a misclassification. Leave the "includes ads related to securities and investments" box unticked; confirm with Meta support rather than ticking a declaration that does not apply.

---

## 8. Measurement

| Layer | Where | What to watch |
|---|---|---|
| Delivery | Ads Manager | Spend, CPM, frequency (keep under 3 in 7 days) |
| Response | Ads Manager | Cost per conversation (WhatsApp), cost per lead (forms) |
| Capture | Cloudflare D1 `leads` | Row count and completeness — `npx wrangler@4 d1 execute cyberbodha-leads --remote --command "SELECT COUNT(*) FROM leads"` |
| Quality | WhatsApp / phone | How many gave a batch date and fee track after two messages |

Rules of thumb: a WhatsApp conversation is not a lead until someone names a batch. A form lead is not a lead until they answer the callback. Judge creative on 7 days and at least 20 results, never on 2 days. The number that decides budget moves is **cost per qualified lead**: spend ÷ leads that named a track, gave a start month and answered.

---

## 9. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `#1815089` Lead Ads Terms | Page had not accepted the terms | Cleared 16 Nov 2026 by re-selecting the Page in the ad set |
| `#1443121` Ad must be associated with a Page | Page selector locked on a duplicated ad | Create a new ad in the same ad set and pick the Page there |
| `#1815199` Instagram account | IG `cyberbodha95` not fully linked to the ad account | Reconnect in Business settings → Instagram accounts |
| "Please specify the media" | No creative selected | Upload the poster, then pick it in the ad |
| WhatsApp destination greyed out | Campaign built under Leads | Rebuild under Engagement (campaign 4 pattern) |
| Ad set edits do not stick | Draft edits pending | Use "Review and publish" in Ads Manager |
| Deploy job fails, build passes | Missing/expired `CLOUDFLARE_API_TOKEN` | Rotate the token, or deploy locally with wrangler |
| Site shows old content after deploy | Deployed before rebuilding | `bun run build` then deploy |

---

## Appendix — identifiers

| Asset | ID |
|---|---|
| Ad account | 1503896524973147 |
| Business portfolio | 1457794117413274 |
| Facebook Page | 1457789564080396 |
| Instagram | cyberbodha95 |
| Meta Pixel | 29155674314074371 |
| Verified domain asset | 1825908938659913 |
| WhatsApp business account | 1373813987705146 |
| D1 database | cyberbodha-leads / cdc8072f-4b1c-40da-b809-e907c55bf2cd |
| Cloudflare Worker | cyberbodha-learning-academy |
| GitHub repo | cyberbodha-bm/cyberbodha-website |

Never touch ad account **1503464850217294** — different business.
