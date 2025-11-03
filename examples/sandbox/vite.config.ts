import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "react-kbd-shortcuts": path.resolve(
        __dirname,
        "../../packages/react-kbd-shortcuts/src"
      ),
    },
  },
  optimizeDeps: { include: ["react", "react-dom"] },
});
