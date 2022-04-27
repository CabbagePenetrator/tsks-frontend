<template>
  <div>
    <img
      class="absolute top-[-40px] left-[-40px]"
      src="@/assets/pink-circle.svg"
    />
    <img class="absolute top-12 right-4" src="@/assets/gray-circle.svg" />
    <div class="pt-40 px-6 mx-auto">
      <slot />
    </div>
  </div>
</template>
