import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages repository name
const REPO_NAME = '/abtalk/'

// GitHub Actions = GitHub Pages
// Netlify/Vercel/local = root "/"
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isGitHubPages ? REPO_NAME : '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    cors: true,
    headers: {
      'X-Frame-Options': 'ALLOWALL',
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})
