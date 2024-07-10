import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true, // Automatically open the visualization in your default browser
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper'],
          // Add more libraries here if needed
        },
      },
    },
    chunkSizeWarningLimit: 500, // Adjust the chunk size warning limit
  },
})
