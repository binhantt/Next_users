<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <ProductGallery 
        :main-image="product.main_image_url"
        :images="images"
        :alt-text="product.name"
        @image-change="$emit('image-change', $event)"
      />
      
      <ProductInfo
        :product="product"
        @add-to-cart="$emit('add-to-cart')"
      />
    </div>
  </div>
</template>

<script setup>
import ProductGallery from './ProductGallery.vue';
import ProductInfo from './ProductInfo.vue';

defineProps({
  product: {
    type: Object,
    required: true
  },
  images: {
    type: Array,
    default: () => []
  }
});

defineEmits(['image-change', 'add-to-cart']);
</script>
  