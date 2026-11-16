import { absoluteUrl, SITE_NAME } from "@/lib/site";
import type { Program } from "@/data/programs";

/**
 * Course + Offer structured data for a programme page.
 * Prices come from the programme record, so the markup cannot drift from the page.
 * JSON-LD lives in the body, which Google and Bing both accept.
 */
export function ProgramSchema({ program }: { program: Program }) {
  const investment = program.investment;
  if (!investment) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.overview,
    url: absoluteUrl(`/programs/${program.slug}`),
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: absoluteUrl("/"),
    },
    inLanguage: "en-IN",
    teaches: program.skills.slice(0, 8),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      ...(program.duration
        ? { courseWorkload: `PT${program.duration.match(/\d+/)?.[0] ?? "60"}H` }
        : {}),
      location: { "@type": "Place", name: "Hyderabad, Telangana, India" },
    },
    offers: investment.options.map((option) => ({
      "@type": "Offer",
      name: option.name,
      price: option.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      category: "Paid",
      url: absoluteUrl(`/programs/${program.slug}`),
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
