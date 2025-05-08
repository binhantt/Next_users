<template>
  <MainLayout>
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative">
        <Hero />
      </section>

      <!-- Categories Section -->
      <section class="relative">
        <ProductCategories />
      </section>

      <!-- Hot Deals Section -->
      <section class="relative">
        <HomeHotDeals />
      </section>

      <!-- Product List Section -->
      <section class="relative">
        <ProductList />
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '~/store/product';
import { useCategoriesStore } from '~/store/categories';
import { useProductIntroStore } from '~/store/productIntro';

import Hero from '~/components/home/Hero.vue';
import HomeHotDeals from '~/components/home/HotDeals.vue';
import ProductCategories from '~/components/home/ProductCategories.vue';
import ProductList from '~/components/home/ProductList.vue';
import MainLayout from '~/components/Layout/MainLayout.vue';

const productStore = useProductStore();
const categoriesStore = useCategoriesStore();
const productIntroStore = useProductIntroStore();

// Initialize all data on page load
const initializeStores = async () => {
  try {
    // Fetch data in parallel for better performance
    await Promise.all([
      productStore.items.length === 0 ? productStore.fetchProducts() : Promise.resolve(),
      categoriesStore.items.length === 0 ? categoriesStore.fetchCategories() : Promise.resolve(),
      !productIntroStore.products ? productIntroStore.fetchProductIntro() : Promise.resolve()
    ]);
  } catch (error) {
    console.error('Error initializing stores:', error);
  }
};

onMounted(initializeStores);
</script>