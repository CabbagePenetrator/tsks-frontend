<script setup>
import Auth from '@/components/layouts/Auth.vue'
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
    <ul>
      <li v-for="collection in collections" :key="collection.id">
        <img src="" alt="" />
        <h2>School</h2>
        <div>4/8 done</div>
      </li>
    </ul>
  </Auth>
</template>
