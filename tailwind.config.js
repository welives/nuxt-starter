const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,jsx,tsx}',
    './layouts/**/*.{vue,jsx,tsx}',
    './pages/**/*.{vue,jsx,tsx}',
    './app.{vue,jsx,tsx}',
    './plugins/**/*.{js,ts}',
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
