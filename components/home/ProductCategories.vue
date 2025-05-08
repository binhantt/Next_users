<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-900 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
          Danh mục sản phẩm
        </h2>
        <p class="text-indigo-600/80 text-lg">Khám phá các danh mục sản phẩm đa dạng của chúng tôi</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.id"
          :to="`/category/${category.slug}`"
          class="group relative bg-white dark:bg-indigo-900/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-indigo-500/10 group-hover:to-indigo-500/20 transition-all duration-500"></div>
          
          <div class="relative p-6">
            <div class="w-16 h-16 mx-auto mb-4 transform transition-transform duration-500 group-hover:scale-110">
              <div class="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-800 dark:to-indigo-900 rounded-2xl flex items-center justify-center shadow-inner">
                <img :src="category.image" :alt="category.name" class="w-8 h-8 object-contain">
              </div>
            </div>
            
            <div class="text-center">
              <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {{ category.name }}
              </h3>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';
import { computed, onMounted, ref } from 'vue';

const categoriesStore = useCategoriesStore();
const isLoading = ref(true);
const categories = computed(() => categoriesStore.items);

onMounted(async () => {
  try {
    await categoriesStore.fetchCategories();
  } catch (error) {
    console.error('Error loading categories:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.product-categories {
  background: linear-gradient(to bottom, rgba(238,242,255,0.8), rgba(255,255,255,1));
  backdrop-filter: blur(10px);
}

@media (prefers-color-scheme: dark) {
  .product-categories {
    background: linear-gradient(to bottom, rgba(49,46,129,0.8), rgba(67,56,202,1));
  }
}
</style>
