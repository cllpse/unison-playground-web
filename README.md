This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies and run the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## A note on /unison-components

The _./unison-components_ directory is the Frame component library ([cllpse/unison-components](https://github.com/cllpse/unison-components)), included as a git submodule pinned to a specific commit. It is a React Native library rendered on web through React Native Web: `next.config.ts` prefers its `.web.*` files and aliases `react-native` to `react-native-web`. Only `.web.tsx / .web.ts` files are used here.

#### Using /unison-components

```jsx
"use client";

import { Frame } from "@unison-components/web";
```

React Native Web components use React context, so they must be rendered from a client component.

#### Styling

_src/app/globals.css_ imports the library's _tailwind.css_, which carries its colors as Tailwind theme colors and a safelist of the class names the library builds at runtime. The library generates and commits that file, so there is no build step here.

#### Updating

Only move the submodule pointer when intentionally bumping the library:

```sh
cd unison-components && git fetch && git checkout origin/main && cd ..
```

If _./unison-components_ is empty, or to discard local changes inside it, reset it to the pinned commit:

```sh
git submodule update --recursive --init --force
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
