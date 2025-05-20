import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ command, mode }) => {
  // console.log('meoww', command, mode, import.meta.url, fileURLToPath(new URL('./src', import.meta.url)))

  return {
    plugins: [
      vue(),
      tailwindcss(),
  ],

  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
  }
})
