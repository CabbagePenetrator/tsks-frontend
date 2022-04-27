<script setup>
import GuestLayout from '@/layouts/Guest.vue'
import LoadingButton from '../../components/LoadingButton.vue'
import TextInput from '../../components/TextInput.vue'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const $axios = inject('$axios')
const $router = useRouter()
const loading = ref(false)

const form = ref({
  email: '',
})

const errors = ref({})

const submit = async () => {
  loading.value = true

  try {
    await $axios.post('/forgot-password', form.value)
    $router.push('/login')
  } catch ({ response }) {
    errors.value = response?.data?.errors ?? {}
  }

  loading.value = false
}
</script>

<template>
  <guest-layout>
    <form @submit.prevent="submit">
      <h1 class="text-4xl">Forgot password</h1>
      <text-input
        v-model="form.email"
        :errors="errors.email"
        class="mt-10"
        type="email"
        placeholder="Email"
      />
      <loading-button class="mt-8" :loading="loading" type="submit"
        >Send link</loading-button
      >
    </form>
    <p class="mt-6 text-zinc-500">
      Already have an account?
      <router-link class="text-white" :to="{ path: 'login' }"
        >Sign in</router-link
      >
    </p>
  </guest-layout>
</template>
