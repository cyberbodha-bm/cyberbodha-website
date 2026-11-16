type LeadEvent = {
  course?: string;
  format?: string;
  source?: string;
  value?: number;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * A visitor opened a WhatsApp chat. Meta's standard `Contact` event, so the click can feed
 * a retargeting audience and be reported in Ads Manager next to form leads.
 */
export function trackContact({ course, source }: Pick<LeadEvent, "course" | "source"> = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    content_name: course || "general",
    contact_channel: "whatsapp",
    lead_source: source || "website",
  };

  try {
    window.fbq?.("track", "Contact", payload);
  } catch {
    /* pixel not available */
  }

  try {
    window.gtag?.("event", "contact", payload);
  } catch {
    /* gtag not available */
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", ...payload });
  } catch {
    /* dataLayer not available */
  }
}

/**
 * Fire the same lead event on Meta Pixel, GA4, and GTM.
 * Every call is guarded, so the site keeps working when tags are not installed.
 */
export function trackLead({ course, format, source, value }: LeadEvent = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    content_name: course || "general",
    content_category: format || "unspecified",
    lead_source: source || "website",
  };

  try {
    window.fbq?.("track", "Lead", payload);
  } catch {
    /* pixel not available */
  }

  try {
    window.gtag?.("event", "generate_lead", {
      ...payload,
      currency: "INR",
      value: value ?? 0,
    });
  } catch {
    /* gtag not available */
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead_submit", ...payload });
  } catch {
    /* dataLayer not available */
  }
}
