import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createProxyMiddleware } from 'http-proxy-middleware'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    },
    port:3000,
    watch:{
      usePolling:true
    }
  }
})
