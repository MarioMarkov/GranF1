/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      cors: false,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => {
            console.log("in server");
            path.replace(/^\/api/, "");
          },
        },
      },
    },
    preview: {
      cors: false,
      proxy: {
        "/api": {
          target: "https://granf1.onrender.com",
          changeOrigin: true,
          secure: true,
        },
      },
    },

    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
