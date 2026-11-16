# CyberBodha SDLC Operating Process

## 1. Overview & Principles
This document defines the autonomous Software Development Life Cycle (SDLC) process for CyberBodha platforms across:
- **Repository A (Lovable Origin):** `https://github.com/NaveenYadav27/cyberbodha-learning-academy.git`
- **Repository B (Production / Target):** `https://github.com/cyberbodha-bm/cyberbodha-website.git`
- **Production Endpoint:** `https://cyberbodha.com`

### Operating Philosophy
1. **Never Stop at Code Generation:** Every feature, bug fix, or refactor must proceed through unit/integration testing, type checking, build verification, CI/CD validation, and post-deployment health checks.
2. **Dual-Repository Integrity:** Both repositories maintain parity for curriculum contracts, course models, and public branding while honoring independent deployment pipelines and Lovable synchronization constraints.
3. **Zero-Destructive Operations:** Never force-push, rewrite published Git history, or circumvent quality gates.

---

## 2. 14-Stage SDLC Lifecycle

```
[1. DISCOVER] ➔ [2. PLAN] ➔ [3. IMPLEMENT] ➔ [4. TEST] ➔ [5. REVIEW] ➔ [6. COMMIT] ➔ [7. PUSH]
       ⬇
[8. CI] ➔ [9. PREVIEW] ➔ [10. QA] ➔ [11. APPROVE] ➔ [12. RELEASE] ➔ [13. VERIFY] ➔ [14. DOCUMENT]
```

### Stage 1: Discovery
- Inspect requirements and user intents.
- Audit active repository, remote URLs, active branch, and package manager (`bun`).
- Trace component hierarchies, data layers, and dependency graphs.
- Evaluate regression risks on existing courses, routes, and responsive designs.

### Stage 2: Planning
- Define technical scope, file targets, and acceptance criteria.
- Establish test specifications (unit, component, integration, route tests).
- Identify Cloudflare Workers / TanStack Start SSR deployment impact.

### Stage 3: Implementation
- Develop features using TypeScript, React 19, and Tailwind CSS v4.
- Adhere to centralized typed data contracts (e.g., `src/data/ceh-v13-curriculum.ts`, `src/data/courses.ts`).
- Reuse proven presentation primitives (Radix UI, Lucide icons, responsive containers).
- Provide real, pedagogical functionality with interactive states rather than static placeholders.

### Stage 4: Testing & Verification
Execute the automated validation suite locally:
- **Type Checking:** `bun x tsc --noEmit`
- **Test Suite:** `bun test` (Vitest compatible runner)
- **SSR & Production Build:** `vite build` generating `.output/server/index.mjs`, `.output/server/wrangler.json`, and `.output/public`.
- Zero tolerance for unresolved failures or silenced warnings.

### Stage 5: Code Review & Security Audit
- Review `git diff` against base branches.
- Verify no secrets, credentials, or API keys are committed.
- Verify content classifications comply with educational standards (no leaked exam questions or proprietary EC-Council courseware).
- Ensure semantic accessibility and responsive behavior across mobile, tablet, and desktop viewports.

### Stage 6: Atomic Commits
- Use Conventional Commits standard (`feat:`, `fix:`, `style:`, `test:`, `docs:`, `chore:`).
- Stage only intended files; exclude runtime scratch and local locks.
- Never amend or squash published commits.

### Stage 7: Branch Push
- Push feature branches to their respective remotes:
  - Repo A: `git push -u origin feat/<feature-name>`
  - Repo B: `git push -u cyberbodha-bm feat/<feature-name>`
- Verify remote tracking and commit SHAs match local heads.

### Stage 8: CI/CD Pipeline Execution
- Monitor GitHub Actions runs triggered by pull requests.
- Verify all workflow jobs: Dependency install (`bun install --frozen-lockfile`), Typecheck, Test, Build, and Cloudflare artifact verification.

### Stage 9 & 10: Preview & QA
- Verify live preview deployment.
- Perform sanity checks on core routes: `/`, `/courses`, `/courses/ceh-v13-ai-ethical-hacking`, `/programs`, `/reviews`, `/about`, `/contact`.
- Verify browser console output for clean runtime (0 uncaught exceptions, 0 provider missing errors).

### Stage 11 & 12: Release Management
- Validate that all quality gates pass.
- Merge pull request into `main` using standard merge commit or fast-forward (preserving history).
- Trigger Cloudflare Workers deployment workflow.

### Stage 13: Post-Deployment Verification
- Perform live HTTP 200 checks on apex domain `cyberbodha.com` and subpaths.
- Verify edge 301 redirects (`www.cyberbodha.com` $\rightarrow$ `cyberbodha.com`).
- Verify critical features: interactive module tabs, knowledge check evaluation, localStorage progress persistence, lead enquiry submission.

### Stage 14: Documentation & Knowledge Retention
- Produce and update:
  - `docs/CHANGE_REPORT.md`
  - `docs/TEST_REPORT.md`
  - `docs/DEPLOYMENT_REPORT.md`
  - Canonical curriculum and architectural specifications.
