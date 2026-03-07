import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: !options.watch,
  sourcemap: true,
  external: ["@grf-ui/engine", "@grf-ui/tokens"],
  loader: {
    ".html": "text",
    ".css": "text",
  },
  define: {
    DEV_ENV: JSON.stringify(!!options.watch),
  }
}));
