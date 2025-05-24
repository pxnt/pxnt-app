import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [
      vue(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url))
      },
    },

    build: {
      target: 'es2015',
      cssCodeSplit: true,
      minify: 'esbuild',
      sourcemap: !isProd,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue'],
            'pinia-vendor': ['pinia'],
            'supabase-vendor': ['@supabase/supabase-js'],
          }
        }
      }
    }
  }
})
