# Next.js Style Guide

Source: [Next.js App Router documentation](https://nextjs.org/docs/app/getting-started/layouts-and-pages), [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components), [Link](https://nextjs.org/docs/app/api-reference/components/link), and [Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

## App Router conventions

- Add route entry points under `src/app/` using App Router file conventions. A `page.tsx` or `layout.tsx` route entry uses the default export required by Next.js; shared components elsewhere use named exports.
- Keep `src/app/layout.tsx` as the root document and shared metadata owner. Export static metadata as a typed `Metadata` value when it does not depend on runtime data.
- Use `next/link` for in-site navigation and section links. Use native anchors for email/external links and lightweight document affordances such as the skip link.
- Use `next/font` for application fonts so font files are resolved at build time and served with the site.
- Keep route metadata and generated metadata assets with the relevant App Router segment; use Next's metadata conventions instead of manually duplicating `<head>` tags.

## Rendering and data

- Prefer Server Components for static content and composition. Isolate interactivity in the smallest Client Component boundary needed; see [the React guide](./react.md) for client-boundary rules.
- Keep content that is shared by multiple components in the existing `src/content/` modules rather than duplicating it across pages, headers, and footers.
- Build UI from semantic React elements; use Next.js APIs where they add routing or metadata behavior, not as a replacement for ordinary HTML semantics.
- Keep additions compatible with the static-export deployment rules in [the architecture guide](../architecture.md).

## Anti-patterns

- Do not use Pages Router conventions (`pages/`, `next/router`) in this App Router codebase.
- Do not add a `'use client'` directive to a route or layout solely because it renders a client component.
- Do not use `useRouter` for ordinary links; reserve imperative navigation for interactions that cannot be expressed as an anchor.
