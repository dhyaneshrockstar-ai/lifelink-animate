import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// add this
const allowedHosts = [
  "localhost",
  "127.0.0.1",
  "d3f23158-5d02-4c8a-963b-683093b226e4-00-3j39hefa6xuyg.worf.replit.dev"
]

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts
  }
})

