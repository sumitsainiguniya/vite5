import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetify from "vite-plugin-vuetify";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@stores": path.resolve(__dirname, "src/stores/"),
      "@views": path.resolve(__dirname, "src/views/"),
      "@plugins": path.resolve(__dirname, "src/plugins/"),
      "@components": path.resolve(__dirname, "src/components/"),
    },
  },
  server: {
    port: 3001,
  },
});
