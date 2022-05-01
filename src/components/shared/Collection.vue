<script setup>
defineProps({
  collection: Object,
})

const collapsed = $ref(false)

const complete = () => {}
</script>

<template>
  <li class="rounded-xl overflow-hidden bg-zinc-900">
    <button
      class="flex w-full justify-between items-center p-4 bg-zinc-800"
      @click="collapsed = !collapsed"
    >
      <div class="text-xl flex gap-3 items-center">
        <div
          :style="{ background: collection.color }"
          class="w-6 h-6 rounded-md"
        ></div>
        <h2>
          {{ collection.title }}
        </h2>
      </div>
      <button
        class="text-zinc-500 transition-transform duration-300"
        :class="{ 'transform rotate-180': collapsed }"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </button>
    <ul
      :style="{ height: collapsed ? 0 : collection.tasks.length * 64 + 'px' }"
      class="px-4 grid overflow-hidden duration-300 transition-all"
      :class="{ 'pb-5': !collapsed }"
    >
      <li v-for="task in collection.tasks" class="flex gap-3 items-start pt-5">
        <button
          :style="{ 'border-color': collection.color }"
          class="border-2 rounded-lg w-6 h-6"
          @click="complete"
        ></button>
        <div class="">
          <h3>{{ task.title }}</h3>
          <div class="text-xs text-red-500 pt-1">Today 12:00</div>
        </div>
      </li>
    </ul>
    <div class="text-center py-4 border-t-2 border-zinc-800">
      <router-link :to="{ path: 'collections' }" class="inline-flex">
        <div>Go to collection</div>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </router-link>
    </div>
  </li>
</template>
