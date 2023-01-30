import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      comps: resolve(__dirname, 'src/components'),
      assets: resolve(__dirname, 'src/assets'),
      apis: resolve(__dirname, 'src/apis'),
      config: resolve(__dirname, 'src/config'),
      views: resolve(__dirname, 'src/views'),
      utils: resolve(__dirname, 'src/utils'),
      router: resolve(__dirname, 'src/router'),
      layouts: resolve(__dirname, 'src/layouts'),
      hooks: resolve(__dirname, 'src/hooks'),
      enums: resolve(__dirname, 'src/enums'),
      directives: resolve(__dirname, 'src/directives'),
      store: resolve(__dirname, 'src/store'),
      plugins: resolve(__dirname, 'src/plugins'),
      types: resolve(__dirname, 'src/types'),
      styles: resolve(__dirname, 'src/styles')
    }
  },
  plugins: [vue()]
})
