import { describe, it, expect } from "vitest";
import { CEH_V13_MODULES, CEH_V13_METADATA } from "../data/ceh-v13-curriculum";
import { getCourseBySlug } from "../data/courses";

describe("CEH v13 AI Canonical Curriculum Contract", () => {
  it("contains exactly 20 official modules", () => {
    expect(CEH_V13_MODULES.length).toBe(20);
    expect(CEH_V13_METADATA.totalOfficialModules).toBe(20);
  });

  it("verifies sequential module numbers from 1 to 20", () => {
    CEH_V13_MODULES.forEach((mod, idx) => {
      expect(mod.number).toBe(idx + 1);
      expect(mod.officialNumber).toBe(`Module ${String(idx + 1).padStart(2, "0")}`);
    });
  });

  it("verifies official module titles match the canonical EC-Council outline", () => {
    const expectedTitles = [
      "Introduction to Ethical Hacking",
      "Footprinting and Reconnaissance",
      "Scanning Networks",
      "Enumeration",
      "Vulnerability Analysis",
      "System Hacking",
      "Malware Threats",
      "Sniffing",
      "Social Engineering",
      "Denial-of-Service",
      "Session Hijacking",
      "Evading IDS, Firewalls, and Honeypots",
      "Hacking Web Servers",
      "Hacking Web Applications",
      "SQL Injection",
      "Hacking Wireless Networks",
      "Hacking Mobile Platforms",
      "IoT and OT Hacking",
      "Cloud Computing",
      "Cryptography",
    ];

    CEH_V13_MODULES.forEach((mod, idx) => {
      expect(mod.officialTitle).toBe(expectedTitles[idx]);
    });
  });

  it("verifies every module contains complete workspace elements", () => {
    CEH_V13_MODULES.forEach((mod) => {
      expect(mod.learningObjectives.length).toBeGreaterThanOrEqual(3);
      expect(mod.officialTopics.length).toBeGreaterThanOrEqual(4);
      expect(mod.lessons.length).toBeGreaterThanOrEqual(2);
      expect(mod.conceptExplanation.length).toBeGreaterThan(30);
      expect(mod.aiAssistantFeatures.length).toBeGreaterThanOrEqual(2);
      expect(mod.guidedLabs.length).toBeGreaterThanOrEqual(1);
      expect(mod.practiceChallenges.length).toBeGreaterThanOrEqual(1);
      expect(mod.knowledgeChecks.length).toBeGreaterThanOrEqual(1);
      expect(mod.moduleAssessment.length).toBeGreaterThan(10);
      expect(mod.summary.length).toBeGreaterThan(15);
      expect(mod.classification).toBe("Official Curriculum Mapping");
    });
  });

  it("verifies guided labs have environments, scenarios, and tools", () => {
    CEH_V13_MODULES.forEach((mod) => {
      mod.guidedLabs.forEach((lab) => {
        expect(lab.title.length).toBeGreaterThan(5);
        expect(lab.environment.length).toBeGreaterThan(5);
        expect(lab.scenario.length).toBeGreaterThan(10);
        expect(lab.tools.length).toBeGreaterThanOrEqual(1);
        expect(lab.classification).toBe("CyberBodha Supplementary Lab");
      });
    });
  });

  it("verifies the course page data for ceh-v13-ai-ethical-hacking loads all 20 modules", () => {
    const course = getCourseBySlug("ceh-v13-ai-ethical-hacking");
    expect(course).toBeDefined();
    if (!course) return;
    expect(course.curriculum.length).toBe(20);
    const firstMod = course.curriculum[0];
    const lastMod = course.curriculum[19];
    expect(firstMod?.title).toContain("Module 01: Introduction to Ethical Hacking");
    expect(lastMod?.title).toContain("Module 20: Cryptography");
  });

  it("verifies no duplicate numbers, lesson IDs, lab IDs, or question IDs", () => {
    const moduleNumbers = new Set<number>();
    const officialNumbers = new Set<string>();
    const lessonIds = new Set<string>();
    const labIds = new Set<string>();
    const questionIds = new Set<string>();

    CEH_V13_MODULES.forEach((mod) => {
      expect(moduleNumbers.has(mod.number)).toBe(false);
      moduleNumbers.add(mod.number);

      expect(officialNumbers.has(mod.officialNumber)).toBe(false);
      officialNumbers.add(mod.officialNumber);

      mod.lessons.forEach((lesson) => {
        expect(lessonIds.has(lesson.id)).toBe(false);
        lessonIds.add(lesson.id);
      });

      mod.guidedLabs.forEach((lab) => {
        expect(labIds.has(lab.id)).toBe(false);
        labIds.add(lab.id);
      });

      mod.knowledgeChecks.forEach((kc) => {
        expect(questionIds.has(kc.id)).toBe(false);
        questionIds.add(kc.id);
      });
    });

    expect(moduleNumbers.size).toBe(20);
    expect(officialNumbers.size).toBe(20);
    expect(lessonIds.size).toBeGreaterThanOrEqual(40);
    expect(labIds.size).toBeGreaterThanOrEqual(20);
    expect(questionIds.size).toBeGreaterThanOrEqual(20);
  });

  it("verifies all approved content classifications are strictly compliant", () => {
    const validClassifications = new Set([
      "Official Curriculum Mapping",
      "CyberBodha Explanation",
      "CyberBodha Supplementary Lab",
      "AI-Assisted Explanation",
      "Practice Assessment",
      "Certification Preparation",
    ]);

    CEH_V13_MODULES.forEach((mod) => {
      expect(validClassifications.has(mod.classification)).toBe(true);

      mod.guidedLabs.forEach((lab) => {
        expect(validClassifications.has(lab.classification)).toBe(true);
      });

      mod.lessons.forEach((lesson) => {
        expect(validClassifications.has(lesson.classification)).toBe(true);
      });

      mod.knowledgeChecks.forEach((kc) => {
        expect(validClassifications.has(kc.classification)).toBe(true);
      });
    });
  });

  it("verifies all 5 canonical CEH categories are comprehensively covered", () => {
    const categoryCounts: Record<string, number> = {};

    CEH_V13_MODULES.forEach((mod) => {
      categoryCounts[mod.category] = (categoryCounts[mod.category] || 0) + 1;
    });

    expect(Object.keys(categoryCounts).length).toBe(5);
    expect(categoryCounts["Foundations & Recon"]).toBeGreaterThan(0);
    expect(categoryCounts["Network & System Exploitation"]).toBeGreaterThan(0);
    expect(categoryCounts["Offensive Web & Apps"]).toBeGreaterThan(0);
    expect(categoryCounts["Specialized Platforms & Cloud"]).toBeGreaterThan(0);
    expect(categoryCounts["Defensive Defense & Crypto"]).toBeGreaterThan(0);
  });

  it("verifies knowledge checks have valid questions, options, and answer indices", () => {
    CEH_V13_MODULES.forEach((mod) => {
      mod.knowledgeChecks.forEach((kc) => {
        expect(kc.question.length).toBeGreaterThan(15);
        expect(kc.options.length).toBeGreaterThanOrEqual(3);
        expect(kc.answerIndex).toBeGreaterThanOrEqual(0);
        expect(kc.answerIndex).toBeLessThan(kc.options.length);
        expect(kc.explanation.length).toBeGreaterThan(15);
      });
    });
  });

  it("verifies AI assistant features provide descriptive prompt guidance across all modules", () => {
    CEH_V13_MODULES.forEach((mod) => {
      expect(mod.aiAssistantFeatures.length).toBeGreaterThanOrEqual(2);
      mod.aiAssistantFeatures.forEach((feat) => {
        expect(typeof feat).toBe("string");
        expect(feat.length).toBeGreaterThan(15);
      });
    });
  });
});
