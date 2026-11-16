import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  Network,
  Rocket,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Users,
  Zap,
  Star,
} from "lucide-react";
import labImage from "@/assets/cyberbodha-learning-lab.jpg";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseCard } from "@/components/cyberbodha/CourseCard";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COURSES, COURSE_CATEGORIES, getFeaturedCourses } from "@/data/courses";
import { RANGE_LABS } from "@/data/cyber-range";
import { REVIEWS } from "@/data/reviews";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberBodha | Cybersecurity Education, Training & Cyber Range" },
      {
        name: "description",
        content:
          "Build real cybersecurity capabilities through expert-led training, practical labs, industry scenarios, and structured learning pathways.",
      },
      { property: "og:title", content: "CyberBodha | Learn. Practice. Simulate. Certify." },
      {
        property: "og:description",
        content:
          "Build real cybersecurity capabilities through expert-led training, practical labs, industry scenarios, and structured learning pathways.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: AcademyHome,
});

export function AcademyHome() {
  const featuredCourses = getFeaturedCourses();

  const pathways = [
    {
      number: "01",
      title: "Start Your Cybersecurity Career",
      badge: "Foundations Track",
      audience: "Complete beginners, students, and IT professionals transitioning to security.",
      skills: [
        "Linux System Administration",
        "TCP/IP & Packet Analysis",
        "Windows Defense",
        "Security Foundations",
      ],
      recommendedCourses: [
        {
          title: "Linux & Networking for Cybersecurity",
          to: "/courses/$slug" as const,
          params: { slug: "linux-networking-cybersecurity" },
        },
        {
          title: "Cybersecurity Career Accelerator",
          to: "/courses/$slug" as const,
          params: { slug: "cybersecurity-career-accelerator" },
        },
      ],
      progression: "Prepares you for entry-level Junior Security Analyst or Junior SOC roles.",
      to: "/programs/$slug" as const,
      params: { slug: "cybersecurity-career" },
      icon: Compass,
    },
    {
      number: "02",
      title: "Become a SOC Analyst",
      badge: "Blue Team Track",
      audience: "Aspiring security analysts, Tier 1/2 operators, and network administrators.",
      skills: [
        "Alert Triage & Prioritization",
        "SIEM Investigation (Wazuh/Splunk)",
        "Sysmon Endpoint Telemetry",
        "MITRE ATT&CK Mapping",
      ],
      recommendedCourses: [
        {
          title: "SOC Analyst Professional Program",
          to: "/courses/$slug" as const,
          params: { slug: "soc-analyst-professional" },
        },
        {
          title: "SIEM Engineering & Operations",
          to: "/courses/$slug" as const,
          params: { slug: "siem-engineering-operations" },
        },
      ],
      progression:
        "Prepares you for Tier 1 / Tier 2 SOC Analyst and Incident Response specialist roles.",
      to: "/programs/$slug" as const,
      params: { slug: "soc-analyst" },
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Master Ethical Hacking & VAPT",
      badge: "Offensive Track",
      audience: "Penetration testers, security auditors, and developers building secure systems.",
      skills: [
        "Authorized Reconnaissance & OSINT",
        "Vulnerability Validation",
        "OWASP Web Security",
        "Audit-Ready VAPT Reporting",
      ],
      recommendedCourses: [
        {
          title: "CEH v13 AI Ethical Hacking",
          to: "/courses/$slug" as const,
          params: { slug: "ceh-v13-ai-ethical-hacking" },
        },
        {
          title: "VAPT Professional Program",
          to: "/courses/$slug" as const,
          params: { slug: "vapt-professional" },
        },
      ],
      progression: "Prepares you for Ethical Hacker, Junior Penetration Tester, and AppSec roles.",
      to: "/programs/$slug" as const,
      params: { slug: "ethical-hacking" },
      icon: Terminal,
    },
    {
      number: "04",
      title: "Advance into Security Engineering",
      badge: "Engineering Track",
      audience: "Experienced analysts, infrastructure engineers, and systems architects.",
      skills: [
        "SIEM Pipeline Ingestion",
        "Detection as Code with Sigma",
        "Log Normalization & CIM",
        "Cloud Security Telemetry",
      ],
      recommendedCourses: [
        {
          title: "SIEM Engineering & Detection Operations",
          to: "/courses/$slug" as const,
          params: { slug: "siem-engineering-operations" },
        },
        {
          title: "SOC Analyst Professional Program",
          to: "/courses/$slug" as const,
          params: { slug: "soc-analyst-professional" },
        },
      ],
      progression:
        "Prepares you for Detection Engineer, SIEM Administrator, and Cloud Security roles.",
      to: "/courses/$slug" as const,
      params: { slug: "siem-engineering-operations" },
      icon: Cpu,
    },
  ];

  const methodologyPoints = [
    {
      title: "Expert-Led Learning",
      desc: "Courses are guided by active security practitioners with deep experience in enterprise SOCs and penetration testing.",
      icon: Users,
    },
    {
      title: "Hands-on Practical Labs",
      desc: "Over 60% of curriculum time is invested in interactive terminals, SIEM consoles, and isolated network ranges.",
      icon: Terminal,
    },
    {
      title: "Realistic Cyber Scenarios",
      desc: "Practice investigating simulated multi-stage attacks mirroring real enterprise breaches and APT campaigns.",
      icon: ShieldAlert,
    },
    {
      title: "Guided Technical Exercises",
      desc: "Structured step-by-step tasks ensure you build authentic muscle memory before tackling unassisted capstones.",
      icon: Compass,
    },
    {
      title: "Assessment-Driven Learning",
      desc: "Validate readiness through timed shift simulations, technical report reviews, and practical examinations.",
      icon: Award,
    },
    {
      title: "Career-Oriented Capability",
      desc: "Develop verified GitHub portfolios, technical documentation habits, and confidence for technical interviews.",
      icon: Rocket,
    },
  ];

  const learningSteps = [
    {
      step: "01",
      title: "Explore",
      desc: "Identify your target security role and diagnostic prerequisites.",
    },
    {
      step: "02",
      title: "Learn",
      desc: "Absorb core protocols, frameworks, and architectural principles.",
    },
    {
      step: "03",
      title: "Practice",
      desc: "Execute guided exercises inside virtual lab environments.",
    },
    {
      step: "04",
      title: "Assess",
      desc: "Solve unassisted scenarios under simulated shift conditions.",
    },
    {
      step: "05",
      title: "Build Skills",
      desc: "Document findings, compile incident reports, and refine detections.",
    },
    {
      step: "06",
      title: "Advance",
      desc: "Showcase verified capability to employers with a technical portfolio.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1">
        {/* Section 2: Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background via-card/50 to-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              {/* Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>CYBERSECURITY EDUCATION & PRACTICAL CYBER RANGE</span>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                  Learn to defend <br />
                  <span className="text-primary">what matters.</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Build real cybersecurity capabilities through expert-led training, practical labs,
                  industry scenarios, and structured learning pathways.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button asChild size="lg" className="h-12 px-6 gap-2 text-sm font-semibold">
                    <Link to="/courses">
                      <span>Explore Courses</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 px-6 gap-2 text-sm font-semibold"
                  >
                    <Link to="/cyber-range">
                      <span>Explore Cyber Range</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Real-world threat telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Enterprise SIEM & Range labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Practical shift assessments</span>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                  <img
                    src={labImage}
                    alt="Cybersecurity learners practice threat analysis inside a modern cyber range"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                    width={1536}
                    height={912}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl border border-border/80 bg-background/90 backdrop-blur-md flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Interactive Cyber Range</p>
                        <span className="text-[11px] text-muted-foreground">
                          Simulated SOC triage & VAPT environments
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] bg-primary/10 text-primary border-primary/20 shrink-0"
                    >
                      LIVE LABS
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Learning Pathways */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border" id="programs">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  STRUCTURED CAREER PATHWAYS
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Find Your Path from Curiosity to Capability
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Four proven learning sequences designed to build role-specific capability
                  step-by-step.
                </p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to="/programs" className="gap-1.5 text-xs">
                  <span>View All Programs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pathways.map((path) => {
                const Icon = path.icon;
                return (
                  <div
                    key={path.number}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary">{path.number}</span>
                        <Badge variant="secondary" className="text-[10px]">
                          {path.badge}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-base font-bold text-foreground leading-snug">
                          {path.title}
                        </h3>
                      </div>

                      <div className="space-y-1 text-xs">
                        <span className="font-semibold text-foreground text-[11px] block">
                          Target Audience:
                        </span>
                        <p className="text-muted-foreground leading-relaxed">{path.audience}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-border/80 text-xs">
                        <span className="font-semibold text-foreground text-[11px] block">
                          Skills Developed:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {path.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-border/80 text-xs">
                        <span className="font-semibold text-foreground text-[11px] block">
                          Progression Direction:
                        </span>
                        <p className="text-muted-foreground leading-relaxed text-[11px]">
                          {path.progression}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/80 mt-6">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between text-xs text-primary hover:text-primary hover:bg-primary/10 px-2"
                      >
                        <Link to={path.to} params={path.params}>
                          <span>Explore Pathway</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Featured Courses */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border bg-card/40"
          id="catalog"
        >
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  FLAGSHIP ACADEMY CURRICULUM
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Flagship Cybersecurity Courses
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Rigorous, instructor-led technical offerings with live virtual range lab
                  environments.
                </p>
              </div>
              <Button asChild className="gap-2">
                <Link to="/courses">
                  <span>Browse All Courses</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} featured={course.featured} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why CyberBodha */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                THE CYBERBODHA METHODOLOGY
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Why Learn with CyberBodha
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We believe security capability is proven in the terminal, not in multiple-choice
                memory drills.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {methodologyPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Student Testimonials */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border bg-card/30">
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span>AUTHENTIC STUDENT TESTIMONIALS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Trusted by Learners. Built Around Practical Skills.
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Feedback from learners who experienced CyberBodha training.
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="gap-1.5 text-xs">
                <Link to="/reviews">
                  <span>Read All Reviews</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {REVIEWS.map((review) => {
                const initials = review.studentName
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2);

                return (
                  <div
                    key={review.id}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className="flex items-center gap-1 text-amber-500"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3.5 w-3.5 ${
                                i < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-muted-foreground">{review.date}</span>
                      </div>

                      <blockquote className="text-xs text-foreground/90 leading-relaxed italic border-l-2 border-primary/40 pl-3">
                        "{review.reviewText}"
                      </blockquote>

                      {review.truncated && (
                        <p className="text-[10px] text-muted-foreground italic">
                          * Note: Excerpt preserved exactly as displayed on source record.
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                          {initials}
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-foreground leading-tight">
                            {review.studentName}
                          </h3>
                          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                            {review.course}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] text-muted-foreground border-border/80"
                      >
                        via {review.source}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Cyber Range Preview */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-card to-background"
          id="cyber-range"
        >
          <div className="mx-auto max-w-7xl space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  VIRTUAL CYBER RANGE
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Simulated Environments. Real Adversarial Telemetry.
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Step into realistic corporate networks, analyze multi-stage intrusions, and
                  isolate threats under simulated operational conditions.
                </p>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/cyber-range">
                  <span>Explore Cyber Range</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RANGE_LABS.slice(0, 3).map((lab) => (
                <div
                  key={lab.id}
                  className="rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-[11px] font-semibold border-primary/20 text-primary bg-primary/5"
                    >
                      {lab.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground">
                      {lab.estimatedMinutes} min
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{lab.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {lab.scenario}
                  </p>
                  <div className="pt-2 border-t border-border flex flex-wrap gap-1.5">
                    {lab.toolsUsed.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded bg-secondary px-2 py-0.5 text-[10px] text-secondary-foreground font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/80 bg-background/50 p-4 text-center text-xs text-muted-foreground">
              Note: Cyber Range environments are educational simulation sandboxes isolated from
              production systems.
            </div>
          </div>
        </section>

        {/* Section 7: Audience Programs */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border" id="training">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                FOR EVERY CYBERSECURITY STAKEHOLDER
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Programs Built for Real Audiences
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Tailored delivery models for career aspirants, academic institutions, and corporate
                security teams.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Individuals */}
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Individuals & Career Aspirants
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Build job-ready capabilities in SOC analysis, ethical hacking, and systems
                    defense through instructor-led weekend batches and cyber range access.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/90 pt-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Live instructor mentorship
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Hands-on virtual labs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Interview & portfolio guidance
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full justify-center text-xs">
                  <Link to="/courses">Explore Individual Courses</Link>
                </Button>
              </div>

              {/* Universities */}
              <div
                className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-7 space-y-6"
                id="universities"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Universities & Colleges</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Integrate practical Cyber Range laboratories, semester curriculum modules, and
                    faculty enablement into engineering and computer science programs.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/90 pt-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Turn-key cloud lab pods
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Semester-aligned curriculum
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Faculty enablement workshops
                    </li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full justify-center text-xs">
                  <Link to="/university-programs">Explore University Partnerships</Link>
                </Button>
              </div>

              {/* Corporate */}
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Corporate Teams & Enterprises
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Upskill your security operations center, SIEM engineering, and penetration
                    testing staff with customized cohort tracks and diagnostic benchmarking.
                  </p>
                  <ul className="space-y-1.5 text-xs text-foreground/90 pt-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Custom tool alignment
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Pre/post skill gap audits
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary" /> Dedicated private cohorts
                    </li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full justify-center text-xs">
                  <Link to="/corporate-training">Explore Corporate Upskilling</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Course Categories */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border bg-card/30">
          <div className="mx-auto max-w-7xl space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                BROWSE BY DOMAIN
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-1">Course Categories</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {COURSE_CATEGORIES.map((cat) => {
                const count = COURSES.filter((c) => c.category === cat).length;
                return (
                  <Link
                    key={cat}
                    to="/courses"
                    className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm"
                  >
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors block leading-snug">
                      {cat}
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-1 block">
                      {count} {count === 1 ? "Program" : "Programs"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Learning Journey */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                PROVEN METHODOLOGY
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Your Learning Journey
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                How our students progress from concept understanding to verified operational
                readiness.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {learningSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-border bg-card p-4 space-y-2 text-center"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Role Portals Demo Access */}
        <section
          className="px-4 py-14 sm:px-6 lg:px-8 border-b border-border bg-card/20"
          id="about"
        >
          <div className="mx-auto max-w-7xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  LEARNING PLATFORM ENTRY
                </span>
                <h2 className="text-xl font-bold text-foreground mt-0.5">
                  Role-Based Learning Workspaces
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">Preview illustrative dashboards</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/student"
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <strong className="text-sm font-bold text-foreground block">
                    Student Portal
                  </strong>
                  <span className="text-xs text-muted-foreground">
                    Active learning, courses & range labs
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary shrink-0" />
              </Link>
              <Link
                to="/instructor"
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <strong className="text-sm font-bold text-foreground block">
                    Instructor Portal
                  </strong>
                  <span className="text-xs text-muted-foreground">
                    Curriculum, batches & grading
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary shrink-0" />
              </Link>
              <Link
                to="/admin"
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <strong className="text-sm font-bold text-foreground block">Admin Portal</strong>
                  <span className="text-xs text-muted-foreground">
                    Cohorts, learners & platform settings
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: Call to Action */}
        <section
          className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background text-center"
          id="contact"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Your cybersecurity journey starts here.
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Build the confidence to meet today’s security challenges with expert guidance,
              hands-on practice, and verified skills.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button asChild size="lg" className="h-11 px-6 text-sm font-semibold">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <CourseEnquiryModal
                sourceContext="Homepage Bottom CTA"
                trigger={
                  <Button variant="outline" size="lg" className="h-11 px-6 text-sm font-semibold">
                    Contact CyberBodha
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>

      {/* Section 11: Footer */}
      <AcademyFooter />
    </div>
  );
}
