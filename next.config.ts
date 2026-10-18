import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // The unison-components submodule is a React Native library rendered on web through
    // React Native Web: prefer its `.web.*` files and swap `react-native` for
    // `react-native-web`.
    resolveExtensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    resolveAlias: {
      "react-native": "react-native-web",
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
