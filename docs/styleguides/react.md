# React Style Guide

Sources: [React Rules](https://react.dev/reference/rules), [Keeping Components Pure](https://react.dev/learn/keeping-components-pure), and [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

## Naming and composition

- Name components in `PascalCase`; name hooks with the `use` prefix. Keep component definitions at module scope rather than nesting them inside another component.
- Compose components in JSX and pass data through typed props. Do not invoke a component as an ordinary function or use shared mutable module variables to pass data between components.
- Use stable keys derived from the content item (for example, `step.number`) when rendering lists. Avoid array indexes when the data already has a stable identifier.
- Prefer named exports for reusable components. Next.js route entry points are the exception; see [the Next.js guide](./nextjs.md).

## Rendering and client boundaries

- Keep render logic pure: the same props, state, and context should produce the same UI. Do not mutate props/state or perform observable side effects during render.
- Respond to user actions in event handlers. Use an Effect only to synchronize with an external system when an event handler or derived render state is not appropriate.
- Components are Server Components by default in this App Router project. Add `'use client'` only when a component itself needs state, event handlers, hooks, or browser APIs; keep that boundary as low in the tree as practical.
- Treat props passed across a Server/Client boundary as serializable. Avoid moving an entire page or layout to the client to support one interactive control.
- Use semantic HTML controls and links rather than clickable generic elements. Give icon-only controls an accessible name; hide decorative icons from assistive technology.

## Anti-patterns

- Do not call hooks conditionally, in loops, or from ordinary helper functions.
- Do not read or write `window`, `document`, or other browser globals during server render.
- Do not add state for values that can be derived directly from current props or data.
