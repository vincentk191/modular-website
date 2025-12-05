import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/modular-website/', // Must match your repository name exactly
  build: {
    outDir: 'dist',
  },
})

