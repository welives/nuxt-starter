const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,jsx,tsx}',
    './layouts/**/*.{vue,jsx,tsx}',
    './pages/**/*.{vue,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './libs/**/*.{js,ts}',
    './app.{vue,jsx,tsx}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
      ignore: ['dark'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...fontFamily.sans],
      },
    },
  },
  corePlugins: {
    /** @see https://www.tailwindcss.cn/docs/preflight 重置样式 */
    preflight: true,
  },
  plugins: [
    process.env.NODE_ENV === 'development' && require('tailwindcss-debug-screens'),
    require('@iconify/tailwind').addDynamicIconSelectors(),
  ],
}
