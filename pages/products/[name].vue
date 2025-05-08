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
import { ref, computed, onMounted, watch } from 'vue';
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

// Watch for route changes to update product data
watch(() => route.params.name, async (newName) => {
  if (newName) {
    await fetchProduct();
  }
});

// Fetch products if not already in store
const initializeStore = async () => {
  if (productStore.items.length === 0) {
    loading.value = true;
    try {
      await productStore.fetchProducts();
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      loading.value = false;
    }
  }
};

// Lấy dữ liệu sản phẩm từ store
const fetchProduct = async () => {
  loading.value = true;
  error.value = false;
  
  try {
    await initializeStore();
    
    const foundProduct = productStore.items.find(item => item.name === route.params.name);
    
    if (foundProduct) {
      product.value = foundProduct;
      images.value = foundProduct.images?.map(img => img.image_url) || [];
      
      // Update viewed products in store
      updateViewedProducts(foundProduct);
    } else {
      error.value = true;
    }
  } catch (err) {
    console.error('Error fetching product:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

// Update viewed products in localStorage
const updateViewedProducts = (currentProduct) => {
  try {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
    const existingIndex = viewedProducts.findIndex(p => p.id === currentProduct.id);
    
    if (existingIndex >= 0) {
      viewedProducts.splice(existingIndex, 1);
    }
    
    viewedProducts.unshift(currentProduct);
    localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts.slice(0, 10)));
  } catch (error) {
    console.error('Error updating viewed products:', error);
  }
};

// Computed property for viewed products
const viewedProducts = computed(() => {
  try {
    const stored = localStorage.getItem('viewedProducts');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error parsing viewed products:', error);
    return [];
  }
});

onMounted(fetchProduct);
</script>

<style scoped>
.product-detail {
  transition: all 0.3s ease;
}
</style>