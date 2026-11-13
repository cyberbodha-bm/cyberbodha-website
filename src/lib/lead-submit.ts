import { submitEnquiry } from "./lead-actions";

export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  courseSlug: string;
  learningObjective: string;
  preferredFormat: string;
  message: string;
  sourceContext: string;
  submittedAt: string;
}

export interface LeadResult {
  ok: boolean;
  /** True only when the lead actually reached durable storage. */
  delivered: boolean;
  reason?: string;
}

/**
 * Optional override. Leave unset to use the built-in `/api` server function, which stores
 * leads in D1, KV, or a webhook (see src/server/leads.ts).
 */
const EXTERNAL_ENDPOINT = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined)?.trim();

export function isLeadEndpointConfigured(): boolean {
  return Boolean(EXTERNAL_ENDPOINT);
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const body = {
    ...payload,
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  };

  if (EXTERNAL_ENDPOINT) {
    const response = await fetch(EXTERNAL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Lead endpoint responded with ${response.status}`);
    }
    return { ok: true, delivered: true };
  }

  const result = await submitEnquiry({ data: body });
  return result.delivered
    ? { ok: true, delivered: true }
    : { ok: true, delivered: false, reason: result.reason ?? "storage_not_configured" };
}
