import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { million } from "million/vite-plugin-million";

export default defineConfig({
    plugins: [react(), million()],
    esbuild: { jsx: "automatic" },
});
