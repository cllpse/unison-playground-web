// `react-native` on web: React Native Web, plus stubs for the native-only exports that
// react-native-svg imports but never calls on web.
// @ts-expect-error react-native-web ships no type declarations.
export * from "react-native-web"

export const TurboModuleRegistry = {
  get: () => null,
  getEnforcing: () => ({}),
}
