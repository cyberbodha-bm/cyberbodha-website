import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Layers,
  Network,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RANGE_LABS, type RangeLab } from "@/data/cyber-range";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/cyber-range")({
  head: () => ({
    meta: [
      { title: "Virtual Cyber Range Showcase | CyberBodha" },
      {
        name: "description",
        content:
          "Explore CyberBodha's virtual Cyber Range labs. Practice SOC alert triage, SIEM investigation, VAPT, Active Directory defense, and incident response.",
      },
      { property: "og:title", content: "Virtual Cyber Range Showcase | CyberBodha" },
      {
        property: "og:description",
        content:
          "Interactive virtual labs for SOC analysts, penetration testers, and security engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/cyber-range") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cyber-range") }],
  }),
  component: CyberRangePage,
});

function CyberRangePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Blue Team", "Offensive", "Systems & Network", "Active Directory"];

  const filteredLabs = RANGE_LABS.filter((lab) => {
    if (selectedCategory === "all") return true;
    return lab.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card to-background px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Cyber Range</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
              >
                <Terminal className="mr-1.5 h-3.5 w-3.5" />
                HANDS-ON VIRTUAL CYBER RANGE
              </Badge>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Practice That Prepares You for Real Threat Telemetry
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                Reading about security concepts is not enough. CyberBodha’s Cyber Range puts you
                inside controlled, realistic lab networks with active log generators, SIEM
                dashboards, and vulnerable target systems.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="gap-2">
                  <Link to="/courses">
                    <span>Explore Courses with Range Access</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <CourseEnquiryModal
                  sourceContext="Cyber Range Top Demo Request"
                  trigger={<Button variant="outline">Request Range Walkthrough</Button>}
                />
              </div>
            </div>

            {/* Range Architecture Pillars */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 border-t border-border/80 pt-8">
              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Safe Isolated Sandboxes</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Execute exploits and analyze malware artifacts safely inside strictly segregated
                  virtual boundaries.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Heterogeneous Telemetry</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ingest real Windows Security Event IDs, Linux Syslog/Auditd, Sysmon process
                  graphs, and network PCAPs.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Multi-Stage Scenarios</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  From initial phishing delivery to lateral movement and Active Directory
                  Kerberoasting.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Actionable Outcomes</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every lab culminates in authentic evidence collection, remediation tickets, and
                  faculty feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Labs Showcase Section */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Featured Cyber Range Scenarios
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing <strong>{filteredLabs.length}</strong> active scenario modules across
                  defensive and offensive tracks.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat === "all" ? "All Categories" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Lab Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredLabs.map((lab) => (
                <article
                  key={lab.id}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm space-y-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant="outline"
                          className="text-[11px] font-semibold border-primary/20 text-primary bg-primary/5"
                        >
                          {lab.category}
                        </Badge>
                        <Badge variant="secondary" className="text-[10px]">
                          {lab.level}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {lab.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground shrink-0 bg-secondary px-2.5 py-1 rounded-md">
                      <Clock className="h-3 w-3 text-primary" />
                      <span>{lab.estimatedMinutes} min</span>
                    </div>
                  </div>

                  {/* Scenario context */}
                  <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2 text-xs">
                    <span className="font-bold text-primary uppercase text-[10px] tracking-wider block">
                      SCENARIO BRIEF:
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{lab.scenario}</p>
                  </div>

                  {/* Objective & Learner Task */}
                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-foreground block mb-0.5">Objective:</strong>
                      <p className="text-muted-foreground leading-relaxed">{lab.objective}</p>
                    </div>

                    <div>
                      <strong className="text-foreground block mb-0.5">Learner Task:</strong>
                      <p className="text-muted-foreground leading-relaxed">{lab.learnerTask}</p>
                    </div>

                    <div>
                      <strong className="text-foreground block mb-0.5">Expected Output:</strong>
                      <p className="text-muted-foreground leading-relaxed">{lab.expectedOutcome}</p>
                    </div>
                  </div>

                  {/* Tools & Skills */}
                  <div className="pt-3 border-t border-border space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-foreground mr-1">Tools:</span>
                      {lab.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="rounded bg-secondary px-2 py-0.5 text-[10px] text-foreground font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] font-semibold text-foreground mr-1">
                        Skills:
                      </span>
                      {lab.skillsPracticed.map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-border bg-card px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-2">
                    <CourseEnquiryModal
                      sourceContext={`Cyber Range Lab Card: ${lab.title}`}
                      trigger={
                        <Button variant="outline" size="sm" className="w-full text-xs gap-1.5">
                          <span>Enquire About Course Covering This Lab</span>
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      }
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Institutional note */}
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                <span>ETHICAL & OPERATIONAL DISCLAIMER</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Simulated Controlled Labs vs. Production Environments
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All Cyber Range activities operate exclusively within strictly isolated virtual
                network topologies designed for authorized educational simulation. CyberBodha does
                not engage in, support, or condone unauthorized access to external computer systems.
                Tools and techniques taught in our laboratories are intended strictly for defensive
                validation, authorized penetration testing, and enterprise security operations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
