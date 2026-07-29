import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: import.meta.dev,
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
    /**
     * The custom domain serves the application
     * from the domain root.
     */
    baseURL: '/',

    head: {
      htmlAttrs: {
        lang: 'en-US',
      },

      titleTemplate: '%s | NextMile Rentals',

      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#102A43',
        },
      ],
    },
  },
});