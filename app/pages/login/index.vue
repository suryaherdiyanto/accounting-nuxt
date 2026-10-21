<script setup lang="ts">
const email = ref('')
</script>

<template>
    <div class="card md:w-lg w-screen z-10">
        <div class="text-center px-10 py-12">
            <div class="mt-2 text-center">
                <h4 class="mb-2.5 text-xl font-semibold text-primary">Selamat Datang Kembali!</h4>
                <p class="text-base text-default-500">Masuk untuk melanjutkan ke akun Anda.</p>
            </div>

            <form class="text-left w-full mt-10" @submit.prevent>
                <AppTextInput
                    v-model="email"
                    label="Alamat Email"
                    type="email"
                    placeholder="anda@contoh.com"
                    autocomplete="email"
                    is-required
                />

                <AppButton type="submit" class="w-full mt-6">Login dengan Email</AppButton>
            </form>

            <div class="my-9 relative text-center before:absolute before:top-2.5 before:start-0 before:end-0 before:w-full before:border-t before:border-default-200 before:-z-0">
                <span class="relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card">atau</span>
            </div>

            <button type="button" class="btn w-full border border-default-200 dark:border-white/14 hover:bg-default-150 shadow-sm hover:text-default-800">
                <svg class="size-5" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                Lanjutkan dengan Google
            </button>
        </div>
    </div>
</template>
