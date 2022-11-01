// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
      [
        '@storyblok/nuxt',
        {
                  accessToken: process.env.SB_API_TOKEN,
                  apiOptions: { region: 'us' }
        }
      ]
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: ['en', 'es'],
        defaultLocale: 'en', // default locale
    },
    
  })