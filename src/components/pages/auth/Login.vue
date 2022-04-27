<script setup>
import Guest from '@/components/layouts/Guest.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import Input from '@/components/shared/Input.vue'
import Button from '@/components/shared/Button.vue'

const $router = useRouter()
const $api = inject('$api')
let loading = $ref(false)

const form = $ref({
  email: '',
  password: '',
})

let errors = $ref({})

const submit = async () => {
  loading = true

  try {
    await $api.post('/login', form)
    await $router.push('/')
  } catch ({ response }) {
    errors = response?.data?.errors ?? {}
  } finally {
    loading = false
  }
}
</script>

<template>
  <Guest>
    <h1 class="text-5xl text-center">Sign in.</h1>
    <form @submit.prevent="submit" class="text-center pt-8">
      <Input
        v-model="form.email"
        :errors="errors.email"
        class="pt-4"
        placeholder="Email"
      />
      <Input
        v-model="form.email"
        :errors="errors.password"
        class="pt-4"
        placeholder="Password"
        type="password"
      />
      <div class="pt-8">
        <Button :loading="loading">Sign in</Button>
      </div>
      <p class="text-zinc-500 pt-6">
        Don't have an account?
        <router-link class="text-white" :to="{ path: 'sign-up' }">
          Create account
        </router-link>
      </p>
      <router-link class="mt-2 inline-block" :to="{ path: 'forgot-password' }">
        Forgot Password?
      </router-link>
    </form>
  </Guest>
</template>
