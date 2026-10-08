# Architecture

## System shape

This is a single Next.js App Router site that statically exports to GitHub Pages. It has no application server or backend; the only external interaction is contact through `mailto:` links.

## Modules

- `src/app/` — route entry points, document layout, global styles, metadata, and generated static assets. `page.tsx` composes the home page from content and components.
- `src/components/brand/` — reusable brand marks.
- `src/components/layout/` — site-wide header and footer; these may consume shared navigation and contact content.
- `src/components/sections/` — page-section visuals and other presentational section components.
- `src/components/ui/` — reusable UI primitives and wrappers; they must not import route-level page or layout modules.
- `src/content/` — shared, build-time site copy and navigation/workflow data; it must not depend on UI or route modules.
- `src/lib/` — framework-neutral helpers used by multiple modules; it must not import from `src/app/` or `src/components/`.
- `public/` — static files copied to the root of the export, including the GitHub Pages custom-domain `CNAME`.
- `e2e/` and `playwright.config.ts` — browser tests and their runner configuration; these are not imported by the site.

## Dependency direction

- `src/app/` is the composition layer and may import content, components, and shared helpers.
- Components may import lower-level UI primitives, brand assets, content, and `src/lib/`; shared components must not import `src/app/page.tsx`.
- `src/components/ui/` and `src/lib/` remain reusable and do not depend on page-specific modules.
- Use the `@/*` alias for imports from `src/*`.

## Static delivery constraints

- `next.config.ts` sets `output: "export"`; production changes must remain build-time renderable and must not require a Next.js server at request time.
- Keep route data static/build-time. Do not add server actions, request-dependent handlers, cookies, or other server-runtime features without replacing the hosting architecture.
- Static assets and deployment metadata belong in `public/`; generated app metadata assets belong in the corresponding `src/app/` route convention.
- `next/font` downloads are resolved during build; the deployed site serves the generated font files locally.
