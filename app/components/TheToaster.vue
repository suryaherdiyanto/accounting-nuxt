<script setup lang="ts">
const { toasts, remove } = useToast()
</script>

<template>
    <div class="fixed top-4 right-4 z-[100] flex flex-col gap-3">
        <TransitionGroup name="toast">
            <AppToast
                v-for="toast in toasts"
                :key="toast.id"
                :message="toast.message"
                :title="toast.title"
                :variant="toast.variant"
                @close="remove(toast.id)"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.25s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateX(1rem);
}
</style>
