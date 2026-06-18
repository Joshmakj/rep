import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ ensures relative paths for build (important for Live Server or subfolder hosting)
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    sourcemap: true,
  },
  server: {
    // 👇 correct Vite option for SPA routing in dev mode
    fs: {
      strict: false, // optional, allows serving files outside root if needed
    },
  },
  preview: {
    // 👇 this ensures SPA fallback works when you preview the built version
    open: true,
  },
})
