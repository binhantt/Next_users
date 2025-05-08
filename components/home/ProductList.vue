<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-900  py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
          Sản Phẩm Nổi Bật
        </h2>
        <p class="text-indigo-600/80 text-lg max-w-2xl mx-auto">
          Khám phá bộ sưu tập sản phẩm chất lượng cao với thiết kế độc đáo và công nghệ tiên tiến
        </p>
      </div>
      
      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id" 
          class="group relative bg-white dark:bg-indigo-900/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <!-- Product Image -->
          <div class="relative aspect-w-1 aspect-h-1 overflow-hidden">
            <img 
              :src="product.main_image_url"  
              :alt="product.name" 
              class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-indigo-900/0 to-indigo-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Product Info -->
          <div class="p-6 relative">
            <!-- Floating Price Tag -->
            <div class="absolute -top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg transform -translate-y-1/2">
              <span class="font-bold">₫{{ product.price }}</span>
            </div>

            <h3 class="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {{ product.name }}
            </h3>

            <!-- Action Button -->
            <button 
              @click="viewProductDetail(product.name)"
              class="mt-4 w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium py-3 px-4 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:from-indigo-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="flex items-center justify-center">
                Xem chi tiết
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          <!-- Hover Effect Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '~/store/product';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const productStore = useProductStore();
const products = ref([]);
const router = useRouter();

onMounted(async () => {
  await productStore.fetchProducts();
  products.value = productStore.items;
});

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  const query = searchQuery.value.toLowerCase();
  return products.value.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );
});

const viewProductDetail = (productname) => {
  const product = products.value.find(p => p.name === productname);
  if (product) {
    try {
      const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
      const existingIndex = viewedProducts.findIndex(p => p.id === product.id);
      
      if (existingIndex >= 0) {
        viewedProducts.splice(existingIndex, 1);
      }
      
      viewedProducts.unshift(product);
      const limitedProducts = viewedProducts.slice(0, 10);
      localStorage.setItem('viewedProducts', JSON.stringify(limitedProducts));
    } catch (error) {
      console.error('Lỗi khi lưu vào localStorage:', error);
    }
  }
  router.push(`/products/${productname}`);
};
</script>

<style scoped>
.product-list {
  background: linear-gradient(to bottom, rgba(238,242,255,0.8), rgba(255,255,255,1));
  backdrop-filter: blur(10px);
}

@media (prefers-color-scheme: dark) {
  .product-list {
    background: linear-gradient(to bottom, rgba(49,46,129,0.8), rgba(67,56,202,1));
  }
}

/* Smooth hover transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced shadow effects */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>