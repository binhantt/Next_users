
<template>
  <div class="space-y-4">
    <div class="relative rounded-xl overflow-hidden aspect-square bg-gray-100 dark:bg-gray-700 shadow-lg">
      <img
        :src="mainImage"
        :alt="altText"
        class="w-full h-full object-cover transition-all duration-300 hover:scale-105"
      />
    </div>
    
    <div class="flex gap-3 overflow-x-auto py-2 px-1 snap-x snap-mandatory">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer snap-start transition-all duration-200"
        :class="{
          'ring-2 ring-indigo-500 ring-offset-2': img === mainImage,
          'opacity-80 hover:opacity-100': img !== mainImage
        }"
        @click="$emit('image-change', img)"
      >
        <img
          :src="img"
          :alt="`${altText} thumbnail ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mainImage: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    default: () => []
  },
  altText: {
    type: String,
    default: 'Product image'
  }
});

defineEmits(['image-change']);
</script>