<template>
  <div class="flex flex-col md:flex-row gap-8 mb-12">
    <!-- Product Image -->
    <div class="w-full md:w-1/2">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-auto rounded-xl shadow-lg"
      >
    </div>
    
    <!-- Product Info -->
    <div class="w-full md:w-1/2">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ product.name }}</h1>
      <!-- ... existing product info code ... -->
    </div>
    
</div>
<button 
  class="w-full mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
  @click="$emit('buy-now')"
>
  Mua hàng ngay
</button>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>