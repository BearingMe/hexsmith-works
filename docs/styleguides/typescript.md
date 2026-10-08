# TypeScript Style Guide

Sources: [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html), and [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html). Project-specific choices below take precedence where they differ.

## Naming and modules

- Use `PascalCase` for types and React component names; use `camelCase` for values, functions, and properties.
- Use ES module `import`/`export` syntax. Use named exports for shared non-route modules; framework-required default exports are covered in [the Next.js guide](./nextjs.md).
- Mark type-only dependencies with `import type` (or `type` in a mixed import).
- Follow the repository's existing double-quoted strings, semicolons, and trailing commas. ESLint does not currently enforce a formatter, so preserve nearby formatting.

## Types and inference

- Keep the project's strict TypeScript settings. Fix type errors by modeling or narrowing values rather than weakening compiler options.
- Let TypeScript infer obvious local types. Add annotations where they define a reusable contract, public prop shape, or clarify a non-obvious boundary.
- Follow current project precedent by using `type` aliases for component props and simple data shapes. Use interfaces when declaration merging or an explicitly extensible contract is required; do not convert existing declarations solely to satisfy a blanket preference.
- Use unions for finite alternatives and `as const` for immutable literal data when literal types are useful, as in `src/content/landing.ts`.
- Prefer `unknown` to `any` for values whose shape is not yet known, then narrow with checks before use. Avoid non-null assertions and type assertions unless runtime guarantees are established at that point.
- Handle optional values explicitly; strict null checking is part of this project’s compiler configuration.
- Prefer small, domain-specific types over broad index signatures that accept arbitrary keys.

## Idioms and anti-patterns

- Use `const` by default and `let` only when reassignment is necessary; do not use `var`.
- Keep exported APIs small. Keep helper types and implementation details local unless another module needs them.
- Do not use TypeScript `namespace`, `require`, or casts to silence an error that can be solved with correct types or narrowing.
- Avoid explicit return annotations when inference is clear; add them when they improve a reusable API or prevent an unclear contract from drifting.
