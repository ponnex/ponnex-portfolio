// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Portfolio is a client-rendered single-page app (was Nuxt 2 `mode: 'spa'`).
  ssr: false,

  modules: ['@vueuse/nuxt'],

  app: {
    head: {
      title: 'Ponnex Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Emmanuel Francis Ramos Portfolio',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['normalize.css/normalize.css', '~/assets/style/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // The legacy stylesheet uses `@import` and a couple of math
          // expressions that Dart Sass now flags; silence the noise.
          silenceDeprecations: ['import', 'global-builtin', 'slash-div'],
        },
      },
    },
  },
})
