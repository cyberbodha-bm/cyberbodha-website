# CEH v13 AI — Official Curriculum Alignment Report

**Date**: November 15, 2026  
**Auditor**: CyberBodha Technical Core Team  
**Course Target**: `https://cyberbodha.com/courses/ceh-v13-ai-ethical-hacking`  
**Repositories**:
- Repository A: `https://github.com/NaveenYadav27/cyberbodha-learning-academy.git`
- Repository B: `https://github.com/cyberbodha-bm/cyberbodha-website.git`

---

## 1. Executive Summary

This alignment establishes a single canonical curriculum contract across both CyberBodha repositories for the **EC-Council Certified Ethical Hacker (CEH v13 AI)** course.

Prior to this alignment, the course outline in `src/data/courses.ts` presented an incomplete 14-module syllabus that merged disparate topics (e.g. combined Scanning & Enumeration, combined Wireless & IoT) and omitted key official modules.

This release refactors the course structure to feature the complete, authoritative **20-module EC-Council CEH v13 sequence** with structured learning objectives, official syllabus topics, Cyber Range virtual lab mappings, AI ethical hacking integrations, and explicit content classifications.

---

## 2. Pre-Alignment Audit Findings

| Dimension | Previous State | Aligned Canonical State |
| :--- | :--- | :--- |
| **Module Count** | 14 Disconnected Modules | **Exactly 20 Official Modules** |
| **Module Numbering** | `Module 1` through `Module 14` | **`Module 01` through `Module 20`** |
| **Separation of Concerns** | Scanning & Enumeration merged | **Module 03 (Scanning)** and **Module 04 (Enumeration)** separated |
| **Wireless & IoT** | Wireless & IoT merged | **Module 16 (Wireless)** and **Module 18 (IoT/OT)** separated |
| **Mobile Security** | Omitted | **Module 17 (Hacking Mobile Platforms)** added |
| **Web Servers vs Apps** | Omitted Web Servers | **Module 13 (Web Servers)** and **Module 14 (Web Apps)** separated |
| **SQL Injection** | Buried in Web Fundamentals | **Module 15 (SQL Injection)** dedicated module |
| **Denial of Service** | Omitted | **Module 10 (Denial-of-Service)** dedicated module |
| **Session Hijacking** | Omitted | **Module 11 (Session Hijacking)** dedicated module |
| **Evading Defenses** | Omitted | **Module 12 (Evading IDS, Firewalls, Honeypots)** dedicated |
| **Content Classification** | Unlabeled | **6 Explicit Classification Badges** |
| **Virtual Lab Scope** | 4 General Bullets | **20 Dedicated Cyber Range Virtual Labs** |
| **Learner Workspace** | Basic Accordion | **Interactive 5-Tab Workspace with Progress Tracking** |

---

## 3. Architecture & Code Changes (Repository B)

### 3.1 Centralized Curriculum Contract (`src/data/ceh-v13-curriculum.ts`)
Created a typed data architecture containing:
- Complete typed interfaces (`CehModule`, `CehModuleLab`, `CehKnowledgeCheck`, `CehModuleLesson`, `ContentClassification`).
- `CEH_V13_METADATA`: accreditation, recommended hours, exam structure.
- `CEH_V13_MODULES`: complete dataset for all 20 modules with 10 structured sub-elements each.

### 3.2 Enhanced Course Model (`src/data/courses.ts`)
- Extended `CourseModule` interface with non-breaking optional fields (`officialNumber`, `learningObjectives`, `conceptExplanation`, `guidedLabs`, `aiAssistantFeatures`, `practiceChallenges`, `knowledgeChecks`, `summary`).
- Connected `ceh-v13-ai-ethical-hacking` course curriculum directly to `CEH_V13_MODULES`.
- Updated course metadata, skills, learning outcomes, lab highlights, and FAQs to reflect official CEH v13 AI coverage.

### 3.3 Interactive Module Workspace Component (`src/components/cyberbodha/CehCurriculumWorkspace.tsx`)
Implemented a reusable React component featuring:
- **Category Filter Pills**: Filter across 5 official domain groups.
- **Search & Deep Filter**: Instant search across titles, tools, topics, and AI features.
- **Local Progress Persistence**: Learner can mark modules as reviewed; progress is tracked via visual percentage bars.
- **5-Tab Sub-Workspace for Each Module**:
  1. *Official Topics & Objectives*: EC-Council topics and certification preparation objectives.
  2. *Concept Deep-Dive*: Practitioner conceptual breakdown and executive summary.
  3. *Cyber Range Labs*: Dedicated lab topologies, tools, and capture-the-flag challenges.
  4. *AI Security Features*: Prompt engineering, automated script auditing, and adversarial defense.
  5. *Knowledge Checks*: Interactive diagnostic questions with instant answer revelation and explanations.
- **Content Classification Badging**: Visual indicators on every element for complete transparency.

### 3.4 Course Page Route Integration (`src/routes/courses/$slug.tsx`)
- Updated `CourseDetailPage` to conditionally render the rich `CehCurriculumWorkspace` when viewing `ceh-v13-ai-ethical-hacking`.
- Preserved existing layout, breadcrumbs, action cards, enquiry modals, and footer for all courses.

### 3.5 Automated Test Suite (`src/test/ceh-v13-curriculum.test.ts`)
Added automated verification tests:
- Verifies exact module count of 20.
- Verifies sequential numbering (01 to 20).
- Verifies exact matching of official titles against EC-Council outline.
- Verifies structural completeness of all 10 sub-elements across all 20 modules.
- Verifies guided lab environment definitions and tool lists.
- Verifies runtime loader contract on `ceh-v13-ai-ethical-hacking`.

---

## 4. Lovable & Repository Safety Adherence

- **No History Rewrites**: Zero force-pushes or rebases.
- **Branch Isolation**: Implemented on dedicated feature branch `feat/ceh-v13-curriculum-alignment-repo-b`.
- **Framework Preservation**: Maintained TanStack Start, React 19, Vite, and Nitro architecture.
- **Package Integrity**: Built strictly with Bun and existing lockfile.
- **Type Safety**: Passed `bun x tsc --noEmit` with 0 type errors.
- **Test Results**: All 29 unit and integration tests passed cleanly.

---

## 5. Next Steps

1. Submit pull request for Repository B (`cyberbodha-bm/cyberbodha-website`).
2. Apply the canonical curriculum contract to Repository A (`NaveenYadav27/cyberbodha-learning-academy`).
3. Conduct peer review before merging to production `main`.
