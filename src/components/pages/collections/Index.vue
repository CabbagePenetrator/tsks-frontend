<script setup>
import Auth from '@/components/layouts/Auth.vue'
import { inject, onBeforeMount, ref } from 'vue'
import Collection from '@/components/shared/Collection.vue'

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
      <Collection
        v-for="collection in collections"
        :key="collection.id"
        :collection="collection"
      />
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
