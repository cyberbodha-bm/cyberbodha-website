import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Layers,
  Network,
  Shield,
  ShieldCheck,
  Terminal,
  Users,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { EnquiryForm } from "@/components/cyberbodha/EnquiryForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/university-programs")({
  head: () => ({
    meta: [
      { title: "University Cybersecurity Programs & Academic Partnerships | CyberBodha" },
      {
        name: "description",
        content:
          "Bridge academic curriculum and industry capability. CyberBodha partners with colleges and universities to provide virtual cyber range labs and practical cybersecurity training.",
      },
      { property: "og:title", content: "University Cybersecurity Programs | CyberBodha" },
      {
        property: "og:description",
        content:
          "Academic cybersecurity partnerships, virtual cyber range labs, and faculty training.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/university-programs") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/university-programs") }],
  }),
  component: UniversityProgramsPage,
});

function UniversityProgramsPage() {
  const academicPillars = [
    {
      title: "Virtual Cyber Range Lab Infrastructure",
      desc: "Provide students with cloud-accessible cybersecurity sandboxes for networking, Linux administration, SOC monitoring, and ethical hacking without complex local lab maintenance.",
      icon: Terminal,
      benefits: [
        "Browser-based student access",
        "Zero on-premises server overhead",
        "Pre-configured attack scenarios",
      ],
    },
    {
      title: "Industry-Aligned Curriculum Modules",
      desc: "Complement university computer science and IT degrees with modular practical courses covering modern security operations, SIEM telemetry, and VAPT methodologies.",
      icon: BookOpen,
      benefits: [
        "Semester-aligned course schedules",
        "Faculty lecture companion guides",
        "Comprehensive lab exercises",
      ],
    },
    {
      title: "Practical Student Skill Assessments",
      desc: "Move beyond standard theoretical examinations. Students solve realistic technical challenges and earn verified CyberBodha competency badges to strengthen their job readiness.",
      icon: ShieldCheck,
      benefits: [
        "Scenario-driven testing",
        "Verified digital completion records",
        "Technical portfolio preparation",
      ],
    },
    {
      title: "Faculty Enablement & Development",
      desc: "Equip computer science and engineering faculty with practical defensive and offensive tooling workflows through guided workshops and technical onboarding.",
      icon: GraduationCap,
      benefits: [
        "Hands-on instructor workshops",
        "Standardized evaluation rubrics",
        "Ongoing academic technical support",
      ],
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
              <span className="text-foreground font-medium">University Programs</span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
                >
                  <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
                  ACADEMIC INSTITUTIONAL PARTNERSHIPS
                </Badge>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  Connect Academic Foundations to Real-World Cyber Capability
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Universities teach exceptional computer science fundamentals, but employers demand
                  practical security readiness. CyberBodha bridges this divide by providing higher
                  education institutions with turn-key Cyber Range laboratories, structured
                  curricula, and verified assessments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/80">
                  <div>
                    <span className="text-xl font-bold text-primary block">Cloud Range</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      No hardware required
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-primary block">Hands-on</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      Over 60% lab hours
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-primary block">Turn-key</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      Faculty supported
                    </span>
                  </div>
                </div>
              </div>

              {/* Consultation Form Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-foreground">
                    Academic Partnership Enquiry
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground mb-5">
                    Speak with our academic alliances director about integrating Cyber Range labs
                    into your department or college.
                  </p>
                  <EnquiryForm
                    defaultCourseSlug="linux-networking-cybersecurity"
                    sourceContext="University Programs Page Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Solutions Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                How We Partner with Academic Institutions
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Flexible models designed for engineering colleges, polytechnics, and university
                departments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {academicPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm space-y-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>

                    <div className="pt-2 border-t border-border/80 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Institutional Benefits:
                      </span>
                      <ul className="space-y-1">
                        {pillar.benefits.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-foreground font-medium"
                          >
                            <Check className="h-3 w-3 text-primary shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Curriculum Integration Steps */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                <span>INTEGRATION BLUEPRINT</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Four-Step Academic Deployment</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Syllabus Mapping</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We align practical lab scenarios with your existing semester electives, lab
                    hours, and credit structures.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Faculty Onboarding</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We conduct comprehensive train-the-trainer workshops covering lab tools, grading
                    criteria, and range administration.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Student Lab Execution</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Students access cloud lab pods from campus computer labs or home devices using
                    standard web browsers.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Practical Assessment</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Students sit for simulated capstone challenges, generating verified performance
                    transcripts for prospective employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
