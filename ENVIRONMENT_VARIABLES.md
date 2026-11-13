# CyberBodha — Environment Variables & Secrets Policy

## 1. Security Architecture & Classification

Environment variables and credentials in the CyberBodha application are strictly segmented based on exposure scope and sensitivity.

```
┌────────────────────────────────────────────────────────┐
│ Cloudflare Worker (Server / Edge Environment)          │
│ ┌─────────────────────────┐  ┌───────────────────────┐ │
│ │ Worker Secrets (Secure) │  │ Worker Vars (Plain)   │ │
│ │ e.g. API Keys, Tokens   │  │ e.g. APP_ENV, APP_URL │ │
│ └─────────────────────────┘  └───────────────────────┘ │
└───────────────────────────┬────────────────────────────┘
                            │
                      NEVER EXPOSED
                            │
┌───────────────────────────▼────────────────────────────┐
│ Client Browser Bundle                                  │
│ ┌────────────────────────────────────────────────────┐ │
│ │ Public Variables Only (VITE_*)                     │ │
│ │ e.g. VITE_PUBLIC_APP_NAME                          │ │
│ └────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

> [!WARNING]
> **VITE_ Prefix Rule:** Any variable starting with `VITE_` is baked directly into client JavaScript bundles during `vite build` and is visible to anyone inspecting page source.
> **Never** prefix database keys, backend tokens, or secret credentials with `VITE_`.

---

## 2. Environment Variables Catalog

### 2.1 Current Application (Phase 1 Baseline)
In Phase 1, the platform operates as an architectural foundation with role dashboards and illustrative data. No external database or third-party API keys are required for core SSR rendering.

| Variable | Scope | Type | Required in Phase 1 | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `NODE_ENV` | Worker Runtime | Plain Var | Optional (Defaults to `production`) | Node environment indicator |
| `APP_URL` | Worker Runtime | Plain Var | Recommended (`https://cyberbodha.com`) | Canonical URL reference |

### 2.2 GitHub Actions CI/CD Secrets
These secrets must be configured in GitHub Repository Settings (`Settings` → `Secrets and variables` → `Actions`):

| Secret Name | Sensitivity | Required | Description |
| :--- | :--- | :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | Critical | **Yes** | Cloudflare API Token with Workers & DNS permissions |
| `CLOUDFLARE_ACCOUNT_ID` | High | **Yes** | 32-character Cloudflare account identifier |

### 2.3 Future Phase Integration Secrets (Planned)
When database and identity layers are introduced in subsequent phases:

| Secret Name | Target Store | Sensitivity | Description |
| :--- | :--- | :--- | :--- |
| `LOVABLE_API_KEY` | Worker Secret | Critical | API key for Lovable AI Gateway and connector features |
| `SUPABASE_SERVICE_ROLE_KEY` | Worker Secret | Critical | Admin key for Supabase bypass RLS (never on client) |
| `SUPABASE_URL` | Worker Var | Low | Supabase endpoint URL |
| `SUPABASE_ANON_KEY` | Worker Var / Client | Public | Supabase public client anonymous key |

---

## 3. How to Set Cloudflare Worker Secrets

### Via Cloudflare Dashboard
1. Go to **Workers & Pages** → click on `cyberbodha-learning-academy`.
2. Go to **Settings** → **Variables and Secrets**.
3. Under **Secrets**, click **Add**:
   - Enter Variable Name (e.g., `LOVABLE_API_KEY`).
   - Enter Value.
   - Click **Save and Deploy**.

### Via Wrangler CLI
```bash
# Add an encrypted secret
npx wrangler secret put LOVABLE_API_KEY

# Prompts for secret value securely:
# ? Enter a secret value: ********************************
# 🌀 Creating the secret...
# ✨ Success! Uploaded secret LOVABLE_API_KEY
```

### Local Development Secrets (`.dev.vars`)
For local testing with Wrangler, secrets are stored in `.dev.vars` in the workspace root.
- `.dev.vars` is explicitly listed in `.gitignore` and **must never be committed to Git**.
- Example format:
  ```env
  APP_URL=http://localhost:3000
  ```

---

## 3. Lead Capture & Marketing Tags

### 3.1 Enquiry storage (server side, never exposed)

Enquiries are handled by a TanStack server function (`src/lib/lead-actions.ts`) that runs inside the
same Cloudflare Worker. It uses the first source that is configured:

| Priority | Binding / Variable | Type | Setup |
| :--- | :--- | :--- | :--- |
| 1 | `DB` | D1 binding | `npx wrangler d1 create cyberbodha-leads`, then apply `migrations/0001_leads.sql` |
| 2 | `LEADS` | KV binding | `npx wrangler kv namespace create LEADS` |
| 3 | `LEAD_WEBHOOK_URL` | Worker var | Any HTTPS endpoint that accepts a JSON POST (n8n, Make, CRM intake) |

With none configured the form does not claim success — it shows a WhatsApp fallback and no conversion
event is sent.

### 3.2 Public build-time variables

These are baked into the client bundle at build time. In GitHub Actions they are read from repository
**Variables** (Settings → Secrets and variables → Actions → Variables), not Secrets.

| Variable | Required | Purpose |
| :--- | :--- | :--- |
| `VITE_META_PIXEL_ID` | For Meta ads | Loads the Meta Pixel and enables `Lead` / `PageView` events |
| `VITE_GA_MEASUREMENT_ID` | Optional | Loads GA4 with SPA pageview tracking |
| `VITE_LEAD_ENDPOINT` | Optional | Overrides the built-in server function with an external form endpoint |
| `VITE_FACEBOOK_DOMAIN_VERIFICATION` | Optional | Overrides the domain verification meta tag value |
