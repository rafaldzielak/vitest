import { defineConfig } from "vitest/config";

export default defineConfig({
  // Disable including inline tests into production build
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
