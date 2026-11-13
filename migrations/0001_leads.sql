-- CyberBodha enquiry leads
-- Apply with: wrangler d1 execute cyberbodha-leads --remote --file=./migrations/0001_leads.sql

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_slug TEXT NOT NULL DEFAULT 'general',
  learning_objective TEXT DEFAULT '',
  preferred_format TEXT DEFAULT '',
  message TEXT DEFAULT '',
  source_context TEXT DEFAULT 'website',
  page_url TEXT DEFAULT '',
  referrer TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
