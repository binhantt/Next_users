<template>
  <div class="hidden md:block hidden ">
    <div class="ml-10 flex items-baseline space-x-4">
      <NuxtLink
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        class="text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white"
        :class="{ 'text-gray-900 dark:text-white': $route.path === item.path }"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
/* Các styles cho menu chính */
</style>