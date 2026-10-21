export default defineNuxtPlugin(() => {
  const router = useRouter()

  import('preline').then(({ HSStaticMethods }) => {
    HSStaticMethods.autoInit()

    router.afterEach(() => {
      nextTick(() => HSStaticMethods.autoInit())
    })
  })
})
