import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  Network,
  Shield,
  ShieldCheck,
  Target,
  Terminal,
  Users,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CyberBodha | Mission, Methodology & Cyber Range" },
      {
        name: "description",
        content:
          "Learn about CyberBodha's mission to bridge cybersecurity education and enterprise operations through authentic virtual cyber range practice.",
      },
      { property: "og:title", content: "About CyberBodha | Practical Cybersecurity Education" },
      {
        property: "og:description",
        content: "Learn, Practice, Simulate, Certify. The mission and philosophy of CyberBodha.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const coreValues = [
    {
      title: "Authentic Capability Over Rote Memorization",
      desc: "Cybersecurity is a dynamic, investigative craft. We refuse multiple-choice shortcuts in favor of terminal logs, network captures, and real SIEM consoles.",
      icon: Terminal,
    },
    {
      title: "Uncompromising Ethical Standards",
      desc: "All offensive skills must be grounded in authorization, defensive purpose, and legal responsibility. We instill deep ethics in every student we train.",
      icon: ShieldCheck,
    },
    {
      title: "Honesty & Institutional Integrity",
      desc: "We never claim fabricated placement percentages, fake salary packages, or unverified accreditations. Our reputation is built on the real technical capability of our learners.",
      icon: Compass,
    },
    {
      title: "Continuous Practical Innovation",
      desc: "Threat landscapes evolve weekly. We continually update our lab scenarios to incorporate real adversarial behaviors, cloud telemetry, and AI security workflows.",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card to-background px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">About</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
              >
                OUR MISSION & PHILOSOPHY
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Building Real Capability Where it Matters Most
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                CyberBodha was founded to solve a pervasive problem in cybersecurity training: a
                massive gap between theoretical certifications and actual operational competence in
                enterprise environments.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  THE PROBLEM WE ADDRESS
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  Moving Beyond Passive Video Lectures
                </h2>
              </div>

              <p>
                Across the globe, thousands of students complete cybersecurity courses with high
                test scores, yet freeze when presented with a live Linux terminal, a noisy SIEM
                dashboard, or a complex packet capture in Wireshark.
              </p>

              <p>
                In a real Security Operations Center or penetration testing engagement, there are no
                hint buttons. Security professionals must know how to formulate hypotheses, isolate
                malicious processes, dissect obfuscated scripts, and communicate technical risk
                clearly to non-technical leadership.
              </p>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
                <h3 className="text-base font-bold text-foreground">The CyberBodha Standard:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>60%+ of curriculum hours spent in live labs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Realistic enterprise multi-subnet environments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Practical scenario capstone examinations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated 1-on-1 technical mentor reviews</span>
                  </div>
                </div>
              </div>

              <p>
                By combining expert-led interactive instruction with our proprietary virtual Cyber
                Range, we ensure our learners don't just remember answers—they build genuine muscle
                memory.
              </p>
            </div>

            {/* Right Pillars Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl space-y-5">
                <h3 className="text-lg font-bold text-foreground">The Four Pillars of Learning</h3>

                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
                      01
                    </span>
                    <div>
                      <strong className="text-foreground block text-sm">Learn</strong>
                      <span>
                        Instructor-led conceptual frameworks, threat models, and architectural
                        context.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
                      02
                    </span>
                    <div>
                      <strong className="text-foreground block text-sm">Practice</strong>
                      <span>
                        Targeted exercises on individual systems, network services, and log
                        pipelines.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
                      03
                    </span>
                    <div>
                      <strong className="text-foreground block text-sm">Simulate</strong>
                      <span>
                        Multi-stage attack-and-defend scenarios inside our virtual Cyber Range.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
                      04
                    </span>
                    <div>
                      <strong className="text-foreground block text-sm">Certify</strong>
                      <span>
                        Timed practical evaluations that validate real readiness for the industry.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <Button asChild className="w-full justify-center gap-2">
                    <Link to="/courses">
                      <span>Explore Our Curriculum</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Our Core Principles
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                How we operate as educators, mentors, and cybersecurity professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="rounded-xl border border-border bg-background p-6 space-y-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
