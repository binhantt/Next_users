<template>
  <div class="flex space-x-8">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.path"
      :to="item.path"
      :class="[
        'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200',
        $route.path === item.path
          ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
          : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
      ]"
    >
      {{ item.name }}
    </NuxtLink>
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