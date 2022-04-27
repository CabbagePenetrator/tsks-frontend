<script setup>
defineProps({
  loading: Boolean,
})
</script>

<template>
  <button
    :disabled="loading"
    class="grid w-full h-12 text-center rounded-lg place-items-center bg-gradient-to-tr from-fuchsia-500 to-rose-400 disabled:cursor-not-allowed disabled:text-opacity-50 focus-visible:outline-2 focus-visible:outline-fuchsia-500 focus-visible:outline"
  >
    <div v-if="loading" class="btn-spinner"></div>
    <slot v-else />
  </button>
</template>
