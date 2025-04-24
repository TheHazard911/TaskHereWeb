// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/TaskHereWeb/', // ¡Reemplaza esto!
  build: {
    outDir: 'dist',
  },
});