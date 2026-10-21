<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('colorMode', () => 'light')

function toggleColorMode() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    try {
        localStorage.setItem('theme', colorMode.value)
    } catch {}
}

const notificationTabs = [
    { id: 'semua', label: 'Semua' },
    { id: 'sebutan', label: 'Sebutan' },
    { id: 'pengikut', label: 'Pengikut' },
    { id: 'undangan', label: 'Undangan' }
]
const activeNotificationTab = ref('semua')

const languages = ['Indonesia', 'English']
</script>

<template>
    <div class="app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200">
        <div class="w-full flex items-center justify-between px-6">
            <div class="flex items-center gap-5">
                <button id="button-toggle-menu" type="button" class="btn btn-icon size-9 bg-default-400/10 hover:bg-default-150 rounded">
                    <i class="iconify lucide--align-left text-xl"></i>
                </button>

                <div class="lg:flex hidden items-center relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <i class="iconify tabler--search text-base"></i>
                    </div>
                    <input type="search" id="topbar-search" class="form-input px-12 text-sm rounded border-transparent focus:border-transparent w-60" placeholder="Cari sesuatu...">
                    <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-4">
                        <span class="ms-auto font-medium">⌘ K</span>
                    </button>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <!-- Bahasa -->
                <div class="topbar-item hs-dropdown [--placement:bottom-right] relative inline-flex">
                    <button class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Pilih bahasa">
                        <i class="iconify tabler--language text-xl"></i>
                    </button>

                    <div class="hs-dropdown-menu" role="menu">
                        <a v-for="lang in languages" :key="lang" class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                            {{ lang }}
                        </a>
                    </div>
                </div>

                <!-- Mode gelap / terang -->
                <div class="topbar-item">
                    <button type="button" class="btn btn-icon size-8 hover:bg-default-150 transition-[scale] rounded-full" aria-label="Ganti tema" @click="toggleColorMode">
                        <i class="iconify tabler--moon text-xl absolute dark:scale-0 dark:-rotate-90 scale-100 rotate-0 transition-all duration-200"></i>
                        <i class="iconify tabler--sun text-xl absolute dark:scale-100 dark:rotate-0 scale-0 rotate-90 transition-all duration-200"></i>
                    </button>
                </div>

                <!-- Notifikasi -->
                <div class="topbar-item hs-dropdown [--auto-close:inside] relative inline-flex">
                    <button type="button" class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" aria-haspopup="menu" aria-expanded="false" aria-label="Notifikasi">
                        <i class="iconify lucide--bell-ring size-4.5"></i>
                        <span class="absolute end-0 top-0 size-1.5 bg-primary/90 rounded-full"></span>
                    </button>

                    <div class="hs-dropdown-menu max-w-100 p-0" role="menu">
                        <div class="p-4 border-b border-default-200">
                            <div class="flex items-center gap-2">
                                <h3 class="text-base text-default-800">Notifikasi</h3>
                                <span class="size-5 font-semibold bg-orange-500 rounded text-white flex items-center justify-center text-xs">3</span>
                            </div>
                        </div>

                        <nav class="flex gap-x-1 bg-default-150 p-2 border-b border-default-200" role="tablist">
                            <button
                                v-for="tab in notificationTabs"
                                :key="tab.id"
                                type="button"
                                role="tab"
                                class="py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 text-xs whitespace-nowrap"
                                :class="activeNotificationTab === tab.id ? 'bg-card text-primary' : 'text-default-500'"
                                :aria-selected="activeNotificationTab === tab.id"
                                @click="activeNotificationTab = tab.id"
                            >
                                {{ tab.label }}
                            </button>
                        </nav>

                        <div class="h-80 overflow-y-auto">
                            <a v-for="n in 3" :key="n" href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
                                <div class="size-10 rounded-md bg-primary/10 flex justify-center items-center shrink-0">
                                    <i class="iconify lucide--bell size-5 text-primary"></i>
                                </div>
                                <div class="flex justify-between gap-2 w-full text-sm">
                                    <div>
                                        <h6 class="mb-1 font-medium text-default-800">Notifikasi contoh {{ n }}</h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i class="iconify lucide--clock align-middle size-3.5"></i>
                                            <span>Hari ini 09:{{ 10 * n }}</span>
                                        </p>
                                    </div>
                                    <div class="flex items-start gap-2 text-xs text-default-500">
                                        <div class="size-1.5 mt-1 bg-primary rounded-full"></div>{{ n }} mnt
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="flex items-center justify-between p-4 border-t border-default-200">
                            <a href="#" class="text-sm font-medium text-default-900">Kelola Notifikasi</a>
                            <button type="button" class="btn btn-sm text-white bg-primary">
                                Lihat Semua
                                <i class="iconify lucide--move-right size-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Pengaturan -->
                <div class="topbar-item">
                    <button class="btn btn-icon size-8 hover:bg-default-150 rounded-full" type="button" aria-label="Pengaturan">
                        <i class="iconify lucide--settings size-4.5"></i>
                    </button>
                </div>

                <!-- Profil -->
                <div class="topbar-item hs-dropdown relative inline-flex">
                    <button class="hs-dropdown-toggle cursor-pointer size-9.5 rounded-full bg-primary/10 text-primary flex items-center justify-center" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Profil">
                        <i class="iconify lucide--user size-5"></i>
                    </button>

                    <div class="hs-dropdown-menu min-w-48" role="menu">
                        <div class="p-2">
                            <h6 class="mb-2 text-default-500">Selamat datang</h6>
                            <div class="flex gap-3">
                                <div class="relative inline-block">
                                    <div class="size-12 rounded bg-primary/10 text-primary flex items-center justify-center">
                                        <i class="iconify lucide--user size-6"></i>
                                    </div>
                                    <span class="-top-1 -end-1 absolute size-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h6 class="mb-1 text-sm font-semibold text-default-800">Nama Pengguna</h6>
                                    <p class="text-default-500">Administrator</p>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-t-default-200 -mx-2 my-2"></div>

                        <div class="flex flex-col gap-y-1">
                            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                <i class="iconify lucide--mail size-4"></i>
                                Kotak Masuk
                                <span class="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">15</span>
                            </a>
                            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                <i class="iconify lucide--messages-square size-4"></i>
                                Obrolan
                            </a>
                            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                <i class="iconify lucide--gem size-4"></i>
                                Upgrade Pro
                            </a>

                            <div class="border-t border-default-200 -mx-2 my-1"></div>

                            <NuxtLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to="/login">
                                <i class="iconify lucide--log-out size-4"></i>
                                Keluar
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
