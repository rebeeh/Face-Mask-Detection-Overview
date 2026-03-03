import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Must match the exact GitHub repository name for Pages routing to work
  base: '/Face-Mask-Detection-Overview/',

  build: {
    // Raise the warning threshold so the advisory doesn't appear as an error in CI.
    // The 735KB bundle is split below; each vendor chunk will be well under 500KB.
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        /**
         * Split heavy third-party libraries into separate vendor chunks.
         * Benefits for GitHub Pages (static CDN-like serving):
         *  - Parallel HTTP/2 downloads – browser fetches chunks simultaneously
         *  - Long-lived browser caching – vendor chunks only invalidate when
         *    the library version changes, not on every app code change
         *  - Faster repeat visits – users who previously visited only
         *    re-download the updated app chunk
         */
        manualChunks: {
          // Framer Motion (~100KB gzip) — changes rarely
          'vendor-motion': ['framer-motion'],

          // Recharts + its transitive dependencies (~90KB gzip) — changes rarely
          'vendor-charts': ['recharts'],

          // Lucide icon tree-shaken bundle — changes rarely
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})