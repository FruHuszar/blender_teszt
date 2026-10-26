// Persona Studio web project (written once; your edits are kept on re-export)
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // relative asset paths: the build works from any folder (GitHub Pages sub-path, file server, Laravel public/)
  base: "./",
  build: { chunkSizeWarningLimit: 1200 },
});
