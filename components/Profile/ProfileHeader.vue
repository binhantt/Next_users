<template>
  <div class="flex flex-col items-center mb-12">
    <div class="relative">
      <div class="w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
        <span class="text-4xl font-bold text-indigo-600 dark:text-indigo-300">{{ initials }}</span>
      </div>
    </div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ name }}</h1>
    <p class="text-gray-600 dark:text-gray-400">{{ email }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  initials: String
});
</script>