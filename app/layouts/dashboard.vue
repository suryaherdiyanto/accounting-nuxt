<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('colorMode', () => 'light')

const sidenavOpen = useState('sidenavOpen', () => false)
const isMobile = ref(false)
const route = useRoute()

function syncViewport() {
    isMobile.value = window.innerWidth <= 1140
    if (!isMobile.value) sidenavOpen.value = false
}

useHead({
    htmlAttrs: {
        'data-sidenav-size': computed(() => isMobile.value ? 'offcanvas' : 'hover-active'),
        class: computed(() => sidenavOpen.value ? 'sidenav-enable' : ''),
        'data-sidenav-color': 'light',
        'data-theme': colorMode
    },
    bodyAttrs: { class: 'bg-body-bg text-body-color' }
})

watch(() => route.path, () => { sidenavOpen.value = false })

onMounted(() => {
    syncViewport()
    window.addEventListener('resize', syncViewport)
    try {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark' || saved === 'light') colorMode.value = saved
    } catch {}
})

onBeforeUnmount(() => window.removeEventListener('resize', syncViewport))

const year = new Date().getFullYear()
</script>

<template>
    <div class="wrapper">
        <TheSidebar />

        <div v-if="sidenavOpen" class="fixed inset-0 bg-default-900/50 z-40" @click="sidenavOpen = false"></div>

        <div class="page-content">
            <TheTopbar />

            <main class="p-6">
                <slot />
            </main>

            <footer class="mt-auto footer flex items-center py-5 border-t border-default-200">
                <div class="lg:px-8 px-6 w-full flex md:justify-between justify-center gap-4">
                    <div>{{ year }} © Akuntansi</div>
                </div>
            </footer>
        </div>
    </div>
</template>
