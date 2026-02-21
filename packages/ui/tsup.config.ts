import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: true,
  external: ["@grf-ui/engine", "@grf-ui/tokens"],
  loader: {
    ".html": "text",
    ".css": "text",
  },
});
