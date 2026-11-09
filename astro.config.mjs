import { defineConfig } from "astro/config";

// PREVIEW=1 builds flat .html files for the offline previews.
// Normal builds use clean URLs like /work/ for the live site.
const preview = process.env.PREVIEW === "1";

export default defineConfig({
  site: "https://sheriffalimi.com",
  outDir: process.env.OUT_DIR || "./dist",
  build: { format: preview ? "file" : "directory" },
  trailingSlash: "ignore",
});
