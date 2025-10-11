import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Set base path for production
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'styled-components'],
        },
      },
    },
  },
  server: {
    host: "0.0.0.0", // allow access from network
    port: 5173, // your port
    allowedHosts: [
      "92a161b07434.ngrok-free.app", // 👈 add your ngrok domain here
      "edu3.0804.in", // 👈 add your production domain
      "13.204.80.23", // 👈 add your EC2 IP
    ],
  },
});
