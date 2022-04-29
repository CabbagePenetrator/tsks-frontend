<script setup>
import Guest from '@/components/layouts/Guest.vue'
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Input from '@/components/shared/Input.vue'
import Button from '@/components/shared/Button.vue'

const $router = useRouter()
const $api = inject('$api')
let loading = $ref(false)

const form = $ref({
  email: '',
  password: '',
  password_confirmation: '',
  token: '',
})

let errors = $ref({})

const submit = async () => {
  loading = true

  try {
    await $api.post('/reset-password', form)
    await $router.push({ name: 'dashboard' })
  } catch ({ response }) {
    errors = response?.data?.errors ?? {}
  } finally {
    loading = false
  }
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  form.token = params.get('token')
})
</script>

<template>
  <Guest>
    <h1 class="text-5xl text-center">Reset password.</h1>
    <form @submit.prevent="submit" class="text-center pt-8">
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
        <Button :loading="loading">Reset password</Button>
      </div>
    </form>
  </Guest>
</template>
