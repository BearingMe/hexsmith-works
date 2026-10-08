# Hexsmith Works

Hexsmith Works is exploring software verification for the AI era. This site introduces **Forge**, an early-stage, AI-assisted verification initiative focused on inspecting changes, challenging assumptions, and evaluating proposed repairs.

Forge is in development. The site describes its direction and capabilities; it does not claim production availability or measured results.

## Develop locally

Requirements: Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and build

```sh
npm run lint
npm run typecheck
npm run test:e2e:install
npm run test:e2e
npm run build
```

The Playwright suite uses Chromium and starts the Next.js development server on port 3100 automatically. `npm run test:e2e:ui` opens the Playwright UI. The production build is a static export written to `out/`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` validates pull requests targeting `main`. A successful push to `main` (or a manual run on `main`) builds and deploys the site. Deployment uses GitHub Actions artifacts; it does not publish from a branch folder.

Before the first deployment:

1. Push this repository to GitHub and select **Settings → Pages → Build and deployment → GitHub Actions** as the source.
2. The export includes `public/CNAME`, which configures the site for `pages.hexsmith.tech`. Point that hostname's DNS to GitHub Pages, then verify the custom domain and enable HTTPS in the repository's Pages settings.

The canonical site URL is `https://pages.hexsmith.tech/`. The repository URL (`https://bearingme.github.io/hexsmith-works/`) is not the canonical address. DNS and the custom domain in Pages settings must remain aligned with `public/CNAME`.

## Stack

- Next.js App Router with strict TypeScript and static export
- Tailwind CSS, shadcn-style UI primitives, and Lucide icons
- Playwright Test for browser-based end-to-end checks

The project-local OpenCode Playwright MCP configuration is in `.opencode/opencode.jsonc`.
