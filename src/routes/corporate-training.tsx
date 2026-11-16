import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  ChevronRight,
  Cpu,
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

export const Route = createFileRoute("/corporate-training")({
  head: () => ({
    meta: [
      { title: "Corporate Cybersecurity Training & Team Upskilling | CyberBodha" },
      {
        name: "description",
        content:
          "Empower your enterprise security team with role-based training in SOC operations, SIEM engineering, VAPT, and cloud security defense.",
      },
      { property: "og:title", content: "Corporate Cybersecurity Training | CyberBodha" },
      {
        property: "og:description",
        content: "Enterprise cybersecurity upskilling and practical cyber range simulations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/corporate-training") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/corporate-training") }],
  }),
  component: CorporateTrainingPage,
});

function CorporateTrainingPage() {
  const corporateSolutions = [
    {
      title: "SOC Analyst & Blue Team Upskilling",
      desc: "Train Tier 1 and Tier 2 analysts on alert triage, MITRE ATT&CK correlation, and endpoint telemetry investigation to reduce Mean Time to Detect (MTTD).",
      icon: ShieldCheck,
      topics: [
        "Alert Prioritization & Triage",
        "Wazuh, Splunk & Sentinel Workflows",
        "Incident Escalation Standardization",
      ],
    },
    {
      title: "SIEM Engineering & Telemetry Operations",
      desc: "Equip your security engineers to build custom log parsers, develop high-fidelity Sigma correlation rules, and streamline SIEM pipeline throughput.",
      icon: Cpu,
      topics: [
        "Custom Parser & CIM Mapping",
        "Detection as Code with Sigma",
        "False Positive Suppression",
      ],
    },
    {
      title: "VAPT & Offensive Security Validation",
      desc: "Help your application security and infrastructure teams understand adversary mindsets through controlled vulnerability verification and reporting.",
      icon: Terminal,
      topics: [
        "OWASP API & Web Security",
        "Internal Network Pentest Scenarios",
        "Audit-Ready Remediation Deliverables",
      ],
    },
    {
      title: "Customized Enterprise Learning Pathways",
      desc: "Tailored programs designed specifically for your organization's tech stack, compliance mandates (ISO 27001, SOC 2, PCI-DSS), and internal tooling.",
      icon: Layers,
      topics: [
        "Bespoke Lab Environments",
        "Pre/Post Skill Benchmark Audits",
        "Executive Progress Dashboards",
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
              <span className="text-foreground font-medium">Corporate Training</span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
                >
                  <Building2 className="mr-1.5 h-3.5 w-3.5" />
                  ENTERPRISE WORKFORCE UPSKILLING
                </Badge>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  Transform Technical Potential into Enterprise Cyber Defense
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Cyber threats do not conform to multiple-choice quizzes. CyberBodha partners with
                  corporate teams, security leadership, and IT organizations to deliver practical,
                  lab-driven training that directly improves operational incident response and
                  defensive readiness.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/80">
                  <div>
                    <span className="text-xl font-bold text-primary block">Dedicated</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      Virtual Range Pods
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-primary block">Modular</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      Customizable Syllabus
                    </span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-primary block">Measurable</span>
                    <span className="text-xs text-muted-foreground mt-0.5 block">
                      Pre/Post Skill Audits
                    </span>
                  </div>
                </div>
              </div>

              {/* Consultation Form Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-foreground">
                    Request Enterprise Training Consultation
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground mb-5">
                    Connect with our corporate curriculum director to discuss team size, learning
                    objectives, and custom schedules.
                  </p>
                  <EnquiryForm
                    defaultCourseSlug="soc-analyst-professional"
                    sourceContext="Corporate Training Page Inline Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Solutions Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Role-Based Enterprise Training Tracks
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Structured programs aligned with enterprise security team functions, from alert
                triage to automated detection engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {corporateSolutions.map((sol) => {
                const Icon = sol.icon;
                return (
                  <div
                    key={sol.title}
                    className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm space-y-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{sol.title}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">{sol.desc}</p>

                    <div className="pt-2 border-t border-border/80 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Included Focus Areas:
                      </span>
                      <ul className="space-y-1">
                        {sol.topics.map((t, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-foreground font-medium"
                          >
                            <Check className="h-3 w-3 text-primary shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Corporate Delivery Methodology */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                <span>HOW WE PARTNER WITH CORPORATE TEAMS</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Enterprise Delivery Workflow</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Skills Gap Diagnostic</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We assess your team’s existing baseline across networking, operating systems,
                    and monitoring workflows.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Curriculum Customization</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We align lab exercises to your existing SIEM (Splunk, Wazuh, Sentinel) and
                    enterprise cloud architectures.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-foreground">Cyber Range Execution</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Teams execute live incident response and detection challenges in dedicated
                    virtual laboratory pods.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    Reporting & Continuous Readiness
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Leadership receives verified skill completion matrices, practical scenario
                    scores, and post-training roadmaps.
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
