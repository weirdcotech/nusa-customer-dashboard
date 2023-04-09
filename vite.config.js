import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  server: {
    port: 3001,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@service': path.resolve(__dirname, 'src/services')
    }
  }
});
