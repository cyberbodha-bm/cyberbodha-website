# CyberBodha CI/CD Architecture

## 1. Pipeline Overview
The CyberBodha Continuous Integration and Continuous Deployment (CI/CD) pipeline automates quality validation, edge bundling, and zero-downtime deployment to Cloudflare Workers.

```
                    Pull Request / Push to Feature Branch
                                      │
                                      ▼
                ┌───────────────────────────────────────────┐
                │        GitHub Actions: Validate & Build    │
                │  1. Checkout with actions/checkout@v4     │
                │  2. Setup Bun (oven-sh/setup-bun@v2)      │
                │  3. bun install --frozen-lockfile         │
                │  4. bun x tsc --noEmit (Typecheck)        │
                │  5. bun run test (34+ Automated Tests)    │
                │  6. bun run build (Vite + Nitro SSR)      │
                │  7. Verify .output/server & .output/public│
                └───────────────────────────────────────────┘
                                      │
                            Passed Quality Gates?
                                      │
                      ┌───────────────┴───────────────┐
                      ▼                               ▼
                 [PR Review]                     [Push to main]
                      │                               │
                      ▼                               ▼
             Merge to main branch            ┌─────────────────┐
                                             │ Deploy Worker   │
                                             │ wrangler deploy │
                                             └─────────────────┘
                                                      │
                                                      ▼
                                            Cloudflare Edge Network
                                            (https://cyberbodha.com)
```

---

## 2. GitHub Actions Workflow Configuration
Located at `.github/workflows/deploy.yml`:

### Triggers
- `push` to `main`
- `pull_request` targeting `main`
- `workflow_dispatch` (Manual trigger for emergency redeployments)

### Concurrency Control
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
Prevents redundant concurrent builds on rapid branch updates while guaranteeing isolated deployment execution.

---

## 3. Runtime & Tooling Standards
- **Runtime:** Bun (pinned to latest release with `bun.lock` lockfile integrity validation).
- **Type Checker:** TypeScript (`tsc --noEmit`) strictly verifying all route trees, props, and curriculum data models.
- **Test Runner:** Bun / Vitest testing unit models, route resolvers, schema validation, and canonical curriculum compliance.
- **Bundler:** Vite 8 with `@lovable.dev/vite-tanstack-config`, Tailwind CSS v4, and Nitro edge server presets.
- **Edge Runtime:** Cloudflare Workers with native assets engine and Cloudflare D1 database bindings for lead storage.

---

## 4. Production Artifact Verification
Before deployment, CI strictly verifies:
1. `.output/server/index.mjs` — Cloudflare Worker entry point containing TanStack Start SSR handler.
2. `.output/server/wrangler.json` — Edge worker configuration and routing definitions.
3. `.output/public` — Static assets directory containing client JS bundles, CSS, images, and fonts.

---

## 5. Secret Management
Secrets are injected exclusively through GitHub Encrypted Secrets and Cloudflare Worker Environment Variables:
- `CLOUDFLARE_API_TOKEN`: Worker deployment permissions.
- `CLOUDFLARE_ACCOUNT_ID`: Account identifier for target worker.
- Client variables (`VITE_META_PIXEL_ID`, `VITE_GA_MEASUREMENT_ID`, `VITE_LEAD_ENDPOINT`) are managed through GitHub Repository Variables. No secrets are committed to Git.
