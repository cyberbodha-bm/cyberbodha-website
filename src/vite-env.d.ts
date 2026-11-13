/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public endpoint that receives enquiry form submissions (JSON POST). */
  readonly VITE_LEAD_ENDPOINT?: string;
  /** Meta Pixel ID, e.g. "123456789012345". */
  readonly VITE_META_PIXEL_ID?: string;
  /** GA4 measurement ID, e.g. "G-XXXXXXXXXX". */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Facebook domain verification token for cyberbodha.com. */
  readonly VITE_FACEBOOK_DOMAIN_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Cloudflare Workers module: exposes bindings inside the Worker runtime only. */
declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}
