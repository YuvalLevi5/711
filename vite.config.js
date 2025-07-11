import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace with your GitHub repository name (e.g., /my-vue-app/)
export default defineConfig({
  plugins: [vue()],
  base: '/my-vue-app/', // <-- Add this line to set the base path for GitHub Pages
})
