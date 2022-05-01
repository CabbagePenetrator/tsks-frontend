<script setup>
defineProps({
  errors: Array,
  modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div :class="$attrs.class">
    <div class="relative flex items-center" :class="{ shake: errors }">
      <input
        class="w-full py-2 pl-4 pr-10 bg-transparent border-2 rounded-lg border-zinc-700 focus-visible:outline-none focus-visible:border-fuchsia-400"
        :class="{ 'border-red-900': errors }"
        type="text"
        v-bind="{ ...$attrs, class: null }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <svg
        v-if="errors"
        class="absolute w-6 h-6 text-red-900 right-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div v-if="errors" class="mt-2 h-[14px] text-xs text-left text-red-700">
      {{ errors[0] }}
    </div>
  </div>
</template>
