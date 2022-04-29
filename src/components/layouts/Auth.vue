<script setup>
import { useRoute } from 'vue-router'

const $route = useRoute()
</script>

<template>
  <div class="px-6">
    <div class="flex justify-between items-center pt-8">
      <h1 class="text-xl">{{ $route.meta.title }}</h1>
      <div class="bg-purple-500 rounded-full w-10 h-10 grid place-items-center">
        JD
      </div>
    </div>
    <div class="pt-10">
      <slot />
    </div>
  </div>
</template>
