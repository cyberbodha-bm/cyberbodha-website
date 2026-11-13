import { createServerFn } from "@tanstack/react-start";
import { type LeadInput, leadSchema } from "./lead-schema";

export type { LeadInput };

export interface LeadResult {
  delivered: boolean;
  id?: string;
  via?: "d1" | "kv" | "webhook";
  reason?: "storage_not_configured" | "storage_error";
}

interface D1Statement {
  bind(...values: unknown[]): D1Statement;
  run(): Promise<unknown>;
}

interface D1Database {
  prepare(query: string): D1Statement;
}

interface KVNamespace {
  put(key: string, value: string): Promise<void>;
}

interface WorkerBindings {
  DB?: D1Database;
  LEADS?: KVNamespace;
  LEAD_WEBHOOK_URL?: string;
}

/**
 * Cloudflare bindings are not available through process.env. They are read from the
 * `cloudflare:workers` module, which only exists inside a Worker — so this is guarded
 * and returns undefined during local Node development.
 */
async function getWorkerBindings(): Promise<WorkerBindings | undefined> {
  try {
    const specifier = "cloudflare:workers";
    const mod = (await import(/* @vite-ignore */ specifier)) as { env?: WorkerBindings };
    return mod.env;
  } catch {
    return undefined;
  }
}

function insertSql(record: { id: string; createdAt: string; data: LeadInput }): {
  sql: string;
  values: unknown[];
} {
  return {
    sql: `INSERT INTO leads (
      id, created_at, full_name, email, phone, course_slug,
      learning_objective, preferred_format, message, source_context,
      page_url, referrer
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    values: [
      record.id,
      record.createdAt,
      record.data.fullName,
      record.data.email,
      record.data.phone,
      record.data.courseSlug,
      record.data.learningObjective,
      record.data.preferredFormat,
      record.data.message,
      record.data.sourceContext,
      record.data.pageUrl ?? "",
      record.data.referrer ?? "",
    ],
  };
}

async function storeLead(data: LeadInput): Promise<LeadResult> {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const bindings = await getWorkerBindings();

  if (bindings?.DB) {
    const { sql, values } = insertSql({ id, createdAt, data });
    await bindings.DB.prepare(sql)
      .bind(...values)
      .run();
    return { delivered: true, id, via: "d1" };
  }

  if (bindings?.LEADS) {
    await bindings.LEADS.put(`lead:${createdAt}:${id}`, JSON.stringify({ id, createdAt, ...data }));
    return { delivered: true, id, via: "kv" };
  }

  const webhookUrl = bindings?.LEAD_WEBHOOK_URL ?? process.env["LEAD_WEBHOOK_URL"];
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, createdAt, ...data }),
    });
    if (!response.ok) {
      throw new Error(`Lead webhook responded with ${response.status}`);
    }
    return { delivered: true, id, via: "webhook" };
  }

  // Nothing is configured. Say so plainly: the client then offers WhatsApp instead of
  // pretending the enquiry was received.
  console.warn(
    "[cyberbodha] No lead storage configured. Bind a D1 database as DB, a KV namespace as LEADS, or set LEAD_WEBHOOK_URL.",
  );
  return { delivered: false, reason: "storage_not_configured" };
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }): Promise<LeadResult> => {
    try {
      return await storeLead(data);
    } catch (error) {
      console.error("[cyberbodha] Failed to store lead:", error);
      return { delivered: false, reason: "storage_error" };
    }
  });
