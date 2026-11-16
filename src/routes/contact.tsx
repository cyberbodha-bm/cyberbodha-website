import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { EnquiryForm } from "@/components/cyberbodha/EnquiryForm";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CyberBodha | Admissions & Training Inquiries" },
      {
        name: "description",
        content:
          "Get in touch with CyberBodha's academic advisors for course admissions, batch schedules, corporate upskilling, and cyber range inquiries.",
      },
      { property: "og:title", content: "Contact CyberBodha | Admissions & Inquiries" },
      {
        property: "og:description",
        content: "Speak with our academic and technical training advisors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const contactFaqs = [
    {
      q: "How soon can I start a course after enrolling?",
      a: "Upcoming cohort dates are scheduled on rolling weekend and weekday evening tracks. Once your enquiry is reviewed and batch slot confirmed, access to foundational preparatory materials is provided immediately.",
    },
    {
      q: "Are the virtual labs accessible from home?",
      a: "Yes. All Cyber Range virtual laboratory environments are hosted on secure cloud infrastructure and accessible via standard web browsers with no heavy local installation required.",
    },
    {
      q: "Do you offer corporate or customized team batches?",
      a: "Yes. We regularly design dedicated cohorts aligned with enterprise tooling (e.g. customized Splunk/Sentinel pipelines, bespoke web application targets) for enterprise teams.",
    },
    {
      q: "Can college students or career switchers enroll without prior cybersecurity experience?",
      a: "Absolutely. We offer dedicated foundation tracks, including Linux & Networking for Cybersecurity and the Cybersecurity Career Accelerator, structured specifically for newcomers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card to-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Contact</span>
            </div>

            <div className="max-w-3xl space-y-3">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
              >
                ADMISSIONS & ADVISING
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Get in Touch with CyberBodha
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                Have questions about course curricula, batch schedules, or corporate partnerships?
                Our training advisors are here to help you choose the right path.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Information Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Admissions Office</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Reach out directly through email or submit the enquiry form. We usually respond
                  within 1 business day with complete syllabus details and schedule options.
                </p>
              </div>

              <div className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground block">Email Inquiries</span>
                    <a
                      href="mailto:admissions@cyberbodha.com"
                      className="text-xs text-primary hover:underline block"
                    >
                      admissions@cyberbodha.com
                    </a>
                    <a
                      href="mailto:contact@cyberbodha.com"
                      className="text-xs text-muted-foreground hover:underline block"
                    >
                      contact@cyberbodha.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground block">Academy Center</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      CyberBodha Cybersecurity Learning & Cyber Range Center
                      <br />
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-foreground block">Office Hours</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Monday to Saturday: 9:00 AM – 7:00 PM IST
                      <br />
                      Sunday: Reserved for Live Cyber Range Cohorts
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct support note */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Verified Response Guarantee</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your enquiry will be handled by technical course counselors who understand
                  cybersecurity roles and prerequisites—not aggressive third-party sales callers.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Send an Admissions Enquiry</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Please provide your contact information and course interest. All fields marked
                    with an asterisk (<span className="text-primary">*</span>) are required.
                  </p>
                </div>

                <EnquiryForm defaultCourseSlug="" sourceContext="Dedicated Contact Page Form" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Frequently Asked Inquiries</h2>
              <p className="text-xs text-muted-foreground">
                Common questions about enrolling in CyberBodha programs.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {contactFaqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`cfaq-${idx}`}
                  className="rounded-xl border border-border bg-background px-4"
                >
                  <AccordionTrigger className="text-xs font-bold text-foreground hover:no-underline hover:text-primary py-3.5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
