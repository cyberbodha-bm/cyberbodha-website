import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  ChevronRight,
  HelpCircle,
  Layers,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseCard } from "@/components/cyberbodha/CourseCard";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProgramBySlug, type Program } from "@/data/programs";
import { getCourseBySlug, type Course } from "@/data/courses";
import { ProgramSchema } from "@/components/seo/ProgramSchema";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) {
      throw notFound();
    }
    return { program };
  },
  head: ({ loaderData }) => {
    const program = loaderData?.program;
    if (!program) return { meta: [{ title: "Program Not Found | CyberBodha" }] };
    return {
      meta: [
        { title: `${program.title} | CyberBodha Programs` },
        { name: "description", content: program.overview },
        { property: "og:title", content: `${program.title} | CyberBodha Programs` },
        { property: "og:description", content: program.overview },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/programs/${program.slug}`) },
        {
          property: "og:image",
          content:
            program.slug === "ethical-hacking"
              ? absoluteUrl("/og/ceh-v13-og.png")
              : absoluteUrl("/og/cyberbodha-og.png"),
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/programs/${program.slug}`) }],
    };
  },
  notFoundComponent: ProgramNotFound,
  component: ProgramDetailPage,
});

function ProgramNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="mt-4 text-2xl font-bold">Program Track Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The requested career track is currently not active or scheduled for an upcoming cohort
            release.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses">Browse Course Catalog</Link>
            </Button>
          </div>
        </div>
      </main>
      <AcademyFooter />
    </div>
  );
}

function ProgramDetailPage() {
  const { program } = Route.useLoaderData();

  const recommendedCourses = program.recommendedCourseSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is Course => c !== undefined);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ProgramSchema program={program} />
      <AcademyHeader />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card/80 to-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6"
            >
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/programs" className="hover:text-foreground">
                Programs
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{program.title}</span>
            </nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
                  >
                    {program.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {program.badge}
                  </Badge>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  {program.title}
                </h1>

                <p className="text-sm font-semibold text-primary">{program.subtitle}</p>

                <p className="text-base text-muted-foreground leading-relaxed pt-1">
                  {program.overview}
                </p>

                {/* Core skills */}
                <div className="pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Competencies & Practice Domains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg border border-border/80 bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm"
                      >
                        <Check className="mr-1.5 h-3.5 w-3.5 text-primary shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Action Card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      PROGRAM DETAILS
                    </span>
                    <span className="text-xs text-muted-foreground">Live Cohorts</span>
                  </div>

                  <div className="space-y-3 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">Curriculum Alignment</strong>
                        <span>
                          {program.curriculumHighlights.length} comprehensive technical pillars
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Terminal className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">Hands-on Cyber Range</strong>
                        <span>Dedicated isolated virtual networks & live alert feeds</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Briefcase className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">Career Focus</strong>
                        <span>
                          Prepared for roles: {program.careerRoles.slice(0, 2).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {program.investment && (
                    <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          Program Investment
                        </span>
                        {program.duration && (
                          <span className="text-[11px] font-medium text-muted-foreground">
                            {program.duration}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {program.investment.options.map((option) => (
                          <div
                            key={option.name}
                            className="flex items-start justify-between gap-3 rounded-lg bg-background/70 px-3 py-2"
                          >
                            <div>
                              <span className="block text-xs font-bold text-foreground">
                                {option.name}
                              </span>
                              <span className="block text-[11px] leading-snug text-muted-foreground">
                                {option.includes}
                              </span>
                            </div>
                            <span className="whitespace-nowrap text-sm font-extrabold text-primary">
                              {option.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {program.investment.addon && (
                        <p className="text-[11px] leading-relaxed text-muted-foreground">
                          <strong className="text-foreground">
                            {program.investment.addon.name}:
                          </strong>{" "}
                          {program.investment.addon.price} — {program.investment.addon.note}
                        </p>
                      )}

                      {program.investment.note && (
                        <p className="border-t border-border/60 pt-2 text-[10px] leading-relaxed text-muted-foreground">
                          {program.investment.note}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="pt-3 border-t border-border space-y-2.5">
                    <CourseEnquiryModal
                      sourceContext={`Program Sidebar CTA: ${program.title}`}
                      trigger={
                        <Button className="w-full justify-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span>Enquire About This Track</span>
                        </Button>
                      }
                    />
                    <Button asChild variant="outline" className="w-full justify-center text-xs">
                      <Link to="/cyber-range">Explore Range Labs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Content Sections */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Curriculum Pillars */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Layers className="h-4 w-4" />
                  <span>STRUCTURED PHASES</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Program Pillars & Core Coverage
                </h2>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {program.curriculumHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-card p-5 space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                          {idx + 1}
                        </span>
                        <h3 className="text-base font-bold text-foreground">{highlight.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-9">
                        {highlight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Methodology */}
              <div className="space-y-4 rounded-2xl border border-primary/20 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Terminal className="h-4 w-4" />
                  <span>VIRTUAL RANGE ARCHITECTURE</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Practical Lab Methodology</h2>
                <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                  {program.labMethodology}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-lg border border-border bg-background/60 p-3.5 text-center">
                    <span className="text-xs font-bold text-foreground block">Isolated VMs</span>
                    <span className="text-[11px] text-muted-foreground mt-0.5 block">
                      Safe execution sandboxes
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-background/60 p-3.5 text-center">
                    <span className="text-xs font-bold text-foreground block">
                      Real Event Feeds
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-0.5 block">
                      Heterogeneous logs & Sysmon
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-background/60 p-3.5 text-center">
                    <span className="text-xs font-bold text-foreground block">
                      Instructor Feedback
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-0.5 block">
                      Detailed triage reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Career Relevance & Target Roles */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="h-4 w-4" />
                  <span>CAREER LANDSCAPE</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Industry & Career Relevance</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {program.careerRelevance}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">
                    Target Industry Positions:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {program.careerRoles.map((role) => (
                      <span
                        key={role}
                        className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Courses inside this Program */}
              {recommendedCourses.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-border">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Recommended Courses in this Track
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Enroll in specific modular courses or take the complete career program.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {recommendedCourses.map((c) => (
                      <CourseCard key={c.id} course={c} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Audience & Program Advisor */}
            <div className="lg:col-span-4 space-y-6">
              {/* Who Should Enroll */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Who Should Enroll</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground list-inside list-disc">
                  {program.audience.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3 text-center">
                <h4 className="text-base font-bold text-foreground">Have Questions?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our admissions counselors will walk you through prerequisite checks, syllabus
                  details, and batch timelines.
                </p>
                <CourseEnquiryModal
                  sourceContext={`Program Sidebar Consultation: ${program.title}`}
                  trigger={
                    <Button size="sm" className="w-full">
                      Speak with Academic Advisor
                    </Button>
                  }
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
