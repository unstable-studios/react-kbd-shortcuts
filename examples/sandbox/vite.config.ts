import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // When deploying to GitHub Pages, the site will be served from /<repo-name>/
  // Set base accordingly so asset paths resolve correctly.
  // Locally (dev/preview) this remains "/".
  base:
    process.env.GITHUB_PAGES && process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
      : "/",
  resolve: {
    alias: {
      "react-kbd-shortcuts": path.resolve(
        __dirname,
        "../../packages/react-kbd-shortcuts/dist"
      ),
    },
  },
  optimizeDeps: { include: ["react", "react-dom"] },
});
