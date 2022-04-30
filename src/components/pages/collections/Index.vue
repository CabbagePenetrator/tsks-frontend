<script setup>
import Auth from '@/components/layouts/Auth.vue'
import { inject, onBeforeMount, ref } from 'vue'

const $api = inject('$api')

const collections = ref([])

onBeforeMount(async () => {
  const { data } = await $api.get('/api/collections')
  collections.value = data.collections
})
</script>

<template>
  <Auth>
    <div class="flex gap-4 pt-14">
      <button
        class="px-5 py-2 rounded-2xl border-2 border-zinc-600 border-opacity-50"
      >
        Favourites
      </button>
      <button class="px-5 py-2 rounded-2xl cursor-pointer bg-zinc-600">
        All Collections
      </button>
    </div>
    <ul class="grid grid-cols-2 gap-4 pt-8">
      <li
        v-for="collection in collections"
        :key="collection.id"
        class="bg-slate-700 rounded-xl p-4"
      >
        <div
          :style="{ background: collection.color }"
          class="w-8 h-8 rounded-md"
        ></div>
        <h2 class="pt-6">{{ collection.title }}</h2>
        <div class="flex justify-between items-center pt-2">
          <div class="text-xs text-zinc-500">4/8 done</div>
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
      <li
        class="rounded-xl py-7 border-4 border-slate-700 grid place-items-center"
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </li>
    </ul>
  </Auth>
</template>
