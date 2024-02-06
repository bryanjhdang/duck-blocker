import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/pages/popup/index.html',
        options: './src/pages/options/index.html',
        blocked: './src/pages/blocked/index.html'
      }
    }
  }
})
