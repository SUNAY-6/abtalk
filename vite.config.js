import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo name is abtalk -> https://github.com/YOUR_NAME/abtalk
const REPO_NAME = "/abtalk/"

export default defineConfig(({ mode }) => ({
  // In development use "/" so http://localhost:5173/ works
  // In production use "/abtalk/" for GitHub Pages
  base: mode === "production" ? '/abtalk/' : "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    cors: true,
    headers: {
      'X-Frame-Options': 'ALLOWALL'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  }
}))
