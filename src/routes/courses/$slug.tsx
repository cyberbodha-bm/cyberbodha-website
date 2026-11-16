import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Cpu,
  FileText,
  HelpCircle,
  Layers,
  MessageSquare,
  Network,
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
import { CehCurriculumWorkspace } from "@/components/cyberbodha/CehCurriculumWorkspace";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourseBySlug, COURSES, type Course } from "@/data/courses";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) {
      throw notFound();
    }
    return { course };
  },
  head: ({ loaderData }) => {
    const course = loaderData?.course;
    if (!course) return { meta: [{ title: "Course Not Found | CyberBodha" }] };
    return {
      meta: [
        { title: `${course.title} | CyberBodha Academy` },
        { name: "description", content: course.shortDescription },
        { property: "og:title", content: `${course.title} | CyberBodha Academy` },
        { property: "og:description", content: course.shortDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/courses/${course.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/courses/${course.slug}`) }],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CourseDetailPage,
});

function CourseNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="mt-4 text-2xl font-bold">Course Not Found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The requested course could not be located in our catalog. It may have been renamed or
            scheduled for an upcoming cohort.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link to="/courses">Browse Course Catalog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <AcademyFooter />
    </div>
  );
}

function CourseDetailPage() {
  const { course } = Route.useLoaderData();

  const relatedCourses = course.relatedCourseSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is Course => c !== undefined);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1 pb-20">
        {/* Course Header Banner */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card/80 to-background px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumbs"
              className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-6"
            >
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/courses" className="hover:text-foreground">
                Courses
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-muted-foreground">{course.category}</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                {course.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Title & Key Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
                  >
                    {course.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  {course.badge && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold hover:bg-primary/15">
                      <Sparkles className="mr-1 h-3 w-3" />
                      {course.badge}
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  {course.title}
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed pt-1">
                  {course.overview}
                </p>

                {/* Quick stats strip */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-b border-border/70 py-4 mt-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                      Curriculum
                    </span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">
                      {course.curriculum.length} Modules
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                      Delivery
                    </span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">
                      Instructor-Led
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                      Practice
                    </span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">
                      Cyber Range Labs
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                      Assessment
                    </span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">
                      Practical Exam
                    </span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Competencies & Skills Developed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
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

              {/* Right Column: Desktop Sticky Action Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      ADMISSIONS OPEN
                    </span>
                    <span className="text-xs text-muted-foreground">Next Cohort Enrolling</span>
                  </div>

                  <div className="py-5 space-y-3.5">
                    <div className="flex items-start gap-3 text-xs">
                      <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">Comprehensive Syllabus</strong>
                        <span className="text-muted-foreground">
                          {course.curriculum.length} structured modules + practical capstone
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <Terminal className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">
                          Dedicated Cyber Range Access
                        </strong>
                        <span className="text-muted-foreground">
                          Virtual labs mirroring enterprise SOC & offensive networks
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-xs">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground block">Practical Assessment</strong>
                        <span className="text-muted-foreground">{course.certificationNote}</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary and secondary CTAs */}
                  <div className="space-y-2.5 pt-2 border-t border-border">
                    <CourseEnquiryModal
                      defaultCourseSlug={course.slug}
                      sourceContext={`Course Detail Sidebar: ${course.title}`}
                      trigger={
                        <Button className="w-full justify-center gap-2 text-sm font-semibold h-11">
                          <MessageSquare className="h-4 w-4" />
                          <span>Enquire About Course</span>
                        </Button>
                      }
                    />

                    <CourseEnquiryModal
                      defaultCourseSlug={course.slug}
                      sourceContext={`Syllabus Download Request: ${course.title}`}
                      trigger={
                        <Button
                          variant="outline"
                          className="w-full justify-center gap-2 text-xs h-9"
                        >
                          <FileText className="h-3.5 w-3.5" />
                          <span>Request Full Curriculum PDF</span>
                        </Button>
                      }
                    />
                  </div>

                  <p className="mt-4 text-center text-[11px] text-muted-foreground">
                    Have corporate or team requirements?{" "}
                    <Link
                      to="/corporate-training"
                      className="text-primary hover:underline font-medium"
                    >
                      Explore corporate training
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs & Deep Dive Sections */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-14">
              {/* Learning Outcomes */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Check className="h-4 w-4" />
                  <span>KEY CAPABILITIES</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">What You Will Learn</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                  {course.learningOutcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <p className="text-xs text-foreground leading-relaxed font-medium">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum Section */}
              {course.slug === "ceh-v13-ai-ethical-hacking" ? (
                <CehCurriculumWorkspace />
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                        <BookOpen className="h-4 w-4" />
                        <span>COURSE STRUCTURE</span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mt-1">
                        Detailed Curriculum
                      </h2>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {course.curriculum.length} Modules
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Each module combines conceptual explanations with hands-on exercises in the
                    Cyber Range.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="w-full space-y-3 pt-2"
                  >
                    {course.curriculum.map((mod, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`item-${idx}`}
                        className="rounded-xl border border-border bg-card px-4 py-1"
                      >
                        <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline hover:text-primary py-3">
                          <div className="flex items-center gap-3 text-left">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary text-[11px] font-bold text-secondary-foreground">
                              {idx + 1}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-4 text-xs text-muted-foreground space-y-3">
                          <p className="leading-relaxed text-foreground/90">{mod.description}</p>
                          <div>
                            <span className="font-semibold text-foreground text-[11px] block mb-1.5">
                              Core Topics Covered:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-inside list-disc">
                              {mod.topics.map((t, tidx) => (
                                <li key={tidx} className="text-muted-foreground">
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Practical Lab Highlights */}
              <div className="space-y-4 rounded-2xl border border-primary/20 bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Terminal className="h-4 w-4" />
                  <span>HANDS-ON RANGE PRACTICE</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Practical Lab Highlights</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  CyberBodha emphasizes authentic experience over multiple-choice theory. During
                  this course, you will execute exercises in our controlled cyber range:
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                  {course.labHighlights.map((lab, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg border border-border/80 bg-background/50 p-4"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Terminal className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-medium text-foreground leading-relaxed">
                        {lab}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools and Technologies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Cpu className="h-4 w-4" />
                  <span>TOOLING ECOSYSTEM</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Tools & Technologies Mastered
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Experience standard tools utilized by enterprise Security Operations Centers,
                  offensive red teams, and infrastructure security teams.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {course.technologies.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground italic">
                  Note: Specific tool suites depend on cohort track and enterprise licensing;
                  conceptual workflows remain fully transferable.
                </p>
              </div>

              {/* Audience & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Who Should Enroll</span>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground list-inside list-disc">
                    {course.audience.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>Prerequisites</span>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground list-inside list-disc">
                    {course.prerequisites.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <HelpCircle className="h-4 w-4" />
                  <span>QUESTIONS & ANSWERS</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-2.5 pt-2">
                  {course.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`faq-${idx}`}
                      className="rounded-xl border border-border bg-card px-4"
                    >
                      <AccordionTrigger className="text-xs font-bold text-foreground hover:no-underline hover:text-primary py-3 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Related Courses */}
              {relatedCourses.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground">Related Learning Programs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedCourses.map((rel) => (
                      <CourseCard key={rel.id} course={rel} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Supplementary Context & Advisor Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Teaching Methodology Card */}
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  The CyberBodha Method
                </h4>
                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Practitioner-Led:</strong> Courses are
                      instructed by active defensive operations and security testing professionals.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Zero Theory Fillers:</strong> Spend over
                      60% of class and assignment hours inside interactive terminal and SIEM
                      environments.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <p>
                      <strong className="text-foreground">Verified Assessment:</strong> Capstone
                      assessments mirror actual industry shifts and testing engagements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
                <h4 className="text-base font-bold text-foreground">Need Cohort Details?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our admissions office provides complete batch schedules, prerequisite diagnostic
                  checks, and fee structures on request.
                </p>
                <CourseEnquiryModal
                  defaultCourseSlug={course.slug}
                  sourceContext={`Right Card Consultation: ${course.title}`}
                  trigger={
                    <Button size="sm" className="w-full">
                      Speak with Course Advisor
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Enrollment Footer Bar */}
        <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur-md p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold text-primary block">
              Ready to enroll?
            </span>
            <span className="text-xs font-bold text-foreground truncate block">{course.title}</span>
          </div>
          <CourseEnquiryModal
            defaultCourseSlug={course.slug}
            sourceContext={`Mobile Bottom Bar: ${course.title}`}
            trigger={
              <Button size="sm" className="shrink-0 gap-1.5 font-semibold">
                <span>Enquire Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            }
          />
        </div>
      </main>

      <AcademyFooter />
    </div>
  );
}
