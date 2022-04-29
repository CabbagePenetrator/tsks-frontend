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
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

let errors = $ref({})

const submit = async () => {
  loading = true

  try {
    await $api.post('/register', form)
    await $router.push({ name: 'dashboard' })
  } catch ({ response }) {
    errors = response?.data?.errors ?? {}
  } finally {
    loading = false
  }
}
</script>

<template>
  <Guest>
    <h1 class="text-5xl text-center">Sign up.</h1>
    <form @submit.prevent="submit" class="text-center pt-8">
      <Input
        v-model="form.name"
        :errors="errors.name"
        class="pt-4"
        placeholder="Name"
      />
      <Input
        v-model="form.email"
        :errors="errors.email"
        class="pt-4"
        placeholder="Email"
      />
      <Input
        v-model="form.password"
        :errors="errors.password"
        class="pt-4"
        placeholder="Password"
        type="password"
      />
      <Input
        v-model="form.password_confirmation"
        :errors="errors.password_confirmation"
        class="pt-4"
        placeholder="Confirm password"
        type="password"
      />
      <div class="pt-8">
        <Button :loading="loading">Sign up</Button>
      </div>
      <p class="text-zinc-500 pt-6">
        Already have an account?
        <router-link class="text-white" :to="{ path: 'sign-in' }">
          Sign in
        </router-link>
      </p>
    </form>
  </Guest>
</template>
