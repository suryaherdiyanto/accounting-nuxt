<script setup lang="ts">
const config = useRuntimeConfig()
useHead({ title: config.public.appName + ' - Dashboard' })
</script>
<template>
    <AppPageTitle text="Dashboard" />
</template>