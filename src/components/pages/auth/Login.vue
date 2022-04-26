<script setup>
import Guest from '../../layouts/Guest.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const $api = inject('$api')

const form = $ref({
  email: '',
  password: '',
})

const submit = async () => {
  await $api.post('/login', form)
  $router.push('/')
}
</script>

<template>
  <Guest>
    <form @submit.prevent="submit" class="max-w-xs mx-auto">
      <div class="pt-4">
        <label class="block">Email</label>
        <input v-model="form.email" type="email" class="text-black" />
      </div>
      <div class="pt-4">
        <label class="block">Password</label>
        <input v-model="form.password" type="password" class="text-black" />
      </div>
      <button type="submit">Sign in</button>
    </form>
  </Guest>
</template>
