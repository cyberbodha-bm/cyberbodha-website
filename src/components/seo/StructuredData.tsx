import {
  BUSINESS_DETAILS,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "@/lib/site";

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "CyberBodha Academy",
  url: SITE_URL,
  logo: absoluteUrl("/cyberbodha-logo.png"),
  image: absoluteUrl("/cyberbodha-logo.png"),
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_DETAILS.streetAddress,
    addressLocality: BUSINESS_DETAILS.city,
    addressRegion: BUSINESS_DETAILS.region,
    postalCode: BUSINESS_DETAILS.postalCode,
    addressCountry: BUSINESS_DETAILS.country,
  },
  areaServed: {
    "@type": "City",
    name: BUSINESS_DETAILS.city,
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@type": "EducationalOrganization", name: SITE_NAME, url: SITE_URL },
};

/**
 * JSON-LD is rendered in the body, which Google and Bing both accept.
 * Keep every value plain data — no user input flows into these objects.
 */
export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
