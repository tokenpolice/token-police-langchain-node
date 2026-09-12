import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  splitting: false,
  // Resolved at runtime from this package's own node_modules (its direct
  // dependency), so it stays resolvable under pnpm / yarn-PnP without hoisting.
  external: ["@traceloop/instrumentation-langchain"],
});
