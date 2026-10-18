import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["react-native-svg"],
  turbopack: {
    // The unison-components submodule is a React Native library rendered on web through
    // React Native Web: prefer `.web.*` files (react-native-svg's too, hence transpilePackages) and
    // swap `react-native` for a React Native Web shim with stubs for native-only exports.
    resolveExtensions: [".web.tsx", ".web.ts", ".web.jsx", ".web.js", ".web.mjs", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
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
