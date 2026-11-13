import { describe, expect, it } from "vitest";

import { leadSchema } from "./lead-schema";

const valid = {
  fullName: "Priya Sharma",
  email: "priya@example.com",
  phone: "+91 98765 43210",
  courseSlug: "soc-analyst-professional",
  learningObjective: "Career Transition into Cybersecurity",
  preferredFormat: "Live Weekend Cohort",
  message: "",
  sourceContext: "Contact page",
  submittedAt: new Date().toISOString(),
};

describe("leadSchema", () => {
  it("accepts a realistic enquiry", () => {
    const result = leadSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects a missing email", () => {
    const result = leadSchema.safeParse({ ...valid, email: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = leadSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a phone number that is too short", () => {
    const result = leadSchema.safeParse({ ...valid, phone: "1234" });
    expect(result.success).toBe(false);
  });

  it("defaults optional campaign fields", () => {
    const parsed = leadSchema.parse({ fullName: "A B", email: "a@b.co", phone: "9876543210" });
    expect(parsed.courseSlug).toBe("general");
    expect(parsed.sourceContext).toBe("website");
  });

  it("rejects an over-long message", () => {
    const result = leadSchema.safeParse({ ...valid, message: "x".repeat(2001) });
    expect(result.success).toBe(false);
  });
});
