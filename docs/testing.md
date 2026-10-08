# Testing

## Stack and scope

- Language/runtime: TypeScript on Node.js.
- Unit/integration framework: none currently configured.
- Browser E2E: Playwright Test, Chromium only.

Commands and CI wiring live in the root [AGENTS.md](../AGENTS.md) and `.github/workflows/deploy-pages.yml`; do not duplicate them here. The current suite tests the rendered landing page, its metadata/contact links, and mobile navigation. Keep test coverage focused on user-visible behavior.

## E2E conventions

- Add browser specs under `e2e/` as `*.spec.ts`; use `test.describe` for feature/area grouping and one test per independently understandable user outcome.
- Import `test` and `expect` from `@playwright/test`. Use the built-in `page` fixture; Playwright gives each test an isolated browser context. Do not share mutable page state or depend on test order.
- Locate controls by accessible role and name (`getByRole`, `getByLabel`, or `getByText` when appropriate). Use CSS selectors only for non-interactive document metadata or when no user-facing locator is suitable; avoid coupling tests to styling classes and DOM structure.
- Prefer Playwright web-first assertions such as `toBeVisible`, `toHaveURL`, and `toHaveAttribute`. They auto-retry while the page settles. Avoid fixed sleeps, forced clicks, and manual polling for normal UI state.
- Test user-observable outcomes rather than React internals, implementation details, or exact CSS values. Assert accessibility semantics where they are part of the user's interaction, such as the mobile menu's dialog name.
- Tests run against a locally started Next.js development server on port 3100 through the Playwright `webServer` configuration. Keep tests self-contained; the current site has no backend or test data store.

## Unit and integration tests

There is no unit or component-test runner today. Do not add a second test framework just to test static content or framework internals. If meaningful pure logic is introduced, propose the smallest suitable test setup and update this document and `AGENTS.md` when it becomes part of the project's normal validation.

## Network and test data

- Do not contact real users or open a mail client in tests. Verify contact links by their `mailto:` target.
- Keep tests independent of third-party services and production data. If a future feature introduces network-dependent UI, stub or intercept that dependency at the browser boundary unless the test explicitly validates the integration.
- Use synthetic data only; there are currently no fixtures or factories to share.

## Flakiness and retries

- Tests run without retries locally and allow two retries in CI. Retries are diagnostic tolerance, not a substitute for fixing a flaky test.
- Investigate and fix the underlying timing, isolation, or locator problem rather than increasing timeouts or adding sleeps. Keep failed-test screenshots and first-retry traces useful for diagnosis.
- Do not quarantine or skip a failing test without documenting the reason and a concrete follow-up; no quarantine mechanism is currently configured.

## What not to test

- Do not duplicate one assertion across E2E tests solely to increase a test count.
- Do not test framework implementation details, decorative layout internals, or the internals of the Radix dialog primitive.
- Do not add a coverage threshold: none is configured or useful for the current small browser-only suite.
