import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/data/programs";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Programs & Learning Pathways | CyberBodha" },
      {
        name: "description",
        content:
          "Explore structured cybersecurity career tracks designed for aspiring SOC Analysts, Ethical Hackers, VAPT Specialists, and Cloud Security Engineers.",
      },
      { property: "og:title", content: "Cybersecurity Programs & Learning Pathways | CyberBodha" },
      {
        property: "og:description",
        content: "Structured cybersecurity pathways with hands-on cyber range labs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/programs") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/programs") }],
  }),
  component: ProgramsOverviewPage,
});

function ProgramsOverviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Programs</span>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                CAREER-FOCUSED PATHWAYS
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Structured Cybersecurity Programs
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Whether you are starting from zero or sharpening specialized enterprise skills, our
                career tracks connect foundational systems knowledge to high-stakes cyber range
                defense.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROGRAMS.map((program) => (
                <article
                  key={program.slug}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="text-[11px] font-semibold border-primary/20 text-primary bg-primary/5"
                      >
                        {program.category}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px]">
                        {program.badge}
                      </Badge>
                    </div>

                    <h2 className="text-xl font-bold text-foreground leading-snug hover:text-primary transition-colors">
                      <Link to="/programs/$slug" params={{ slug: program.slug }}>
                        {program.title}
                      </Link>
                    </h2>

                    <p className="text-xs font-medium text-primary">{program.subtitle}</p>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {program.overview}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-border/70 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {program.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 text-xs text-primary hover:text-primary hover:bg-primary/10 -ml-2"
                    >
                      <Link to="/programs/$slug" params={{ slug: program.slug }}>
                        <span>Explore Program Track</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <CourseEnquiryModal
                      sourceContext={`Program Overview Card: ${program.title}`}
                      trigger={
                        <Button variant="outline" size="sm" className="text-xs">
                          Enquire
                        </Button>
                      }
                    />
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Range Banner */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Terminal className="h-4 w-4" />
                  <span>INTEGRATED LAB METHODOLOGY</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Experience Real Threat Telemetry Before Your First Job Shift
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every CyberBodha program is powered by our proprietary virtual Cyber Range.
                  Learners analyze real attack traffic, correlate events in Wazuh/Splunk, and defend
                  active directory infrastructures.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button asChild>
                  <Link to="/cyber-range">Explore Range Showcase</Link>
                </Button>
                <CourseEnquiryModal
                  sourceContext="Programs Bottom Consultation"
                  trigger={<Button variant="outline">Schedule Consultation</Button>}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
