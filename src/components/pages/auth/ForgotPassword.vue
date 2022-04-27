<script setup>
import Guest from '@/components/layouts/Guest.vue'
import Button from '@/components/shared/Button.vue'
import Input from '@/components/shared/Input.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const $api = inject('$api')
let loading = $ref(false)

const form = $ref({
  email: '',
})

let errors = $ref({})

const submit = async () => {
  loading = true

  try {
    await $api.post('/forgot-password', form)
    $router.push('/sign-up')
  } catch ({ response }) {
    errors = response?.data?.errors ?? {}
  }

  loading = false
}
</script>

<template>
  <Guest>
    <form @submit.prevent="submit" class="text-center pt-8">
      <h1 class="text-4xl">Forgot password</h1>
      <Input
        v-model="form.email"
        :errors="errors.email"
        class="mt-10"
        type="email"
        placeholder="Email"
      />
      <Button class="mt-8" :loading="loading" type="submit">Send link</Button>
      <p class="mt-6 text-zinc-500">
        Already have an account?
        <router-link class="text-white" :to="{ path: 'sign-in' }">
          Sign in
        </router-link>
      </p>
    </form>
  </Guest>
</template>
