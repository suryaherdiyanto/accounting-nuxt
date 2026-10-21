<script setup lang="ts">
defineProps<{ text: string }>()
</script>
<template>
    <h1 class="text-xl pb-3 font-semibold text-default-900">{{ text }}</h1>
</template>