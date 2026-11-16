# CyberBodha Deployment Runbook

## 1. Scope & Target Environments
- **Primary Domain:** `https://cyberbodha.com`
- **Secondary / Redirect Domain:** `https://www.cyberbodha.com` $\rightarrow$ `https://cyberbodha.com` (HTTP 301 Permanent Redirect)
- **Target Platform:** Cloudflare Workers with Cloudflare Workers Assets
- **Worker Name:** `cyberbodha-learning-academy`
- **Database Binding:** Cloudflare D1 Database `cyberbodha-leads`

---

## 2. Standard Automated Deployment (Recommended)
Deployments to production are triggered automatically via CI/CD when a feature branch pull request is approved and merged into `main`:

1. **Open Pull Request:**
   - Create PR from `feat/ceh-v13-curriculum-alignment-repo-b` to `main` on `cyberbodha-bm/cyberbodha-website`.
   - Ensure all CI workflow checks pass:
     - `Validate, Typecheck, Test & Build` (Green checkmark)
2. **Merge Pull Request:**
   - Merge PR using GitHub's "Create a merge commit" or "Squash and merge" as approved by the repository rules.
3. **Automated Worker Deployment:**
   - The `deploy` job in `.github/workflows/deploy.yml` downloads the verified build artifacts and executes `wrangler deploy`.
   - Cloudflare propagates the new Worker version globally within seconds.

---

## 3. Manual Deployment Procedure (Emergency / DevOps)
If GitHub Actions is unavailable or immediate release is required:

### Prerequisites
- Node.js $\ge$ 20 or Bun $\ge$ 1.2
- Cloudflare API Token with `Workers:Edit` permissions
- Cloudflare Account ID

### Execution Steps
```powershell
# 1. Ensure clean working directory on main branch
git checkout main
git pull origin main

# 2. Install dependencies with frozen lockfile
bun install --frozen-lockfile

# 3. Execute quality gates
bun x tsc --noEmit
bun test

# 4. Generate production build
node node_modules/vite/bin/vite.js build

# 5. Verify build artifacts
Test-Path .output/server/index.mjs
Test-Path .output/server/wrangler.json
Test-Path .output/public

# 6. Deploy to Cloudflare Workers
npx wrangler deploy
```

---

## 4. Post-Deployment Smoke Test
Verify the following endpoints immediately after deployment:

| Target URL | Expected Status | Validation Point |
| :--- | :--- | :--- |
| `https://cyberbodha.com` | `200 OK` | Branded header, hero, course cards, reviews section |
| `https://www.cyberbodha.com` | `301 Moved Permanently` | Redirects to apex domain `https://cyberbodha.com` |
| `https://cyberbodha.com/courses/ceh-v13-ai-ethical-hacking` | `200 OK` | 20-module canonical curriculum workspace, 5 tabs, knowledge checks |
| `https://cyberbodha.com/reviews` | `200 OK` | Authentic UrbanPro student testimonials & ratings |
| `https://cyberbodha.com/cyber-range` | `200 OK` | Cyber range lab scenarios and terminal showcase |
| `https://cyberbodha.com/contact` | `200 OK` | Course enquiry form submitting to Cloudflare D1 lead store |

---

## 5. Live Log Monitoring
To monitor live requests and error rates on Cloudflare Workers:
```powershell
npx wrangler tail --name cyberbodha-learning-academy
```
Look for:
- 0 HTTP 500 / 502 SSR exceptions
- Successful server-side route hydration
- D1 database insert operations for new leads
