<template>
  <div class="product-categories py-12 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">Danh mục sản phẩm</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.id"
          :to="`/category/${category.slug}`"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 mb-4 bg-blue-50 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <img :src="category.icon" :alt="category.name" class="w-8 h-8 object-contain">
            </div>
            <span class="text-base font-semibold text-center text-gray-800 dark:text-gray-100">{{ category.name }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategories } from '~/config/useCategories';
const { categories } = useCategories();
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>