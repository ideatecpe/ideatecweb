import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'preload-fonts',
        transformIndexHtml(html, ctx) {
          if (!ctx.bundle) return html;
          const fontAsset = Object.values(ctx.bundle).find(
            (asset) => asset.fileName.endsWith('.woff2') && asset.fileName.includes('geist-latin-wght')
          );
          if (fontAsset) {
            const fontUrl = `/${fontAsset.fileName}`;
            return html.replace(
              '</head>',
              `  <link rel="preload" href="${fontUrl}" as="font" type="font/woff2" crossorigin>\n</head>`
            );
          }
          return html;
        }
      },
      {
        name: 'inline-css',
        transformIndexHtml(html, ctx) {
          if (!ctx.bundle) return html;
          const cssAssetKey = Object.keys(ctx.bundle).find(
            (key) => key.endsWith('.css') && key.includes('index-')
          );
          if (cssAssetKey) {
            const cssAsset = ctx.bundle[cssAssetKey];
            if (cssAsset && cssAsset.type === 'asset') {
              const cssContent = cssAsset.source;
              // Match the generated stylesheet link tag
              const linkRegex = new RegExp(`<link[^>]*href=["']\\/${cssAsset.fileName}["'][^>]*>`, 'i');
              const inlineStyle = `<style>${cssContent}</style>`;
              let updatedHtml = html.replace(linkRegex, '');
              updatedHtml = updatedHtml.replace('</head>', `${inlineStyle}\n</head>`);
              // Delete from bundle to avoid writing a separate CSS file to disk
              delete ctx.bundle[cssAssetKey];
              return updatedHtml;
            }
          }
          return html;
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('scheduler')) {
                return 'vendor-react';
              }
              if (id.includes('motion') || id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              if (id.includes('gsap')) {
                return 'vendor-gsap';
              }
              if (id.includes('lenis')) {
                return 'vendor-lenis';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              return 'vendor-others';
            }
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      port: 3002,
    },
  };
});
