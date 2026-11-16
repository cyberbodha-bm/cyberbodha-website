# CEH v13 Meta Campaign Review

Review of the base setup described in `docs/cyberbodha-master-playbook.docx` (16 Nov 2026) and of the
landing page `https://cyberbodha.com/programs/ethical-hacking`, with the goal of buying **CEH leads
who pay**, weighted towards the Training + Certification track.

Update 16 Nov 2026: the Ads Manager drafts were inspected after sign-in. What they actually contain,
and the click-by-click fix, is in `docs/META_CAMPAIGN_SETUP_CEH.md` section 0.

## 1. Verdict

The plumbing is sound (Pixel, D1 lead store, consent, privacy URL, Lead Ads Terms accepted, WhatsApp
campaign built under Engagement). The **targeting and budget split are not built for CEH buyers**:
four campaigns share ₹550/day, every audience is "Hyderabad +25 km, 18–45, broad, Advantage+ off",
and nothing in the setup tells Meta the buyer is an IT person who wants a certification. That set-up
buys cheap, mostly unqualified contacts.

## 2. Blocking questions for the client (answer before spending)

| #   | Question                                                                            | Why it matters                                                                                                                                                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Q1  | Is CyberBodha an **EC-Council Accredited Training Center** (or partnered with one)? | The site says "Official EC-Council CEH v13 aligned". Only an ATC can sell the exam voucher with training and waive the 2-year-experience eligibility application. Without it, "CEH" in ads is a trademark and policy risk, and the ₹45,000 track cannot honestly promise certification. |
| Q2  | ~~Does ₹45,000 include the exam voucher?~~ **Answered: yes.**                       | Site copy, manifest and the `/cert` quick reply now say so. Prices are launch offers (section 6a).                                                                                                                                                                                      |
| Q3  | Classroom in Hyderabad, live online, or both?                                       | Decides whether the audience stays at Hyderabad +25 km or can include Bengaluru, Chennai, Pune and the rest of India, which cuts cost per lead.                                                                                                                                         |
| Q4  | Next batch dates and timings?                                                       | "Fees and next batch" is what every lead asks first; the ad and greeting should be able to answer it.                                                                                                                                                                                   |
| Q5  | Gross margin per enrolment on each track?                                           | Sets the maximum affordable cost per lead (section 6).                                                                                                                                                                                                                                  |

## 3. Campaign structure — change

| Playbook                                                  | Change to                                                                                                                                                                     | Reason                                                                                                                                            |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 Warm-Up / Page visits ₹100                              | **Do not publish.**                                                                                                                                                           | Page-visit awareness on a new Page buys likes from people who will never pay ₹45,000, and the retargeting audience it builds is the weakest kind. |
| 2 Leads / instant form ₹100                               | **₹250/day**, Higher-intent form (below)                                                                                                                                      | ₹100/day yields too few leads per week to leave learning or to judge creative.                                                                    |
| 3 Retarget / Engaged 30d ₹150 (paused)                    | Keep paused; **rebuild the audience** from: opened or submitted the instant form (90d), messaged on WhatsApp (90d), website visitors `/programs/ethical-hacking` (30d, Pixel) | Engagers of a cold Page are not warm. Form openers, chatters and landing-page visitors are.                                                       |
| 4 WhatsApp / Engagement ₹200                              | **₹350/day**, same build                                                                                                                                                      | Click-to-WhatsApp is the cheapest qualified contact in Hyderabad education.                                                                       |
| Stray Leads-objective WhatsApp draft `120249035559060772` | Delete (as the playbook says)                                                                                                                                                 | —                                                                                                                                                 |

Total ₹600/day across two live campaigns (the client's launch budget: WhatsApp ₹350, form ₹250) instead of ₹550/day across four. Re-split after 7 days
and at least 20 results each, on **cost per qualified lead** (section 6), not on cost per result.

## 4. Audience for CEH buyers (both live campaigns)

- **Age 21–40.** Under-21s rarely pay ₹45,000 themselves; over-40 enquiries for CEH are rare.
- **Location:** Hyderabad +25 km for a classroom batch. If Q3 says live online, add Bengaluru,
  Chennai, Pune and Visakhapatnam as a separate ad set so their cost per lead is visible.
- **Detailed targeting (OR):** search each in Ads Manager and keep the ones that exist —
  Certified Ethical Hacker, EC-Council, Ethical hacking, Penetration test, Kali Linux,
  Computer security, Information security, Cybersecurity, Offensive Security, CompTIA Security+,
  Bug bounty program.
- **Narrow (AND) — optional second ad set to test:** Field of study Computer science / Information
  technology / Electronics, or Industry "IT and technical services".
- **Advantage+ audience:** run the interest set with Advantage+ audience **on** as _suggestions_
  once 30+ leads have come in; keep it off for the first week so the first leads are clean.
- **Do not target "already CEH certified".** Holders are not buyers of CEH training; they are
  buyers of the next course (VAPT). Target people who _want_ the certification.

## 5. Placements, form and WhatsApp details

- **Placements:** Facebook + Instagram Feeds, Stories and Reels only. Turn off **Audience
  Network** and **Messenger inbox** — Audience Network is where accidental form fills come from.
- **Instant form type: Higher intent** (adds a review screen).
  - Fields: full name, phone, email.
  - Q1 "Which track are you interested in?" — Training only / Training + CEH certification / Not sure yet.
  - Q2 "What best describes you?" — Student / Working in IT / Working in security / Other.
  - Q3 "When do you want to start?" — This month / In 1–3 months / Just exploring.
  - Privacy policy: `https://cyberbodha.com/privacy`. Thank-you screen button: WhatsApp
    `https://wa.me/919063809271` so the lead can chat immediately.
- **WhatsApp ad:** set the **pre-filled message** in the ad ("Hi, I'd like details of CEH v13
  training and certification") instead of relying on users typing "CEH".
- **Fix the `/cert` quick reply** once Q2 is answered so it matches the page.
- **Instant-form leads do not reach D1.** They stay in Meta Leads Center (download daily or connect
  a CRM). WhatsApp leads exist only on the business phone unless the WhatsApp Business app is
  connected to Meta Business Suite. The playbook's "check the form still writes to D1" step only
  covers the website form.

## 6. Profitability check

With assumed numbers (replace with the client's): if 1 in 15 qualified leads enrols on the ₹45,000
track and the margin after the voucher is ₹15,000, the break-even cost per **qualified** lead is
₹1,000. A qualified lead = answered "Training + CEH certification" or "Not sure" **and** "Working in
IT / security" or "This month / 1–3 months", **and** picked up the callback.

Track weekly: spend ÷ qualified leads, qualified leads ÷ all leads, enrolments by track. If the
qualified share is under 30%, tighten the audience before raising budget.

## 6a. Pricing

The client confirmed on 16 Nov 2026 that ₹20,000 / ₹45,000 (voucher included) / ₹6,000 labs are
**launch offers**, communicated as such in the ads and on WhatsApp. The ad text uses them as the
qualifying hook (`docs/META_CAMPAIGN_SETUP_CEH.md`, launch plan rule 1).

## 7. Creative and copy

- Lead with the outcome buyers search for: **"CEH v13 — exam voucher included, 60 hours, live,
  Hyderabad"**. The five posters supplied on 16 Nov are committed under
  `marketing/campaigns/ceh-v13/`. Which ad uses each one, and the fixes needed before upload
  (voucher footnote, 4:5 re-export, hooded figures), are listed in `marketing/campaigns/manifest.md`.
- No prices on artwork (playbook rule, correct). No pass guarantees, salaries or placement claims.
- Avoid hooded-hacker imagery and words like "hack anyone" — Meta reviews hacking-related ads
  strictly; "ethical", "authorised", "certification" read as education.
- Add one short (15–30 s) video of a real lab session: video viewers make a better retargeting
  audience than Page engagers.

## 8. Landing page — fixed in this change

| Issue                                                                                              | Fix                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fee note said the voucher follows "the vendor's separate terms", which reads as "voucher extra"    | Training + Certification now says it includes the CEH v13 exam voucher                                                                                       |
| H1 "Ethical Hacking & Offensive Security" never said CEH v13, while every ad does                  | Title is now "CEH v13 Ethical Hacking Training"; subtitle and overview name 60 hours, live, Hyderabad, both tracks                                           |
| Lab panel showed SOC wording ("Heterogeneous logs & Sysmon", "triage reviews") on the hacking page | Lab highlights are now per-programme data (`labHighlights` in `src/data/programs.ts`)                                                                        |
| No WhatsApp button, although WhatsApp is a campaign destination                                    | "Chat on WhatsApp" with a pre-filled programme message; fires Meta `Contact`, GA4 `contact`, GTM `whatsapp_click` (`trackContact` in `src/lib/analytics.ts`) |
| Audience list did not mention certification seekers                                                | Added "IT professionals and graduates preparing for the CEH v13 certification"                                                                               |

Still open on the page (needs client facts): next batch dates, trainer profile, an FAQ
(eligibility, exam format, what the ₹45,000 includes), and the "Official EC-Council" wording
pending Q1.
