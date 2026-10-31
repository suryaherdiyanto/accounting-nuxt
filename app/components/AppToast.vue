<script setup lang="ts">
import type { ToastVariant } from '~/composables/useToast'

const props = withDefaults(defineProps<{
    message: string
    title?: string
    variant?: ToastVariant
}>(), {
    variant: 'info',
})

defineEmits<{
    close: []
}>()

const styles: Record<ToastVariant, string> = {
    success: 'border-success/30 bg-success/10 text-success',
    danger: 'border-danger/30 bg-danger/10 text-danger',
    warning: 'border-warning/30 bg-warning/10 text-warning',
    info: 'border-info/30 bg-info/10 text-info',
}
</script>

<template>
    <div role="alert" class="flex items-start gap-3 w-80 rounded-md border bg-card p-4 shadow-lg" :class="styles[props.variant]">
        <div class="flex-1 text-sm">
            <p v-if="title" class="font-semibold">{{ title }}</p>
            <p :class="title ? 'mt-1' : ''">{{ message }}</p>
        </div>
        <button type="button" aria-label="Tutup" class="shrink-0 opacity-70 hover:opacity-100" @click="$emit('close')">
            &times;
        </button>
    </div>
</template>
