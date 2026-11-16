# CEH v13 AI — Cross-Repository Consistency Audit & Specification

**Date**: November 15, 2026  
**Subject**: Canonical Curriculum Synchronization Across Repositories  
**Target Entities**:
- **Repository A**: `https://github.com/NaveenYadav27/cyberbodha-learning-academy.git` (Lovable origin)
- **Repository B**: `https://github.com/cyberbodha-bm/cyberbodha-website.git` (Target repository)

---

## 1. Cross-Repository Alignment Contract

Both repositories represent the CyberBodha learning academy and public web portal. To eliminate curriculum fragmentation, competing module numbering, or conflicting course presentations, both repositories adhere to this canonical specification:

```
CyberBodha Canonical CEH v13 AI Architecture
  └── Course: /courses/ceh-v13-ai-ethical-hacking
       └── Canonical 20-Module Sequence (Modules 01 to 20)
            ├── Official Curriculum Topics (EC-Council CEH v13 Scope)
            ├── Learning Objectives (Certification Preparation)
            ├── Lessons (Structured Concept Breakdown)
            ├── Concept Explanations (CyberBodha Engineering Notes)
            ├── AI Learning Assistant (Ethical AI Prompts & Adversarial Defense)
            ├── Guided Labs (Dedicated Virtual Cyber Range Topologies)
            ├── Practice Challenges (CTF Flag Captures)
            ├── Knowledge Checks (Interactive Diagnostic Scenarios)
            ├── Module Assessment (Outcome Benchmark)
            ├── Module Summary (Core Takeaways)
            └── Learner Progress (Client-Side Storage Tracking)
```

---

## 2. Comparative Matrix: Repository A vs. Repository B

| Curriculum / Architectural Feature | Repository A Target | Repository B Target | Parity Status |
| :--- | :---: | :---: | :---: |
| **Course Route** | `/courses/ceh-v13-ai-ethical-hacking` | `/courses/ceh-v13-ai-ethical-hacking` | **Identical** |
| **Total Official Modules** | 20 | 20 | **Identical** |
| **Module Numbering** | `Module 01` to `Module 20` | `Module 01` to `Module 20` | **Identical** |
| **Official Module Titles** | 100% EC-Council Aligned | 100% EC-Council Aligned | **Identical** |
| **Module Workspace Sub-Tabs** | 5 Interactive Tabs per Module | 5 Interactive Tabs per Module | **Identical** |
| **Cyber Range Lab Environments** | 20 Distinct Scenarios | 20 Distinct Scenarios | **Identical** |
| **AI Hacking & Defense Workflows** | 20 Module Integrations | 20 Module Integrations | **Identical** |
| **Interactive Self-Checks** | Built-in Diagnostic Quizzes | Built-in Diagnostic Quizzes | **Identical** |
| **Content Classification Badges** | 6 Formal Categories | 6 Formal Categories | **Identical** |
| **Learner Progress Tracker** | Client LocalStorage Persisted | Client LocalStorage Persisted | **Identical** |
| **Lead Capture & Enquiry Modals** | Integrated Enquire Button | Integrated Enquire Button | **Identical** |

---

## 3. Strict Guidelines for Dual Maintenance

1. **No Proprietary Courseware Duplication**:
   Neither repository shall reproduce copyrighted EC-Council proprietary courseware text, leaked exam dumps, or unauthorized intellectual property. Content is strictly limited to authorized curriculum mapping, standard industry protocols, and original CyberBodha cyber range lab exercises.

2. **Classification Transparency**:
   All educational assets in both repositories must clearly display their content classification badge:
   - `Official Curriculum Mapping`
   - `CyberBodha Explanation`
   - `CyberBodha Supplementary Lab`
   - `AI-Assisted Explanation`
   - `Practice Assessment`
   - `Certification Preparation`

3. **Independent Deployment Safety**:
   - Repository A tracks `origin/main` for Lovable synchronization.
   - Repository B tracks `cyberbodha-bm/main` for direct Cloudflare Workers and D1 production deployment.
   - Feature branches are used in both repositories (`feat/ceh-v13-curriculum-alignment-repo-a` and `feat/ceh-v13-curriculum-alignment-repo-b`) with zero history rewriting.

---

## 4. Verification Checkpoints

- [x] Both repositories share identical `docs/CEHV13_CANONICAL_CURRICULUM.md`.
- [x] Both repositories use identical `src/data/ceh-v13-curriculum.ts`.
- [x] Both course pages resolve cleanly to `/courses/ceh-v13-ai-ethical-hacking`.
- [x] All 20 modules render without console errors or broken navigation.
- [x] Automated test suites pass on both branches.
