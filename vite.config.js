/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
      "@assets": `${path.resolve(__dirname, "src/assets")}`,
      "@components": `${path.resolve(__dirname, "src/components")}`,
      "@common": `${path.resolve(__dirname, "src/common")}`,
      "@pages": `${path.resolve(__dirname, "src/pages")}`,
      "@store": `${path.resolve(__dirname, "src/store")}`,
      "@data": `${path.resolve(__dirname, "src/data")}`,
      "@animations": `${path.resolve(__dirname, "src/animations")}`,
      "@utilities": `${path.resolve(__dirname, "src/utilities")}`,
      "@constants": `${path.resolve(__dirname, "src/constants")}`,
    },
  },
});
