import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// Define the PWA configuration
const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  injectRegister: 'script',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    navigateFallback: '/index.html',
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.mode === 'navigate',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
        },
      },
      {
        urlPattern: /^\/favicon\.ico$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'favicon-cache',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
          },
        },
      },
    ],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  },
  manifest: {
    short_name: 'Portfolio',
    name: 'Portfolio of Ahadul Islam',
    description: 'A simple portfolio website of Ahadul Islam',
    icons: [
      {
        src: '/favicon.ico', // Ensure it's in public/
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/logo192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/logo512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#8E5BF8',
    background_color: '#ffffff',
  },
  devOptions: {
    enabled: false, // Enable in development
    type: 'module',
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(pwaOptions)],
});
