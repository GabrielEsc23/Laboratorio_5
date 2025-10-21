import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['a7e6ed9e-0912-49da-80bb-6c28441e22fa-00-22gp4kdnp7k16.worf.replit.dev']
  }
})
