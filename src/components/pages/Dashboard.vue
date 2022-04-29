<script setup>
import Auth from '@/components/layouts/Auth.vue'
</script>

<template>
  <Auth>
    <h2 class="text-4xl pt-14">
      <div>Good morning,</div>
      <div>Jane Doe</div>
    </h2>
    <div class="flex gap-4 pt-14">
      <button class="bg-zinc-600 px-5 py-2 rounded-2xl">Daily overview</button>
      <button
        class="px-5 py-2 rounded-2xl border-2 border-zinc-600 border-opacity-50"
      >
        Statistics
      </button>
    </div>
  </Auth>
</template>
