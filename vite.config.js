import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      dirs: ["src/library"],
      extensions: ["vue"],
      deep: true,
    }),
    Pages(),
  ],
});
