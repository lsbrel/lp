import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      /** ROOT */
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      /** ROOT */

      /** VIEWS */
      "@admin": fileURLToPath(new URL("./src/views/admin", import.meta.url)),
      '@landing': fileURLToPath(new URL('./src/views/landing-page', import.meta.url)),
      "@error": fileURLToPath(new URL("./src/views/error", import.meta.url)),
      /** VIEWS */

      /** RESOURCES */
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@icons": fileURLToPath(new URL("./src/icons", import.meta.url)),
      "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      /** RESOURCES */

    },
  },
});
