// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      dir: '~~/../../dist/apps/my-app',
    },
  },
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'my-app',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'my-app' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['acceptHMRUpdate', 'defineStore', 'storeToRefs'],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-US.yaml',
          },
          {
            code: 'pt',
            file: 'pt-BR.yaml',
          },
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',
        vueI18n: {
          locale: 'en',
          fallbackLocale: 'en',
        },
      },
    ],
  ],
});
