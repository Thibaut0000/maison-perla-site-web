import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite pour le projet Maison Perla
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
