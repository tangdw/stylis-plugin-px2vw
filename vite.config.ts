import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      name: 'stylis-plugin-px2vw',
      entry: 'src/main.ts',
    },
    terserOptions: {
      format: {
        comments: true,
      },
    },
  },
})
