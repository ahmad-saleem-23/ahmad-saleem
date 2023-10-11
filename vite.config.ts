import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          // Other dependencies or modules
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust this value as needed
  },
})
