<script setup lang="ts">
type Option = { label: string, value: string | number, disabled?: boolean }

const props = defineProps<{
    label?: string
    name?: string
    options: Option[]
    inline?: boolean
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
}>()

const model = defineModel<string | number>()
const groupId = useId()
</script>

<template>
    <fieldset class="mb-3" :aria-invalid="!!props.errorMessage">
        <legend v-if="props.label" class="inline-block mb-2 font-medium">
            {{ props.label }} <span v-if="props.isRequired" class="text-danger">*</span>
        </legend>
        <div :class="['flex gap-2', props.inline ? 'flex-row flex-wrap gap-4' : 'flex-col']">
            <div v-for="(option, i) in props.options" :key="option.value" class="flex items-center gap-2">
                <input
                    :id="`${groupId}-${i}`"
                    v-model="model"
                    type="radio"
                    :name="props.name ?? groupId"
                    :value="option.value"
                    :disabled="props.disabled || option.disabled"
                    :required="props.isRequired"
                    :aria-invalid="!!props.errorMessage"
                    :class="['form-radio', { '!border-danger': props.errorMessage }]"
                >
                <label :for="`${groupId}-${i}`" class="align-middle">{{ option.label }}</label>
            </div>
        </div>
        <p v-if="props.errorMessage" class="mt-1 text-sm text-danger">{{ props.errorMessage }}</p>
    </fieldset>
</template>
