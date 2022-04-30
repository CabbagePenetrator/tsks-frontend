<script setup>
import { useRoute } from 'vue-router'
import Nav from '@/components/shared/Nav.vue'

const $route = useRoute()
</script>

<template>
  <div class="px-6">
    <div class="flex justify-between items-center pt-8">
      <h1 class="text-xl">{{ $route.meta.title }}</h1>
      <button>
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
      </button>
    </div>
    <slot />
  </div>
  <Nav />
</template>
