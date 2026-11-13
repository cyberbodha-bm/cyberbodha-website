/**
 * Single source of truth for public site constants.
 * Used by page metadata, structured data, and the enquiry form fallback.
 */
export const SITE_URL = "https://cyberbodha.com";
export const SITE_NAME = "CyberBodha";
export const SITE_TAGLINE = "Cybersecurity Education, Training & Cyber Range";
export const SITE_DESCRIPTION =
  "Cybersecurity training academy and practical cyber range in Hyderabad, India. Mentor-led SOC, CEH, VAPT, SIEM and cloud security tracks built on hands-on labs.";

export const CONTACT_EMAIL = "admissions@cyberbodha.com";
export const CONTACT_PHONE = "+91 90638 09271";
export const CONTACT_PHONE_E164 = "+919063809271";
export const WHATSAPP_URL = "https://wa.me/919063809271";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61596319388118",
  instagram: "https://www.instagram.com/cyberbodha95",
} as const;

export const BUSINESS_DETAILS = {
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
  streetAddress: "Cybersecurity Learning & Range Center",
  postalCode: "500001",
} as const;

/** Build an absolute URL for canonical links, Open Graph, and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
