<script setup>
import { useRoute, useRouter } from 'vue-router'
import Nav from '@/components/shared/Nav.vue'
import { inject } from 'vue'

const $router = useRouter()
const $route = useRoute()
const $api = inject('$api')
const showMenu = $ref(false)

const logout = async () => {
  await $api.post('/logout')
  await $router.push({ name: 'sign-in' })
}
</script>

<template>
  <div class="px-6 pb-20">
    <div class="flex justify-between items-center pt-8">
      <h1 class="text-2xl">{{ $route.meta.title }}</h1>
      <button class="relative" @click="showMenu = !showMenu">
        <svg
          class="h-6 w-6 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
        <ul
          v-show="showMenu"
          class="absolute top-0 left-[-70px] rounded-md bg-slate-700 text-zinc-500 pt-5 pb-4 pl-4 pr-10"
        >
          <svg
            class="h-5 w-5 absolute top-2 right-2 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <li>
            <button @click="logout">Logout</button>
          </li>
        </ul>
      </button>
    </div>
    <slot />
  </div>
  <Nav />
</template>
