<script setup lang="ts">
const route = useRoute()
const openMenus = ref<Set<string>>(new Set())

function toggleMenu(key: string) {
    if (openMenus.value.has(key)) openMenus.value.delete(key)
    else openMenus.value.add(key)
}

function isActive(item: SidenavMenuItem): boolean {
    if (item.to && item.to !== '#') return route.path === item.to
    return !!item.children?.some(isActive)
}
</script>

<template>
    <aside id="app-menu" class="app-menu">
        <NuxtLink to="/app/dashboard" class="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs">
            <span class="logo-lg font-tourney text-2xl font-bold text-primary">Akuntansi</span>
            <span class="logo-sm font-tourney text-2xl font-bold text-primary">A</span>
        </NuxtLink>

        <div class="absolute top-0 end-5 flex h-topbar items-center">
            <button id="button-hover-toggle" type="button">
                <i class="iconify tabler--circle size-5"></i>
            </button>
        </div>

        <div class="relative min-h-0 grow">
            <div class="size-full overflow-y-auto">
                <ul class="side-nav p-3">
                    <template v-for="(item, i) in sidenavMenu" :key="i">
                        <li v-if="item.title" class="menu-title">
                            <span>{{ item.title }}</span>
                        </li>

                        <li v-else class="menu-item" :class="{ active: isActive(item) }">
                            <template v-if="item.children">
                                <a href="#" class="menu-link" :class="{ open: openMenus.has(`${i}`), active: isActive(item) }" @click.prevent="toggleMenu(`${i}`)">
                                    <span v-if="item.icon" class="menu-icon"><i :class="item.icon"></i></span>
                                    <span class="menu-text">{{ item.label }}</span>
                                    <span class="menu-arrow"><i class="iconify tabler--chevron-right transition-transform" :class="{ 'rotate-90': openMenus.has(`${i}`) }"></i></span>
                                </a>

                                <ul v-show="openMenus.has(`${i}`)" class="sub-menu">
                                    <template v-for="(child, j) in item.children" :key="j">
                                        <li class="menu-item" :class="{ active: isActive(child) }">
                                            <template v-if="child.children">
                                                <a href="#" class="menu-link" :class="{ open: openMenus.has(`${i}-${j}`) }" @click.prevent="toggleMenu(`${i}-${j}`)">
                                                    <span class="menu-text">{{ child.label }}</span>
                                                    <span class="menu-arrow"><i class="iconify tabler--chevron-right transition-transform" :class="{ 'rotate-90': openMenus.has(`${i}-${j}`) }"></i></span>
                                                </a>

                                                <ul v-show="openMenus.has(`${i}-${j}`)" class="sub-menu">
                                                    <li v-for="(sub, k) in child.children" :key="k" class="menu-item">
                                                        <NuxtLink :to="sub.to ?? '#'" class="menu-link" active-class="active">
                                                            <span class="menu-text">{{ sub.label }}</span>
                                                        </NuxtLink>
                                                    </li>
                                                </ul>
                                            </template>

                                            <NuxtLink v-else :to="child.to ?? '#'" class="menu-link" :class="{ active: isActive(child) }">
                                                <span class="menu-text">{{ child.label }}</span>
                                            </NuxtLink>
                                        </li>
                                    </template>
                                </ul>
                            </template>

                            <NuxtLink v-else :to="item.to ?? '#'" class="menu-link" :class="{ active: isActive(item) }">
                                <span v-if="item.icon" class="menu-icon"><i :class="item.icon"></i></span>
                                <span class="menu-text">{{ item.label }}</span>
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </aside>
</template>
