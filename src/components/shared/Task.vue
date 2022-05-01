<script setup>
import { inject } from 'vue'

const props = defineProps({
  task: Object,
  color: String,
})

const $api = inject('$api')
const completed = $ref(false)

const complete = async () => {
  if (completed) {
    await $api.delete(`/api/tasks/${props.task.id}/uncomplete`)
    completed = false
  } else {
    await $api.put(`/api/tasks/${props.task.id}/complete`)
    completed = true
  }
}
</script>

<template>
  <li class="flex gap-3 items-start py-3">
    <button
      :style="{
        'border-color': color,
        background: completed ? color : 'transparent',
      }"
      class="border-2 rounded-lg w-6 h-6 transition-colors duration-300 grid place-items-center"
      @click="complete"
    >
      <svg
        class="h-4 w-4 transition-all transform duration-300"
        :class="{
          'translate-y-0': completed,
          'opacity-0 translate-y-1': !completed,
        }"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div class="">
      <h3>{{ task.title }}</h3>
      <div class="text-xs text-red-500 pt-1">Today 12:00</div>
    </div>
  </li>
</template>
