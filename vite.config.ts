import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/vite5/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@layouts": path.resolve(__dirname, 'src/layouts/'),
      "@stores": path.resolve(__dirname, 'src/stores/'),
      "@views": path.resolve(__dirname, 'src/views/'),
      "@plugins": path.resolve(__dirname, 'src/plugins/'),
    },
  },
});
