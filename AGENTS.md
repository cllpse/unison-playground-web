<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# unison-playground

A small Next.js site for trying out the unison-components library on web.

## Commands

- `bun install`: bun is the package manager; never add npm/yarn lockfiles
- `bun dev`: local server on http://localhost:3000
- `bun run typecheck`: `tsc --noEmit`; must pass before committing
- `bunx biome check --write .`: format, lint and organize imports; must pass before committing
- `bun run build`: production build; run it before pushing
