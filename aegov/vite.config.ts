import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // plugins: [react(),tailwindcss()],
  server: {
    open: true, // this opens the browser automatically
  },
})
