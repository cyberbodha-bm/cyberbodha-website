import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Filter,
  SlidersHorizontal,
  BookOpen,
  Sparkles,
  X,
  ChevronRight,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseCard } from "@/components/cyberbodha/CourseCard";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COURSES, COURSE_CATEGORIES, type CourseCategory, type CourseLevel } from "@/data/courses";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Course Catalog | CyberBodha Learning Academy" },
      {
        name: "description",
        content:
          "Explore practical, lab-driven cybersecurity courses covering SOC Operations, Ethical Hacking, VAPT, SIEM Engineering, and Linux Defense.",
      },
      { property: "og:title", content: "Cybersecurity Course Catalog | CyberBodha" },
      {
        property: "og:description",
        content:
          "Explore practical, lab-driven cybersecurity courses covering SOC Operations, Ethical Hacking, VAPT, SIEM Engineering, and Linux Defense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/courses") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/courses") }],
  }),
  component: CourseCatalogPage,
});

const LEVELS: CourseLevel[] = [
  "Foundation",
  "Foundation to Professional",
  "Foundation to Advanced",
  "Intermediate",
  "Intermediate to Advanced",
  "Foundation to Job Readiness",
];

function CourseCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "modules" | "title">("featured");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Search filter
      const matchesSearch =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;

      // Level filter
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === "modules") return b.curriculum.length - a.curriculum.length;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      // default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const hasActiveFilters =
    searchQuery !== "" || selectedCategory !== "all" || selectedLevel !== "all";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevel("all");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card to-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Courses</span>
            </div>

            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                PRACTICAL CYBERSECURITY TRAINING
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Explore the Course Catalog
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Every course is built around authentic security tasks: analyzing logs, hunting
                anomalies, conducting authorized vulnerability testing, and defending systems in
                realistic cyber range environments.
              </p>
            </div>

            {/* Search and Quick Filters Bar */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 items-center">
              {/* Search input */}
              <div className="relative md:col-span-6">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by topic, tool (e.g. Wazuh, Splunk, Nmap), or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Category dropdown */}
              <div className="md:col-span-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by category"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Categories ({COURSES.length})</option>
                  {COURSE_CATEGORIES.map((cat) => {
                    const count = COURSES.filter((c) => c.category === cat).length;
                    return (
                      <option key={cat} value={cat}>
                        {cat} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Sort by dropdown */}
              <div className="md:col-span-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "modules" | "title")}
                  aria-label="Sort courses"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="featured">Sort: Featured First</option>
                  <option value="modules">Sort: Most In-Depth Modules</option>
                  <option value="title">Sort: Course Title (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Category pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-muted-foreground mr-1">Filter category:</span>
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All Categories
              </button>
              {COURSE_CATEGORIES.map((cat) => {
                const count = COURSES.filter((c) => c.category === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? "all" : cat)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="ml-auto inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                >
                  <X className="h-3 w-3" />
                  Reset all filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Course Grid Results */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-muted-foreground">
                Showing <strong>{filteredCourses.length}</strong>{" "}
                {filteredCourses.length === 1 ? "course" : "courses"}
              </p>
              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>All programs include dedicated Cyber Range virtual lab environments</span>
              </div>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} featured={course.featured} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border p-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/60" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  No matching courses found
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                  We couldn't find any courses matching your criteria "{searchQuery}". Try adjusting
                  your keywords or clearing the category filters.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                  <CourseEnquiryModal
                    sourceContext="Empty Catalog Search Request"
                    trigger={<Button size="sm">Request a Custom Curriculum</Button>}
                  />
                </div>
              </div>
            )}

            {/* Bottom Consultation Box */}
            <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-xl font-bold text-foreground">
                  Unsure which program fits your current skill level?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our technical advisors can review your background in systems, networking, or
                  software engineering and recommend the optimal learning sequence.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <CourseEnquiryModal
                  sourceContext="Catalog Bottom Advisor Consultation"
                  trigger={
                    <Button className="gap-2">
                      <span>Talk to Training Advisor</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  }
                />
                <Button asChild variant="outline">
                  <Link to="/cyber-range">Explore Range Labs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />
    </div>
  );
}
