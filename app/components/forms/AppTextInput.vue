<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
    label?: string
    type?: string
    placeholder?: string
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
    readonly?: boolean
}>(), {
    type: 'text',
})

const model = defineModel<string | number>()
const id = useId()
</script>

<template>
    <div class="mb-3">
        <label v-if="props.label" :for="id" class="inline-block mb-2 font-medium">
            {{ props.label }} <span v-if="props.isRequired" class="text-danger">*</span>
        </label>
        <div class="flex">
            <div v-if="$slots.prefix" class="inline-flex items-center px-3 border border-e-0 rounded-s border-default-200 bg-default-100 text-default-600">
                <slot name="prefix" />
            </div>
            <input
                :id="id"
                v-model="model"
                v-bind="$attrs"
                :type="props.type"
                :placeholder="props.placeholder"
                :disabled="props.disabled"
                :readonly="props.readonly"
                :required="props.isRequired"
                :aria-invalid="!!props.errorMessage"
                :class="['form-input', { 'border-danger!': props.errorMessage, 'rounded-s-none': $slots.prefix, 'rounded-e-none': $slots.append }]"
            >
            <div v-if="$slots.append" class="inline-flex items-center px-3 border border-s-0 rounded-e border-default-200 bg-default-100 text-default-600">
                <slot name="append" />
            </div>
        </div>
        <p v-if="props.errorMessage" class="mt-1 text-sm text-danger">{{ props.errorMessage }}</p>
    </div>
</template>
