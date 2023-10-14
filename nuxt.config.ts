// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss', '@vant/nuxt'],
  devtools: { enabled: true },
  vant: { lazyload: true },
})
