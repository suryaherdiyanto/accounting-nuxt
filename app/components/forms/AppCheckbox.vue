<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = defineProps<{
    label?: string
    value?: string | number
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
}>()

// boolean for a single checkbox, array when several share one v-model (use `value`)
const model = defineModel<boolean | (string | number)[]>()
const id = useId()
</script>

<template>
    <div class="mb-3">
        <div class="flex items-center gap-2">
            <input
                :id="id"
                v-model="model"
                v-bind="$attrs"
                type="checkbox"
                :value="props.value"
                :disabled="props.disabled"
                :required="props.isRequired"
                :aria-invalid="!!props.errorMessage"
                :class="['form-checkbox', { '!border-danger': props.errorMessage }]"
            >
            <label v-if="props.label" :for="id" class="align-middle">
                {{ props.label }} <span v-if="props.isRequired" class="text-danger">*</span>
            </label>
        </div>
        <p v-if="props.errorMessage" class="mt-1 text-sm text-danger">{{ props.errorMessage }}</p>
    </div>
</template>
