/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      proxy: {
        "/api": "http://localhost:8080",
      },
    },
    preview: {
      proxy: {
        "/api": "https://granf1.onrender.com",
      },
    },
    // preview: {
    //   proxy: {
    //     "/api": {
    //       target: "https://granf1.onrender.com",
    //       changeOrigin: true,
    //       secure: true,
    //     },
    //   },
    // },

    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
