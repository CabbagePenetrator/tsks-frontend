<script setup>
const props = defineProps({
  collection: Object,
})
</script>

<template>
  <li class="bg-slate-700 rounded-xl p-4">
    <div
      :style="{ background: collection.color }"
      class="w-8 h-8 rounded-md"
    ></div>
    <h2 class="pt-6">{{ collection.title }}</h2>
    <div class="flex justify-between items-center pt-2">
      <div class="text-xs text-zinc-500">
        {{ collection.tasks.filter(task => task.completed).length }} /
        {{ collection.tasks.length }} done
      </div>
      <div
        :style="{ background: collection.color }"
        class="h-5 w-5 rounded-full grid place-items-center"
      >
        <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </li>
</template>
