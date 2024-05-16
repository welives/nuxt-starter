import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**', '.nuxt', '**/.nuxt/**', '.output', '**/.output/**'],
    formatters: true,
    typescript: true,
    vue: true,
  }),
)
