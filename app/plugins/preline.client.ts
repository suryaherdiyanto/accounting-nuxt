export default defineNuxtPlugin((nuxtApp) => {
  import('preline').then(({ HSStaticMethods }) => {
    const init = () => nextTick(() => HSStaticMethods.autoInit())

    // page:finish fires once the new page and layout are rendered, router.afterEach fires too early
    // (e.g. after login, when the dashboard layout is not mounted yet)
    nuxtApp.hook('page:finish', init)
    nuxtApp.hook('app:mounted', init)
    init()
  })
})
