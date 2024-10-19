import deno from "@deno/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import "npm:vue";
import "npm:vue-router@4";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), vue()],
});
