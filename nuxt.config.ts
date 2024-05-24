import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],
  imports: { dirs: ['./store'] },
  ui: {
    icons: ['lucide']
  },
  /** @see https://nuxt.com.cn/docs/guide/going-further/experimental-features 实验性功能 */
  experimental: {
    payloadExtraction: false, // 启用提取使用 nuxt generate 生成的页面的有效负载
    renderJsonPayloads: true, // 允许渲染带有复杂类型的 JSON 载荷
    typedPages: true, // 启用新的实验性类型化路由器，使用 unplugin-vue-router
  },
  /** @see https://nuxt.com.cn/docs/guide/directory-structure/server#nitro%E9%85%8D%E7%BD%AE */
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    /** @see https://nuxt.com.cn/docs/getting-started/deployment#%E9%80%89%E6%8B%A9%E6%80%A7%E9%A2%84%E6%B8%B2%E6%9F%93 */
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    /** @see https://nuxt.com.cn/docs/getting-started/transitions#%E9%A1%B5%E9%9D%A2%E8%BF%87%E6%B8%A1 为所有页面添加过渡效果 */
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },
  pwa,
  colorMode: {
    classSuffix: '',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  devtools: { enabled: true },
})
