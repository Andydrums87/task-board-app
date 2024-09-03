import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
    '/api': "https://task-board-app-backend.onrender.com"
    },
    base: '/task-board/',
    build: {
      outDir: 'dist',
   },
  },
})
