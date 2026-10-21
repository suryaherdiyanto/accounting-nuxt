<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
    label?: string
    placeholder?: string
    rows?: number
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
    readonly?: boolean
}>(), {
    rows: 3,
})

const model = defineModel<string>()
const id = useId()
</script>

<template>
    <div class="mb-3">
        <label v-if="props.label" :for="id" class="inline-block mb-2 font-medium">
            {{ props.label }} <span v-if="props.isRequired" class="text-danger">*</span>
        </label>
        <textarea
            :id="id"
            v-model="model"
            v-bind="$attrs"
            :rows="props.rows"
            :placeholder="props.placeholder"
            :disabled="props.disabled"
            :readonly="props.readonly"
            :required="props.isRequired"
            :aria-invalid="!!props.errorMessage"
            :class="['form-input', { '!border-danger': props.errorMessage }]"
        />
        <p v-if="props.errorMessage" class="mt-1 text-sm text-danger">{{ props.errorMessage }}</p>
    </div>
</template>
