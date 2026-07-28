import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },

      titleTemplate: '%s | NextMile Rentals',

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#102A43',
        },
      ],
    },
  },
});