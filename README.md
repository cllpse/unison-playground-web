# unison-playground-web

A small Next.js site for trying out [unison-components](https://github.com/cllpse/unison-components) on web. How the
components work, and every flag they take, is documented there.

## Requirements

- [Bun](https://bun.sh) 1.4.3
- An editor with the TypeScript Native Preview extension (the project uses TypeScript 7)

`bun install` brings in the rest:

- [Next.js](https://nextjs.org) 16 with React 19 and the React Compiler
- [React Native Web](https://necolas.github.io/react-native-web) 0.21, to render the React Native library in the
  browser, with React Native 0.87 for its types
- [react-native-svg](https://github.com/software-mansion/react-native-svg) 15, for `Vector`
- [Tailwind CSS](https://tailwindcss.com) 4, loaded through `@tailwindcss/turbopack`
- [Biome](https://biomejs.dev) 2.5 for linting and formatting

## Getting started

```sh
git submodule update --init
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000). From the parent [unison](https://github.com/cllpse/unison)
repository the same scripts run as `bun run playground-web:<script>`.

## Scripts

- `bun dev` - Next.js dev server
- `bun run build` / `bun run start` - production build, and serving it
- `bun run lint` - Biome check
- `bun run format` - Biome format, writing changes
- `bun run typecheck` - `tsc --noEmit`

## How the playground works

The whole site is one page, _src/app/page.tsx_: a fixed suite of sections, one per group of flags (spacing, sizing,
padding, gap, radius, colors, strokes, shadows, text, alignment, nesting, vectors). Each section is literal JSX with no
logic, so what you read is what the plugin would generate. The same suite lives in
[unison-playground-expo](https://github.com/cllpse/unison-playground-expo)'s _App.tsx_; keep the two in step so web and
native render the same cases.

## How the components are wired in

_./unison-components_ is the library as a git submodule. It is a React Native library rendered through React Native Web:

- `@unison` is a path alias in _tsconfig.json_ for _unison-components/dist/web_, which exports `Frame`, `Text` and
  `Vector`. The native entry and shells are excluded from type checking.
- _next.config.ts_ prefers `.web.*` files and aliases `react-native` to _src/react-native.ts_ (React Native Web plus
  stubs for native-only exports).
- _src/app/globals.css_ imports the library's _dist/tailwind.css_, which carries the design tokens as Tailwind theme
  values. It is generated and committed in the library, so there is no build step here.

Components use React context, so render them from a client component:

```tsx
"use client"

import { Frame, Text } from "@unison"

export default function Page() {
  return (
    <Frame autolayout-vertical gap-4 padding-4 width-fill>
      <Text fill-black typography-lg>Hello</Text>
    </Frame>
  )
}
```

### Updating the library

While working on the library, `bun run components:sync-watch:playground-web` in the parent repository copies it into
_./unison-components_ as you edit. To move the pinned commit:

```sh
git -C unison-components pull origin main
git add unison-components
```
