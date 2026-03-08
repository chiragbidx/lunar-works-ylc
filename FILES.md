# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Drizzle ORM (PostgreSQL) and auth-ready dependencies are present; routes/auth wiring are not yet added. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: Snaplytics app — instantly capture and return website screenshots.
- Style: file-system routing, server-preferred components.
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind-ready PostCSS, ESLint 9.
- Present: Drizzle schema + initial migration for `users`; Screenshot fetch API via Browserless; `WebsiteScreenshotForm` client component.
- Not present: auth routes/config, dashboard, queues, tests.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout; applies globals (Geist fonts removed).
- `app/page.tsx`: Public landing/Snaplytics screenshot UI (server component).
- `app/api/capture/route.ts`: Website screenshot capture POST API.
- `app/globals.css`: Global styles; imports Tailwind; defines light/dark CSS variables.
- `next.config.ts`: Minimal Next config placeholder.
- `postcss.config.mjs`: PostCSS with `@tailwindcss/postcss`.
- No `middleware.ts`; requests go straight to App Router.

## 3. Modules / Feature Areas
- `app/`: UI shell and routing.
- `components/`: Shared UI — WebsiteScreenshotForm (client), AgentActionPanel, ErrorReporter.
- `public/`: Static assets (logos/icons).
- `lib/db/`: Drizzle schema and client.
- `drizzle/`: SQL migrations + meta journal.
- Config/tooling: `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`, `tsconfig.json`, `drizzle.config.ts`.
- No route groups yet; create when needed.

## 4. Routes (Controllers)
- `/` → `app/page.tsx`
  - Purpose: Snaplytics hero landing, website screenshot form, highlights, footer/contact; API POST to `/api/capture`
  - Layout: snap-centered responsive, buttons/menu wrap on small screens; client & server split for screenshot UX.
  - DTOs: `{ url: string }` for screenshot API POST; returns `{ imageUrl: string }`.

- `/api/capture` (POST)
  - JSON body: `{ url: string }`
  - Returns: `{ imageUrl: string }` (PNG in base64 data URI)
  - 400/503/500 error handling for input, config, and network errors.

## 5. Services & Providers
- Browserless.io public API used securely via server action.

## 6. Data Layer
- ORM/DB: Drizzle ORM + PostgreSQL (for users if expanded). Screenshot API is stateless (no DB used).
- Migrations in `drizzle/`.

## 7. DTOs, Schemas & Validation
- Screenshot POST: validates correct URL; all logic inside `/api/capture`.

## 8. Cross-Cutting Concerns
- Auth, logging, tracing: not implemented.

## 9. Configuration & Environment
- `env.example`: lists `BROWSERLESS_API_KEY` for screenshotting.
- Production deploy must add the real API key in Railway/Vercel.
- Other variables: `OPENAI_API_KEY`, `DATABASE_URL` (Postgres), `DATABASE_SSL`, `NEXTAUTH_SECRET`, `OPENAI_MODEL` (optional).

## 10. Async & Background Processing
- No background jobs.

## 11. Testing Structure
- No tests present.

## 12. File & Directory Index
```
.gitignore
README.md
FILES.md
RULES.md
Dockerfile
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
  api/
    capture/
      route.ts         # Website screenshot API POST
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
scripts/
  db-init.js
  dev-supervisor.js
  git-poll.js
  error-reporter.ts
components/
  WebsiteScreenshotForm.tsx
  AgentActionPanel.tsx
  ErrorReporter.tsx
lib/db/
  schema.ts
  client.ts
drizzle/
  0000_init.sql
  meta/_journal.json
drizzle.config.ts
eslint.config.mjs
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
package-lock.json
.git/
```

## 13. Safe Modification Guidance
- Add new features/pages under `app/`.
- Document new APIs/components here when added.
- Update env and server/route contracts before deploying new integrations.

---
If structure or intent is uncertain, **STOP AND ASK** before modifying.