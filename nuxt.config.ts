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
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales/',
    locales: [
      { code: 'en', name: 'En', file: 'en-US.json' },
      { code: 'uk', name: 'Uk', file: 'uk-UK.json' }
    ],
    vueI18n: './i18n.config.ts',
  }
})
