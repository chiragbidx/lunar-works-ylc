# Snaplytics — Operational Guide

This repository is a production-ready, minimal Next.js 16 (App Router) app with React 19, TypeScript 5, Tailwind-ready styling, Drizzle ORM + PostgreSQL (schema/migration present), and **website screenshot API integration via Browserless**. Auth deps (`next-auth`) are present but not wired. This document is the core operational reference.

---

## 1. Current Scope
- **Purpose:** Instantly capture website screenshots from any URL, return image in-browser. Full Snaplytics branding and hero.
- **Data:** Drizzle configured for PostgreSQL (users schema only; not used in screenshot flow). 
- **Auth:** NextAuth.js dependencies installed, but not configured.
- **Screenshot integration:** POST `/api/capture` routes URLs via Browserless for reliable screenshot generation (see [Browserless docs](https://www.browserless.io/docs/screenshot)).
- **Env vars:** `env.example` lists `BROWSERLESS_API_KEY`, `OPENAI_API_KEY`, `DATABASE_URL`, and `NEXTAUTH_SECRET`.
- **Landing:** Responsive Snaplytics layout with hero, screenshot form, highlights, how-to section, and full branding.
- **Client islands:** Screenshot input handled by `WebsiteScreenshotForm`, isolated; the rest of the landing is server-rendered for performance.

## First Request Rule
- The Snaplytics screenshot feature ships directly in `app/page.tsx` and `/api/capture`. 
- The screenshot flow, error/UX routines, and full Snaplytics rebrand (header, hero, footer, owner info) are production-ready.
- All forms, API flows, and branding are polished after working logic.

## 2. Technology Stack
- Next.js 16 App Router (server-first).
- React 19, TypeScript 5 (strict).
- Tailwind via PostCSS pipeline; global CSS (`app/globals.css`).
- Server actions via `app/api/capture/route.ts` for screenshots.
- Drizzle ORM + PostgreSQL (users schema; not used in screenshots).
- ESLint 9, PostCSS, no global fonts except via next/font.
- No test harness or router groups yet.

## 3. Project Structure
```
app/
  layout.tsx        # Root layout, applies globals, ErrorReporter
  page.tsx          # Snaplytics main landing + screenshot UI
  api/
    capture/
      route.ts      # Screenshot API endpoint (POST)
  globals.css       # Tailwind entry and theme CSS
public/             # Static assets (logos/icons)
components/
  WebsiteScreenshotForm.tsx # Client screenshot UX
  AgentActionPanel.tsx      # Demo client-only note area
  ErrorReporter.tsx         # UI error reporter
scripts/            # Dev ops helpers
  dev-supervisor.js # Runs Next.js dev + polling
  db-init.js        # No-op (DB)
  git-poll.js       # Polls git for branch updates
  error-reporter.ts # Used by ErrorReporter
lib/db/
  schema.ts         # Drizzle schema (users only)
  client.ts         # Drizzle/pg pool client
drizzle/            # SQL migrations + journal
eslint.config.mjs   # Lint config
next.config.ts      # Next.js config
postcss.config.mjs  # PostCSS plugins
tsconfig.json       # TypeScript config
package.json        # Scripts and dependencies
FILES.md            # Structural index
RULES.md            # Change boundaries (boilerplate)
```

## 4. Install & Run
```bash
npm install
npm run dev   # Starts Next.js on localhost:3000
```
For Drizzle / DB (Postgres, users demo):
```bash
DATABASE_URL="postgresql://user:pass@host:5432/db" npm run db:migrate
```

## 5. Routing & Components
- Main UI and screenshot input: `app/page.tsx`, `components/WebsiteScreenshotForm.tsx`
- Screenshot API: `app/api/capture/route.ts` (POST `{ url }` → `{ imageUrl }`)
- All other structure as in [FILES.md](./FILES.md)

## 6. Styling
- Tailwind via `app/globals.css`. Extend via Tailwind or local CSS only if needed.
- Use Snaplytics orange (#FB7232) accent, card-based features, gradient backgrounds.

## 7. Environment & Secrets
- `BROWSERLESS_API_KEY` **must be set** (see [Browserless.io](https://www.browserless.io/)) in Railway/Vercel for screenshotting.
- `OPENAI_API_KEY`: for legacy AI features (not used in screenshot UX).
- `DATABASE_URL`: only used if expanding DB features.
- Add additional env vars in `env.example` and document contract in FILES.md.

## 8. Data & Backend
- Drizzle Postgres present (users only, not used in screenshots).
- Screenshot API goes directly via Browserless API (stateless, no local DB).

## 9. Testing
- No tests present. Add E2E/unit in `e2e/` or `__tests__/` as needed.

## 10. Change Guidelines
- Minimal diffs, no route group movement without consensus.
- Update FILES.md and README.md if new feature or API added.
- Env changes require env.example and doc updates before production deploy.

## 11. Deployment
- Next.js on Vercel or any Node 18+ host.
- Set `BROWSERLESS_API_KEY` in the target environment for screenshots to work.

---

For code questions or new feature directions, contact Chirag Dodiya (chirag@bidx.ai).