import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Shield, MapPin, Phone } from "lucide-react";

import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
  absoluteUrl,
} from "@/lib/site";

const LAST_UPDATED = "12 November 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "How CyberBodha collects, uses, stores and protects personal information submitted through course enquiries, WhatsApp, Facebook and Instagram lead forms.",
      },
      { property: "og:title", content: `Privacy Policy | ${SITE_NAME}` },
      {
        property: "og:description",
        content:
          "How CyberBodha handles personal data collected through enquiries and advertising.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

interface PolicySection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

const SECTIONS: PolicySection[] = [
  {
    id: "who-we-are",
    heading: "1. Who we are",
    paragraphs: [
      `${SITE_NAME} is a cybersecurity training academy and cyber range based in Hyderabad, Telangana, India. This policy explains how we handle personal information when you visit ${SITE_URL}, submit an enquiry, or reach us through Facebook, Instagram or WhatsApp.`,
      `For the purposes of India's Digital Personal Data Protection Act, 2023 ("DPDP Act"), ${SITE_NAME} is the Data Fiduciary for the personal data described below.`,
    ],
  },
  {
    id: "what-we-collect",
    heading: "2. Information we collect",
    paragraphs: [
      "We only collect what we need to answer your enquiry and run our training programs.",
    ],
    bullets: [
      "Enquiry details — your name, email address, phone number, the course or program you are interested in, your learning goal, your preferred batch format, and any message you write to us.",
      "Advertising and platform data — if you reach us through a Facebook or Instagram lead form, we receive the fields you submitted on that form, together with campaign information such as the ad or campaign you responded to.",
      "Messaging data — the content of WhatsApp, phone or email conversations with our advisors.",
      "Website analytics — pages viewed, referral source, approximate location derived from IP address, browser and device type, and interaction events such as form submissions.",
      "Technical logs — standard server logs recorded by our hosting provider for security and reliability.",
    ],
  },
  {
    id: "how-we-use",
    heading: "3. How we use your information",
    paragraphs: ["We use your information to:"],
    bullets: [
      "Respond to your enquiry and discuss course fit, fees and batch schedules.",
      "Provide training, lab access and support once you enrol.",
      "Send information you have asked for, such as curriculum details or batch dates.",
      "Measure and improve our advertising, including understanding which campaigns generate genuine enquiries.",
      "Meet legal, accounting and tax obligations.",
      "Protect the service against fraud, abuse and security incidents.",
    ],
  },
  {
    id: "consent",
    heading: "4. Consent and lawful basis",
    paragraphs: [
      "We process your personal data on the basis of the consent you give when you submit an enquiry form, message us, or submit a lead form on Facebook or Instagram. You may withdraw consent at any time by writing to us at the address in section 11; withdrawal does not affect processing carried out before that point.",
      "We may also process limited data where it is necessary to comply with a legal obligation, or for legitimate uses permitted under the DPDP Act such as fraud prevention and network security.",
    ],
  },
  {
    id: "sharing",
    heading: "5. Who we share it with",
    paragraphs: [
      "We do not sell your personal data. We share it only with service providers who help us operate, and only to the extent they need it:",
    ],
    bullets: [
      "Meta Platforms (Facebook and Instagram) — where you submit a lead form or where we measure advertising performance.",
      "WhatsApp and our telephony provider — to contact you about your enquiry.",
      "Our email, CRM and hosting providers — to store enquiries and deliver our website.",
      "Professional advisers and authorities — where required by law, or to establish or defend legal claims.",
    ],
  },
  {
    id: "retention",
    heading: "6. How long we keep it",
    paragraphs: [
      "Enquiries that do not convert are retained for up to 24 months from the last contact, so we can pick the conversation back up if you return. Enrolment and payment records are kept for the period required under Indian tax and accounting law. Analytics data is retained in aggregate for up to 14 months. After these periods, data is deleted or irreversibly anonymised.",
    ],
  },
  {
    id: "cookies",
    heading: "7. Cookies and advertising tags",
    paragraphs: [
      "Our website uses cookies and similar technologies for two purposes: keeping the site working correctly, and understanding how visitors use it. We use Google Analytics and the Meta Pixel to measure traffic and advertising performance. These tools may set cookies on your device.",
      "You can block or delete cookies in your browser settings. Blocking analytics cookies does not prevent you from using the site or submitting an enquiry. You can also manage how Meta uses your data for advertising in your Facebook ad settings.",
    ],
  },
  {
    id: "security",
    heading: "8. How we protect it",
    paragraphs: [
      "We use encrypted connections (HTTPS) across the site, restrict access to enquiry data to staff and advisors who need it, and keep credentials in a managed secret store rather than in code. No method of transmission or storage is completely secure, but we take these measures seriously and review them as the platform grows.",
    ],
  },
  {
    id: "your-rights",
    heading: "9. Your rights",
    paragraphs: ["Under the DPDP Act you have the right to:"],
    bullets: [
      "Access a summary of the personal data we hold about you and how we process it.",
      "Request correction of inaccurate or incomplete data.",
      "Request erasure of your data, where we are not required to retain it by law.",
      "Withdraw consent for future processing.",
      "Nominate another person to exercise your rights in the event of death or incapacity.",
      "Complain to the Data Protection Board of India if you believe your rights have been infringed.",
    ],
  },
  {
    id: "children",
    heading: "10. Children",
    paragraphs: [
      "Our programs are intended for people aged 18 and over. We do not knowingly collect personal data from children. If you believe a child has submitted information to us, contact us and we will delete it.",
    ],
  },
  {
    id: "contact",
    heading: "11. Contact and grievance redressal",
    paragraphs: [
      "For any question about this policy, to exercise a right, or to raise a grievance, contact our grievance officer:",
    ],
    bullets: [
      `Email: ${CONTACT_EMAIL}`,
      `Phone: ${CONTACT_PHONE}`,
      "Postal address: Cybersecurity Learning & Range Center, Hyderabad, Telangana, India",
    ],
  },
  {
    id: "changes",
    heading: "12. Changes to this policy",
    paragraphs: [
      "We may update this policy as our services or the law change. The revision date at the top of this page always reflects the current version. Material changes affecting how we use your data will be communicated to enrolled students directly.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Shield className="h-3.5 w-3.5" />
              Legal
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This policy explains what personal information {SITE_NAME} collects, why we collect
              it, how long we keep it, and the choices you have. It applies to our website, our
              enquiry forms, and enquiries we receive through Facebook, Instagram and WhatsApp.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <nav aria-label="Policy contents" className="hidden lg:block">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Contents</p>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:text-primary transition-colors">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="space-y-10">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Questions about your data?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team answers privacy questions directly — no ticket queue.
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp {CONTACT_PHONE}
                  </a>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Hyderabad, Telangana, India
                  </span>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  See also our{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact page
                  </Link>{" "}
                  for admissions and training enquiries.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <AcademyFooter />
    </div>
  );
}
