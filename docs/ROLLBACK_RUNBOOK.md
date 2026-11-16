# CyberBodha Rollback Runbook

## 1. When to Initiate a Rollback
A rollback must be initiated immediately if:
- Cloudflare Worker logs show elevated HTTP 5xx errors ($>1\%$ of requests).
- A regression is discovered on critical routes (`/`, `/courses/ceh-v13-ai-ethical-hacking`, `/contact`).
- Client-side JavaScript bundle throws fatal unhandled exceptions (white screen).
- Lead enquiry submissions fail to persist into Cloudflare D1.

---

## 2. Fast Rollback via Cloudflare Dashboard (< 1 Minute)
Cloudflare Workers maintains versioned releases for instant rollback without code rebuilding:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. In the left navigation, select **Workers & Pages**.
3. Click on the worker: **`cyberbodha-learning-academy`**.
4. Navigate to the **Deployments** tab.
5. Identify the previous stable deployment (marked by timestamp and Git commit message).
6. Click the three dots (`...`) on the stable deployment $\rightarrow$ click **Rollback to this deployment**.
7. Confirm the rollback. The previous worker script and assets become active immediately across all edge nodes.

---

## 3. CLI Rollback via Wrangler
Using the Wrangler command line interface:

```powershell
# 1. List recent worker deployments
npx wrangler deployments list --name cyberbodha-learning-academy

# 2. Rollback to specific deployment ID
npx wrangler rollback <DEPLOYMENT_ID> --name cyberbodha-learning-academy
```

---

## 4. Git-Based Rollback (Revert Commit)
To restore repository history and trigger automated CI/CD deployment of the known good state:

```powershell
# 1. Ensure you are on main with the latest changes
git checkout main
git pull origin main

# 2. Create a revert commit (DO NOT use git reset --hard on published branches)
git revert -m 1 <MERGE_COMMIT_SHA> -m "revert: rollback deployment due to [REASON]"

# 3. Verify tests and build locally
bun test
node node_modules/vite/bin/vite.js build

# 4. Push to main to trigger automated CI/CD redeployment
git push origin main
```

---

## 5. Post-Rollback Verification
1. Verify `https://cyberbodha.com` returns HTTP 200 with previous stable UI.
2. Confirm live logs are error-free:
   ```powershell
   npx wrangler tail --name cyberbodha-learning-academy
   ```
3. File a Post-Mortem Incident Report detailing root cause, time to recovery, and corrective actions.
