<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('colorMode', () => 'light')

useHead({
    htmlAttrs: {
        'data-sidenav-size': 'hover-active',
        'data-sidenav-color': 'light',
        'data-theme': colorMode
    },
    bodyAttrs: { class: 'bg-body-bg text-body-color' }
})

onMounted(() => {
    try {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark' || saved === 'light') colorMode.value = saved
    } catch {}
})

const year = new Date().getFullYear()
</script>

<template>
    <div class="wrapper">
        <TheSidebar />

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
