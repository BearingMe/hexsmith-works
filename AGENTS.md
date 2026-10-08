# AGENTS.md

Hexsmith Works is a static Next.js landing page introducing Forge, an early-stage software verification initiative. Keep product descriptions factual: Forge is in development; do not claim production availability or measured results.

## Stack and commands

- Next.js App Router, React, strict TypeScript, Tailwind CSS v4, and npm.
- `npm ci` — install dependencies.
- `npm run dev` — start the site locally.
- `npm run lint` and `npm run typecheck` — required code checks.
- `npm run test:e2e:install` — install Chromium when needed; `npm run test:e2e` — run Playwright E2E tests.
- `npm run build` — validate the static export.

Run lint, typecheck, E2E, and build for changes affecting the site. The E2E runner starts its own server on port 3100. No unit-test framework is configured.

## Structure and boundaries

- `src/app/` owns routes, document metadata, global styles, and page composition.
- `src/components/` owns reusable brand, layout, section, and UI components; `src/content/` owns shared static copy and navigation data; `src/lib/` owns shared helpers.
- `e2e/` contains Playwright browser tests. `public/` contains static deployment assets.
- Keep dependencies flowing toward shared modules: `src/lib/` and `src/components/ui/` must not import route/page modules. See [architecture](docs/architecture.md).
- Preserve static-export compatibility (`output: "export"`); the deployed site has no request-time Next.js server or backend.

## Rules

- Preserve strict TypeScript. Do not use `any` or weaken compiler settings to bypass errors.
- Keep static copy in `src/content/` when shared. Do not invent product capabilities, availability, customer claims, or results.
- Keep interactive client boundaries small; use accessible semantics and preserve reduced-motion support.
- Use `mailto:` for contact; do not add a backend form without an explicit product requirement.
- Do not edit generated output in `out/` or `.next/`. Never commit secrets, credentials, or `.env` files.
- Keep Playwright tests isolated and user-facing; use accessible locators and web-first assertions. See [testing](docs/testing.md).

## Context guides

- [Architecture](docs/architecture.md)
- [Design system](docs/design.md)
- [Testing](docs/testing.md)
- [TypeScript](docs/styleguides/typescript.md), [React](docs/styleguides/react.md), and [Next.js](docs/styleguides/nextjs.md) styleguides
