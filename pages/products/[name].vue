<template>
  <MainLayout>
    <div class="product-detail bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div class="px-4">
        <ProductLoading v-if="loading" />
        <ProductError v-else-if="error" />
        <ProductContent 
          v-else-if="product" 
          :product="product" 
          :images="images"
          @add-to-cart="addToCart"
          @image-change="currentImage = $event"
        />
      </div>
      
      <!-- Recently Viewed Products -->
      <div v-if="viewedProducts.length > 0" class="mt-12 px-4">
        <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sản phẩm đã xem gần đây</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <NuxtLink 
            v-for="product in viewedProducts" 
            :key="product.id"
            :to="`/products/${product.name}`"
            class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <img 
              :src="product.main_image_url" 
              :alt="product.name"
              class="w-full h-32 object-cover rounded mb-2"
            >
            <h4 class="font-medium text-gray-800 dark:text-gray-200 truncate">{{ product.name }}</h4>
            <p class="text-indigo-600 dark:text-indigo-400 font-bold">₫{{ product.price }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/components/Layout/MainLayout.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '~/store/product';

import ProductLoading from '~/components/products/ProductLoading.vue';
import ProductError from '~/components/products/ProductError.vue';
import ProductContent from '~/components/products/ProductContent.vue';

const route = useRoute();
const productStore = useProductStore();
const product = ref(null);
const loading = ref(true);
const error = ref(false);
const images = ref([]);

// Lấy dữ liệu sản phẩm từ store
const fetchProduct = async () => {
  try {
    const foundProduct = productStore.items.find(item => item.name === route.params.name);
    
    if (foundProduct) {
      product.value = foundProduct;
      images.value = foundProduct.images?.map(img => img.image_url) || [];
      
      // Lưu sản phẩm hiện tại vào localStorage
      const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
      const existingIndex = viewedProducts.findIndex(p => p.id === foundProduct.id);
      
      if (existingIndex >= 0) {
        viewedProducts.splice(existingIndex, 1);
      }
      
      viewedProducts.unshift(foundProduct);
      localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts.slice(0, 10)));
    } else {
      error.value = true;
    }
    if (!product.value) throw new Error('Product not found');
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProduct);

// Add this computed property
const viewedProducts = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('viewedProducts') || '[]');
  } catch (error) {
    console.error('Error parsing viewed products:', error);
    return [];
  }
});

// You can now use viewedProducts.value anywhere in your component
// For example, to display recently viewed products:
// <div v-if="viewedProducts.length > 0">
//   <h3>Sản phẩm đã xem gần đây</h3>
//   <div v-for="product in viewedProducts" :key="product.id">
//     {{ product.name }}
//   </div>
// </div>
</script>

<style scoped>
.product-detail {
  transition: all 0.3s ease;
}
</style>