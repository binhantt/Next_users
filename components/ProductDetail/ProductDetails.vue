<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Thông tin chi tiết</h2>
    <div class="prose dark:prose-invert" v-html="details"></div>
  </div>
</template>

<script setup>
defineProps({
  details: {
    type: String,
    required: true
  }
});
</script>