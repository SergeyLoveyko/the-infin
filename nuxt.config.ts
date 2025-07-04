// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/the-infin/' : '/'
  },
  css: ['/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'En' },
      { code: 'uk', name: 'Uk' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    // strategy: 'prefix_except_default', // or 'prefix', 'prefix_and_default', 'no_prefix'
    detectBrowserLanguage: false,
    vueI18n: './i18n/i18n.config.ts',
    optimizeTranslationDirective: false
  }
})
