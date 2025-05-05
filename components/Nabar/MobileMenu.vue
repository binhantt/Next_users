<template>
  <div class="space-y-1 px-2">
    <NuxtLink
      v-for="item in categories"
      :key="item.slug"
      :to="`/category/${convertToSlug(item.name)}`"
      :class="[
        'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
        $route.path === `/category/${convertToSlug(item.name)}`
          ? 'bg-indigo-50 text-indigo-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      ]"
      @click="$emit('click')"
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

<style scoped>
/* Các styles cho menu di động */
</style>