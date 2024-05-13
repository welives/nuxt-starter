const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
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
    extend: { colors },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
