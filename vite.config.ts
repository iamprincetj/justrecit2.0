import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  build: {
    rollupOptions: {
      output: { manualChunks: { vendor: ['react', 'react-dom'] } },
    },
    chunkSizeWarningLimit: 1000
  },
});
