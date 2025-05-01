<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-8">
    <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Đánh giá sản phẩm</h2>

  </div>
</template>

<script setup>
defineProps({
  reviews: {
    type: Array,
    required: true
  }
});

defineEmits(['buy-now']);
</script>