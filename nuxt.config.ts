// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  routeRules: {
    '/login': { appLayout: 'login' },
    '/app/*': { appLayout: 'dashboard' }
  },
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
