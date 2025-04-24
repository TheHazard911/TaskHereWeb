import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TaskHereWeb/" // Reemplaza 'mi-repo' con el nombre de tu repositorio
});
