<script setup>
import Guest from '@/components/layouts/Guest.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const $api = inject('$api')

const form = $ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = async () => {
  await $api.post('/register', form)
  $router.push('/')
}
</script>

<template>
  <Guest>
    <form @submit.prevent="submit" class="max-w-xs mx-auto">
      <div>
        <label class="block">Name</label>
        <input v-model="form.name" type="text" class="text-black" />
      </div>
      <div class="pt-4">
        <label class="block">Email</label>
        <input v-model="form.email" type="email" class="text-black" />
      </div>
      <div class="pt-4">
        <label class="block">Password</label>
        <input v-model="form.password" type="password" class="text-black" />
      </div>
      <div class="pt-4">
        <label class="block">Confirm password</label>
        <input
          v-model="form.password_confirmation"
          type="password"
          class="text-black"
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  </Guest>
</template>
