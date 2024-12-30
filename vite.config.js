// filepath: /c:/Users/Cynthia Rivera/OneDrive/Desktop/Aguas VVS/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Aguas/', // Ensure this matches your repository name
  plugins: [react()]
})