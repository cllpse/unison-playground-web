import type { NextConfig } from "next"

// `bun run bake` sets BAKE_BASE_PATH to export the app as static files (out/), each route as a folder with an
// index.html, served from that path; the website's deploy publishes the one-shot pages from there.
const bakeBasePath = process.env.BAKE_BASE_PATH

const nextConfig: NextConfig = {
  ...(bakeBasePath ? { output: "export", basePath: bakeBasePath, trailingSlash: true } : {}),
  reactCompiler: true,
  experimental: {
    agentUpgrade: "security",
  },
  transpilePackages: ["react-native-svg"],
  turbopack: {
    // unison-components is a React Native library rendered on web through
    // React Native Web: prefer `.web.*` files (react-native-svg's too, hence transpilePackages) and
    // swap `react-native` for a React Native Web shim with stubs for native-only exports.
    resolveExtensions: [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".web.mjs",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".mjs",
      ".json",
    ],
    resolveAlias: {
      "react-native": "./src/react-native.ts",
      "@react-native/assets-registry/registry": "react-native-web/dist/modules/AssetRegistry",
    },
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
