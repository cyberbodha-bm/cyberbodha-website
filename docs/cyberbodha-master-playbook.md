# CyberBodha — Website, Meta Campaigns & Git Playbook

The complete operating document: what is live, what is built, what is blocked, and the exact steps from here to active campaigns.

Ad account **1503896524973147** · Portfolio **1457794117413274** · Page **CyberBodha 1457789564080396** · Instagram **@cyberbodha95** · Pixel **29155674314074371** · WhatsApp **+91 90638 09271** · Repo **github.com/cyberbodha-bm/cyberbodha-website** · Prepared 16 November 2026

---

## 0. Status at a glance

| Area | State |
|---|---|
| Website | Live at cyberbodha.com, deployed to Cloudflare Workers |
| SEO | Technical SEO complete: canonicals, unique titles/descriptions, Open Graph images, JSON-LD, sitemap, robots |
| Lead capture | Form → Cloudflare D1 table `leads`, consent required, Meta `Lead` event fired on delivery |
| Campaign 1 — Warm-Up | In draft, media missing |
| Campaign 2 — Leads (instant form) | In draft, media missing; Lead Ads Terms now accepted |
| Campaign 3 — Retarget | Intentionally paused until the audience reaches ~2,000 |
| Campaign 4 — WhatsApp | Built to ad-set level; needs budget, audience, media, copy |
| Payment method | **Missing** — blocks all publishing |
| Business verification | **Unverified** — needed for WhatsApp display name and full ad review |

**Only one of the four campaigns is WhatsApp.** The other three are a page-visit warm-up and two instant-form lead campaigns. Section 4 explains each.

---

## 1. The website

Stack: TanStack Start (React 19) with a Nitro server build, deployed as a Cloudflare Worker with static assets. Leads are written to Cloudflare D1 through a server function; the browser never sees a credential.

### Pages that matter for the campaign

| URL | Purpose |
|---|---|
| `/programs/ethical-hacking` | **Primary campaign landing page.** 60 hours, two tracks, fees, enquiry CTA |
| `/courses/ceh-v13-ai-ethical-hacking` | Detailed CEH v13 curriculum, 20 modules |
| `/contact` | Full enquiry form with consent checkbox |
| `/privacy` | DPDP-aligned privacy policy, linked from every form and the footer |
| `/programs` | Programme index — the internal-linking hub |

### What the landing page now says

- **60 hours**, live instructor-led
- **Training only — ₹20,000**
- **Training + certification — ₹45,000**
- Cyber range labs — **₹6,000**, 6 months validity
- Footnote: certification exam voucher follows the vendor's separate terms; GST where applicable

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
| Latest merge | `f5991ca` — merged the client's 10-commit CEH curriculum branch |
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

### Manual deploy

```bash
cd /d/CB
git pull --no-rebase
bun run build
npx wrangler@4 deploy
```

Then confirm: the Worker version ID changes, and the live site serves the new build.

### Campaign creative assets live in git

All Meta creative goes in `marketing/campaigns/<programme>/` and is tracked in `marketing/campaigns/manifest.md`, which records the file, ratio, campaign, ad ID and status. The folder README defines naming (`ceh-v13-dm-details.png`), sizes (1080 × 1350 for feed) and the rule that a re-cut gets `-v2` rather than overwriting.

This exists because Meta's Media library keeps bytes but not history. Six months from now, when nobody remembers which poster ran, the repo answers it.

**Current state: no creative is committed yet.** The five posters exist only as chat attachments. Save them into `marketing/campaigns/ceh-v13/` with the names in the manifest, then commit:

```bash
git add marketing/campaigns/ceh-v13
git commit -m "assets(ceh-v13): add five campaign posters"
git push origin main
```

---

## 4. The four campaigns

### 4.1 Summary

| # | Campaign | Objective | Conversion | Destination | Status |
|---|---|---|---|---|---|
| 1 | `CB / Warm-Up / Page + Video` | Awareness | Page visits | Facebook Page | In draft |
| 2 | `CB / Leads / Career Aspirants HYD` | Leads | Instant form | Meta form | In draft |
| 3 | `CB / Retarget / Engaged 30d` | Leads | Instant form | Meta form | Deliberately paused |
| 4 | `CB / WhatsApp / CEH v13 Inbound` | Engagement | Messaging | WhatsApp chat | In draft |

**Answering the question directly: no, they are not all WhatsApp.** One is WhatsApp (campaign 4). Two are instant forms. One is a page-visit warm-up that exists to build the retargeting audience.

Why keep all four: they hit different intent levels. The warm-up fills the audience cheaply, the instant form collects structured data at scale, the WhatsApp ad converts people who will not fill forms, and retargeting closes the ones who looked twice.

### 4.2 Campaign 1 — Warm-Up (page visits)

| Field | Value |
|---|---|
| Objective | Awareness / Traffic — maximise Page visits |
| Ad set | `120248978329810772` |
| Budget | **Paused — ₹0** for the test period (was ₹100/day) |
| Audience | Hyderabad +25 km, broad, Advantage+ audience **off** |
| Creative | Poster 1 as a single image |
| Purpose | Cheap impressions that build the 30-day engaged audience for campaign 3 |
| Step-by-step | 1. Upload poster to Media library. 2. Open the ad, choose the poster. 3. Confirm Page is the destination. 4. Publish. |

### 4.3 Campaign 2 — Leads (instant form)

| Field | Value |
|---|---|
| Objective | Leads, conversion location **Instant forms** |
| Campaign | `120248978478060772` |
| Budget | **₹350/day** — the volume engine |
| Audience | Hyderabad +25 km, 18–45, Advantage+ audience **off** |
| Form | Meta instant form pre-filled from the website |
| Status detail | Lead Ads Terms are now **accepted** for the Page, clearing error #1815089 |
| Step-by-step | 1. Upload the poster. 2. Open the form and set the privacy-policy URL to `https://cyberbodha.com/privacy`. 3. Add a qualifying question ("When do you want to start?"). 4. Publish. |

Form fields to keep: name, phone, email, preferred batch. Every extra field costs completions.

### 4.4 Campaign 3 — Retarget (paused on purpose)

| Field | Value |
|---|---|
| Objective | Leads, instant form |
| Campaign | `120248978633380772` |
| Budget | **Paused — ₹0.** ₹100/day when switched on, funded by dropping Leads to ₹250 |
| Audience | People who engaged with the Page or watched 50% of a video in 30 days |
| Gate | Do not enable until that audience reaches ~2,000 — below that, frequency climbs and cost per lead doubles |

### 4.5 Campaign 4 — WhatsApp (built, unfinished)

| Object | ID |
|---|---|
| Campaign `CB / WhatsApp / CEH v13 Inbound` | `120249035703480772` |
| Ad set `CB / WA / HYD +25km / 18-45` | `120249035703460772` |
| Ad `CB / WA / CEH v13 / Poster A` | `120249035703470772` |

**Already configured:** objective Engagement (manual setup), ad-set budget mode, conversion location *Message destinations*, destinations *manual — WhatsApp only*, number +91 90638 09271, performance goal *maximise number of conversations*.

**Still to do:**

| Field | Value |
|---|---|
| Daily budget | **₹250** |
| Locations | India → Hyderabad +25 km |
| Age / gender | 18–45, all |
| Advantage+ audience | Off |
| Placements | Advantage+ on |
| Media | Poster 2 ("DM 'CEH'") at 1080 × 1350 |
| Primary text | The "DM CEH" copy in section 5 |

**Leave this one alone:** campaign `CB / WhatsApp / CEH v13 Enquiries` (`120249035559060772`) was built under the Leads objective, where the conversion location is locked to Instant forms, so it can never become a WhatsApp campaign. Keep it paused and unpublished as a record of the attempt — do not delete it, and do not confuse it with campaign 4.

**Why Engagement and not Leads:** in this account the Leads objective will not allow *Messaging apps* as a conversion location. Engagement is the supported path, and it bills per conversation.

---

### 4.6 Budget allocation — ₹600 per day

A ₹600 daily budget does not stretch across four campaigns. Meta's minimum is about ₹100 per ad set, and an ad set needs roughly 50 optimisation events a week to leave the learning phase. Four ad sets at ₹150 each produce about three results a week each — never enough to learn, and the learning-phase premium is paid on every one.

So the money goes to two campaigns:

| Campaign | Daily budget | Status | Role |
|---|---|---|---|
| `CB / Leads / Career Aspirants HYD` | **₹350** | Active on go-live | Volume engine — cheapest structured enquiries |
| `CB / WhatsApp / CEH v13 Inbound` | **₹250** | Active on go-live | Highest intent — buyers who will not fill a form |
| `CB / Warm-Up / Page + Video` | **₹0 — paused** | Paused | Not needed while two ads are already generating engagement |
| `CB / Retarget / Engaged 30d` | **₹0 — paused** | Paused | Switches on at ~2,000 engaged, then: Leads ₹250 · WhatsApp ₹250 · Retarget ₹100 |
| `CB / WhatsApp / CEH v13 Enquiries` (stray draft) | **₹0** | Never enable | Dead-end draft under the wrong objective. Keep it, do not delete it |

**Do not delete any campaign.** The warm-up and retarget campaigns are paused, not removed — they are the scale-up path once the numbers justify them. The stray draft stays as a record of a failed attempt; deleting it would also destroy the audit trail of why the Leads objective cannot host a WhatsApp ad.

### What ₹600/day actually costs

| Line | Amount |
|---|---|
| Meta ad spend | ₹600/day · ₹18,000/month |
| **+ 18% GST** (Meta bills Indian advertisers) | **₹708/day · ₹21,240/month** |
| Planning range: instant-form leads at ₹250–450 each | ~40–70 per month |
| Planning range: WhatsApp conversations at ₹100–250 each | ~30–60 per month, roughly a third becoming real enquiries |

A daily budget may bill up to 25% over on a single day (₹750), never more than 7× daily in a week. If cash flow matters more than flexibility, use a 7-day lifetime budget for the first test instead of daily.

## 5. WhatsApp ad copy and reply flow

### Primary text

> **DM "CEH" to get the full details.**
>
> We run the complete CEH v13 programme — 60 hours, live instructor-led, with hands-on labs on real attack and defence scenarios.
>
> Two ways to join:
> • Training only — build the skills
> • Training + certification — full CEH v13 pathway with exam prep and practice tests
>
> Batches run from Hyderabad. Message us and we'll send fees, the next start date and lab access details.

Headline: `CEH v13 · 60 Hours · Hyderabad`. Description: `Reply "CEH" for fees, batch dates and lab access.`

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

### Quick replies

| Shortcut | Text |
|---|---|
| `/fees` | Fees: training only ₹20,000 · training + certification ₹45,000 · labs ₹6,000 for 6 months. GST extra where applicable. |
| `/batch` | Next batches: weekend (Sat–Sun) and weekday evening. Share your preferred timing and I'll block a seat. |
| `/syllabus` | 20 CEH v13 modules — reconnaissance → scanning → exploitation → post-exploitation → reporting. Full list: cyberbodha.com/programs/ethical-hacking |
| `/cert` | Certification fee is separate from training and follows EC-Council's terms. We handle registration support and exam prep. |

Reply within **5 minutes**, 9am–9pm IST. A conversation nobody answers is a paid impression that produced nothing.

---

## 6. Campaign images — the five posters

| # | Creative | Use | Note |
|---|---|---|---|
| 1 | Tracks comparison, 60 hours | Warm-up, Leads | Cleanest message; start here |
| 2 | Tracks + "DM 'CEH' for details" | **WhatsApp** | The only one that matches a DM call to action |
| 3 | Training-only, with certificate footnote | Leads | Filters for budget |
| 4 | With-certification, with footnote | Leads, Retarget | Higher-value audience |
| 5 | Red/cyan circular-emblem brand poster | **Do not run** | Different logo and palette — looks like another business next to 1–4 |

Upload at **1080 × 1350** (4:5), under 8 MB, and commit the same files to `marketing/campaigns/ceh-v13/`.

---

## 7. Go-live runbook — payment to active

Do these in order. Items 1–3 are the hard blockers.

| # | Step | Where | Why it blocks |
|---|---|---|---|
| 1 | Add a payment method | Business settings → Billing & payments | Nothing publishes or spends without it |
| 2 | Start business verification | Business settings → Business info → Start verification | Needed for the WhatsApp display name and smooth ad review |
| 3 | Upload the posters | Ads Manager → Assets → Media library | Every ad errors "Please specify the media" |
| 4 | Confirm the stray WhatsApp draft stays paused | Campaigns → `120249035559060772` | Keep it, unpublish it — never enable it |
| 5 | Finish campaign 4 | Budget ₹250, audience, placements, media, copy | Half-built ad set cannot publish |
| 6 | Publish campaign 1 and 2 | Ads Manager | Both are otherwise ready |
| 7 | Set the WhatsApp greeting and four quick replies | WhatsApp Business app | Without these the ad produces silence |
| 8 | Assign chat duty, with an evening backup | — | Unanswered conversations waste the budget |
| 9 | Leave campaign 3 paused | — | Audience is not large enough yet |
| 10 | Verify after 24 hours | Ads Manager + WhatsApp | Check delivery, spend, first conversations, and that the form still writes to D1 |

### The India securities declaration

Ads Manager asks for a declaration for financial-products advertising on some accounts. CyberBodha sells education, not securities — if the prompt appears, it is a misclassification. Confirm it with Meta support rather than ticking a declaration that does not apply.

---

## 8. Measurement

| Layer | Where | What to watch |
|---|---|---|
| Delivery | Ads Manager | Spend, CPM, frequency (keep under 3 in 7 days) |
| Response | Ads Manager | Cost per conversation (WhatsApp), cost per lead (forms) |
| Capture | Cloudflare D1 `leads` | Row count and completeness — `npx wrangler@4 d1 execute cyberbodha-leads --remote --command "SELECT COUNT(*) FROM leads"` |
| Quality | WhatsApp / phone | How many gave a batch date and fee track after two messages |

Rules of thumb: a WhatsApp conversation is not a lead until someone names a batch. A form lead is not a lead until they answer the callback. Judge creative on 7 days and at least 20 results, never on 2 days.

---

## 9. Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `#1815089` Lead Ads Terms | Page had not accepted the terms | Now accepted — reopen the ad set and publish |
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
