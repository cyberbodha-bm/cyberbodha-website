import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Star,
} from "lucide-react";
import { AcademyHeader } from "@/components/cyberbodha/AcademyHeader";
import { AcademyFooter } from "@/components/cyberbodha/AcademyFooter";
import { CourseEnquiryModal } from "@/components/cyberbodha/CourseEnquiryModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { REVIEWS, REVIEWS_AGGREGATE } from "@/data/reviews";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "CyberBodha Student Reviews | Cybersecurity Training Feedback" },
      {
        name: "description",
        content:
          "Read authentic learner feedback about CyberBodha cybersecurity training, SOC Analyst programs, and practical learning experiences.",
      },
      { property: "og:title", content: "CyberBodha Student Reviews | Authentic Feedback" },
      {
        property: "og:description",
        content:
          "Read authentic learner feedback about CyberBodha cybersecurity training, SOC Analyst programs, and practical learning experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: absoluteUrl("/reviews") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/reviews") }],
  }),
  component: ReviewsPage,
});

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <AcademyHeader />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-card via-card to-background px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Reviews</span>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/5 text-xs font-semibold"
                >
                  <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
                  AUTHENTIC STUDENT FEEDBACK
                </Badge>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                  Real Learners. Real Experiences.
                </h1>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Discover what learners say about their CyberBodha training experience, from
                  hands-on practical exercises to patient, real-world mentorship.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Verified UrbanPro Review Source</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Unedited Student Testimonials</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>No Synthetic Or Paid Reviews</span>
                  </div>
                </div>
              </div>

              {/* Rating Aggregate Summary Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Verified Review Aggregate
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      Source: {REVIEWS_AGGREGATE.sourceName}
                    </Badge>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-foreground tracking-tight">
                      {REVIEWS_AGGREGATE.overallRating.toFixed(1)}
                    </span>
                    <div>
                      <StarRating rating={5} />
                      <span className="text-xs text-muted-foreground mt-1 block">
                        Based on <strong>{REVIEWS_AGGREGATE.totalReviewsReported} reviews</strong>{" "}
                        on {REVIEWS_AGGREGATE.sourceName}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/80">
                    {REVIEWS_AGGREGATE.sourceNote} The excerpts below reflect verified student
                    submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews List Section */}
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Verified Student Reviews</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Excerpts from verified learners who participated in CyberBodha training programs.
                </p>
              </div>

              <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary" />
                <span>100% 5-Star Student Satisfaction</span>
              </div>
            </div>

            {/* Review Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5 transition-all duration-200 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="space-y-4">
                    {/* Top row: stars + date */}
                    <div className="flex items-center justify-between">
                      <StarRating rating={review.rating} />
                      <span className="text-[11px] text-muted-foreground">{review.date}</span>
                    </div>

                    {/* Review text */}
                    <blockquote className="text-xs text-foreground/90 leading-relaxed italic border-l-2 border-primary/40 pl-3">
                      "{review.reviewText}"
                    </blockquote>

                    {review.truncated && (
                      <p className="text-[10px] text-muted-foreground italic">
                        * Note: Text preserved as displayed on the original source record.
                      </p>
                    )}
                  </div>

                  {/* Student info */}
                  <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                        {getInitials(review.studentName)}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-foreground leading-snug">
                          {review.studentName}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                          {review.course}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[10px] text-muted-foreground border-border/80 shrink-0"
                    >
                      via {review.source}
                    </Badge>
                  </div>
                </article>
              ))}
            </div>

            {/* Sourcing Transparency Note */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>REVIEW AUTHENTICITY & VERIFICATION POLICY</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                How CyberBodha Manages Student Reviews
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We believe in complete transparency. CyberBodha does not fabricate testimonials,
                generate artificial ratings, or solicit incentivized reviews. The reviews showcased
                on this page are verbatim submissions from learners registered through our profile
                on UrbanPro (120 total reviews, 5.0/5 average rating). As additional batches
                complete their practical examinations, new verified reviews are added with full
                attribution.
              </p>
            </div>

            {/* Bottom Call to Action */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-card via-card to-primary/5 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-xl font-bold text-foreground">
                  Ready to start your cybersecurity learning journey?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join a community of learners mastering SOC operations, threat intelligence,
                  ethical hacking, and practical cyber range defense.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <Link to="/courses">
                    <span>Explore CyberBodha Courses</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <CourseEnquiryModal
                  sourceContext="Reviews Page Bottom CTA"
                  trigger={<Button variant="outline">Enquire About Training</Button>}
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
