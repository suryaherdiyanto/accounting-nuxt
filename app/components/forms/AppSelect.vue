<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type Option = { label: string, value: string | number, disabled?: boolean }

const props = defineProps<{
    label?: string
    options: Option[]
    placeholder?: string
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
}>()

const model = defineModel<string | number>()
const id = useId()
</script>

<template>
    <div class="mb-3">
        <label v-if="props.label" :for="id" class="inline-block mb-2 font-medium">
            {{ props.label }} <span v-if="props.isRequired" class="text-danger">*</span>
        </label>
        <select
            :id="id"
            v-model="model"
            v-bind="$attrs"
            :disabled="props.disabled"
            :required="props.isRequired"
            :aria-invalid="!!props.errorMessage"
            :class="['form-input', { '!border-danger': props.errorMessage }]"
        >
            <option v-if="props.placeholder" value="" disabled>{{ props.placeholder }}</option>
            <option v-for="option in props.options" :key="option.value" :value="option.value" :disabled="option.disabled">
                {{ option.label }}
            </option>
        </select>
        <p v-if="props.errorMessage" class="mt-1 text-sm text-danger">{{ props.errorMessage }}</p>
    </div>
</template>
