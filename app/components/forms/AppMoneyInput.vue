<script setup lang="ts">
const props = withDefaults(defineProps<{
    label?: string
    placeholder?: string
    errorMessage?: string
    isRequired?: boolean
    disabled?: boolean
    readonly?: boolean
    locale?: string
}>(), {
    locale: 'id-ID',
})

// Real value is an integer (or null when empty); the formatted text is display only
const model = defineModel<number | null>()

const formatter = computed(() => new Intl.NumberFormat(props.locale, { maximumFractionDigits: 0 }))
const format = (value?: number | null) => (value == null ? '' : formatter.value.format(value))

const display = ref(format(model.value))

watch([model, formatter], () => {
    display.value = format(model.value)
})

function onInput(event: Event) {
    const el = event.target as HTMLInputElement
    const caret = el.selectionStart ?? el.value.length
    const digitsBeforeCaret = el.value.slice(0, caret).replace(/\D/g, '').length

    // Number.MAX_SAFE_INTEGER has 16 digits, keep 15 to stay safe
    const digits = el.value.replace(/\D/g, '').slice(0, 15)
    const value = digits === '' ? null : parseInt(digits, 10)

    model.value = value
    display.value = format(value)
    el.value = display.value

    // Put the caret back after the same digit, since separators shift positions
    let pos = 0
    let seen = 0
    while (pos < el.value.length && seen < digitsBeforeCaret) {
        if (/\d/.test(el.value[pos]!)) seen++
        pos++
    }
    el.setSelectionRange(pos, pos)
}
</script>

<template>
    <AppTextInput
        :model-value="display"
        :label="props.label"
        :placeholder="props.placeholder"
        :error-message="props.errorMessage"
        :is-required="props.isRequired"
        :disabled="props.disabled"
        :readonly="props.readonly"
        inputmode="numeric"
        autocomplete="off"
        @input="onInput"
    >
        <template v-if="$slots.prefix" #prefix><slot name="prefix" /></template>
        <template v-if="$slots.append" #append><slot name="append" /></template>
    </AppTextInput>
</template>
