<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="card h-full">
        <div class="card-body">
            <h6 v-if="title || $slots.title" class="card-header">
                <div class="card-title">
                    <slot name="title">{{ title }}</slot>
                </div>
            </h6>

            <div class="text-default-500">
                <slot />
            </div>

            <div v-if="$slots.actions" class="mt-3">
                <slot name="actions" />
            </div>
        </div>

        <div class="card-footer">
            <div v-if="$slots.footer" class="card-footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>
