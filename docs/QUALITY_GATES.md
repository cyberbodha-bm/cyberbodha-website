# CyberBodha Quality & Security Gates

## 1. Overview
CyberBodha enforces strict quality, security, and pedagogical gates across every pull request and release to ensure enterprise reliability and academic rigor.

---

## 2. Gate Matrix

| Gate | Tool / Check | Threshold | Enforcement |
| :--- | :--- | :--- | :--- |
| **Type Integrity** | `bun x tsc --noEmit` | 0 TypeScript errors | Blocking in CI & Pre-commit |
| **Automated Testing** | `bun test` | 100% Pass Rate (34+ tests) | Blocking in CI & Local |
| **Production Build** | `vite build` (Nitro SSR) | 0 Build Errors, all `.output` artifacts verified | Blocking in CI |
| **Secret Scanning** | Git / CI Scan | 0 API tokens or credentials in source code | Blocking |
| **Content Classification** | Schema validation | 100% of modules, labs, lessons mapped to 6 approved categories | Blocking in Test Suite |
| **Curriculum Compliance** | CEH v13 Contract | Exactly 20 sequential official EC-Council modules | Blocking in Test Suite |
| **ID Uniqueness** | `ceh-v13-curriculum.test.ts` | 0 duplicate module, lab, or question IDs | Blocking in Test Suite |
| **Performance Budget** | Nitro asset analyzer | Initial client chunk $< 400\text{ kB}$ gzip | Monitored |
| **Edge Routing** | Server redirect test | HTTP 301 www $\rightarrow$ apex preserving paths | Blocking in Test Suite |

---

## 3. Approved Content Classifications
Every learning asset in the platform must be classified into one of the following 6 standardized taxonomies:

1. **`Official Curriculum Mapping`**: Aligned directly with EC-Council CEH v13 official knowledge domains and exam blueprints.
2. **`CyberBodha Explanation`**: Proprietary conceptual breakdowns, real-world field analogies, and architectural deep-dives authored by CyberBodha instructors.
3. **`CyberBodha Supplementary Lab`**: Hands-on practical scenarios running on CyberBodha's virtual cyber range.
4. **`AI-Assisted Explanation`**: AI-augmented guidance, prompt engineering templates, and defensive triage workflows.
5. **`Practice Assessment`**: Module-level formative assessments, quizzes, and knowledge checks.
6. **`Certification Preparation`**: Blueprint mapping, question analysis, and exam strategy insights.

> [!IMPORTANT]
> Proprietary EC-Council courseware, copyrighted workbook text, or leaked exam braindumps are strictly prohibited. All lab environments and scenarios are original CyberBodha cyber range assets.
