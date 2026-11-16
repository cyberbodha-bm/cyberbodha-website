import { describe, expect, it } from "vitest";
import { PROGRAMS, getProgramBySlug, programWhatsappMessage } from "@/data/programs";
import { WHATSAPP_URL, whatsappLink } from "@/lib/site";

describe("programme data", () => {
  it("gives every programme its own lab highlights", () => {
    for (const program of PROGRAMS) {
      expect(program.labHighlights, program.slug).toHaveLength(3);
      for (const item of program.labHighlights) {
        expect(item.title.trim(), program.slug).not.toBe("");
        expect(item.note.trim(), program.slug).not.toBe("");
      }
    }
  });

  it("keeps SOC-only lab wording off the ethical hacking page", () => {
    const notes = getProgramBySlug("ethical-hacking")!
      .labHighlights.map((i) => i.note)
      .join(" ");
    expect(notes).not.toMatch(/sysmon|triage/i);
  });

  it("names CEH v13 in the campaign landing page headline and description", () => {
    const program = getProgramBySlug("ethical-hacking")!;
    expect(program.title).toMatch(/CEH v13/);
    expect(program.overview).toMatch(/CEH v13/);
    expect(program.duration).toMatch(/60 hours/);
  });
});

describe("WhatsApp enquiry link", () => {
  it("pre-fills a message naming the programme", () => {
    const program = getProgramBySlug("ethical-hacking")!;
    const url = new URL(whatsappLink(programWhatsappMessage(program)));
    expect(url.origin + url.pathname).toBe(WHATSAPP_URL);
    expect(url.searchParams.get("text")).toContain("CEH v13 Ethical Hacking Training");
  });
});

describe("CEH v13 pricing copy", () => {
  it("says the certification track includes the exam voucher", () => {
    const investment = getProgramBySlug("ethical-hacking")!.investment!;
    const certification = investment.options.find((o) => o.name === "Training + Certification")!;
    expect(certification.price).toBe("₹45,000");
    expect(certification.includes).toMatch(/exam voucher/i);
    expect(investment.note).toMatch(/includes the CEH v13 exam voucher/i);
    expect(investment.note).not.toMatch(/separate terms/i);
  });
});
