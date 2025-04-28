import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '320e-103-119-166-44.ngrok-free.app', // Your current ngrok URL
      '.ngrok-free.app' // Allow ALL ngrok URLs (recommended)
    ]
  }
})
