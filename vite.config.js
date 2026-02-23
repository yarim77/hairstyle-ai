import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/generate-google': {
        target: 'https://generativelanguage.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/generate-google/, '/v1beta/models/nano-banana-pro-preview:generateContent')
      },
      '/api/generate-nano': {
        target: 'https://api.nanobananaapi.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/generate-nano/, '/api/v1/nanobanana/generate')
      }
    }
  }
})
