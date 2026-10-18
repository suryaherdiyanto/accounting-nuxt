<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
    variant?: Variant
    size?: Size
    soft?: boolean
    type?: 'button' | 'submit' | 'reset'
}>(), {
    variant: 'primary',
    size: 'md',
    soft: false,
    type: 'button',
})

// Full class strings so Tailwind can detect them
const softVariants: Record<Variant, string> = {
    primary: 'bg-primary/10 text-primary hover:bg-primary hover:text-white',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white',
    success: 'bg-success/10 text-success hover:bg-success hover:text-white',
    info: 'bg-info/10 text-info hover:bg-info hover:text-white',
    warning: 'bg-warning/10 text-warning hover:bg-warning hover:text-white',
    danger: 'bg-danger/10 text-danger hover:bg-danger hover:text-white',
}

const solidVariants: Record<Variant, string> = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    success: 'bg-success text-white hover:bg-success/90',
    info: 'bg-info text-white hover:bg-info/90',
    warning: 'bg-warning text-white hover:bg-warning/90',
    danger: 'bg-danger text-white hover:bg-danger/90',
}

const sizes: Record<Size, string> = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
}
</script>

<template>
    <button :type="props.type" :class="['btn', (props.soft ? softVariants : solidVariants)[props.variant], sizes[props.size]]">
        <slot />
    </button>
</template>
