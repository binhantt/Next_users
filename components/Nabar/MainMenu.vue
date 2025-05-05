<template>
  <div class="flex space-x-8">
    <NuxtLink
      v-for="item in categories"
      :key="item.slug"
      :to="`/category/${convertToSlug(item.name)}`"
      :class="[
        'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200',
        $route.path === `/category/${convertToSlug(item.name)}`
          ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
          : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
      ]"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '~/store/categories';

const categoriesStore = useCategoriesStore();
const categories = computed(() => categoriesStore.items);

const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

onMounted(() => {
  categoriesStore.fetchCategories();
});
</script>
