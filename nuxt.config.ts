// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', 'nuxt-auth-utils'],
  runtimeConfig: {
    session: {
      password: process.env.NUXT_APP_SECRET || '',
      maxAge: 60 * 60 * 24 * 7
    }
  },
  googleFonts: {
    families: {
      'DM Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Tourney: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    download: true
  },
  compatibilityDate: '2025-07-15',
  routeRules: {
    '/login': { appLayout: 'login' },
    '/app/*': { appLayout: 'dashboard' }
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['preline']
    }
  },
})
