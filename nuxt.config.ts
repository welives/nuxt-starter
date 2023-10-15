import path from 'path'
const PORT = parseInt(process.env.NUXT_APP_PORT as string)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: isNaN(PORT) ? undefined : PORT,
  },
  modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss', '@vant/nuxt', ['@pinia/nuxt', { autoImports: ['defineStore'] }]],
  devtools: { enabled: true },
  vant: { lazyload: true },
  imports: { dirs: ['./stores'] },
  postcss: {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        viewportWidth: (file: string) => {
          return path.resolve(file).includes(path.join('node_modules', 'vant')) ? 375 : 750
        },
        unitPrecision: 6,
        landscapeWidth: 1024,
        // exclude: [/node_modules\/vant/i]
      },
    },
  },
})
