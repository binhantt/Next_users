
<template>
  <MainLayout>
    <Hero />
    <ProductCategories/>
    <HomeHotDeals />
    <ProductList />
  </MainLayout>
</template>

<script setup>
import Hero from '~/components/home/Hero.vue'
import HomeHotDeals from '~/components/home/HotDeals.vue'
import ProductCategories from '~/components/home/ProductCategories.vue'
import ProductList from '~/components/home/ProductList.vue'
import MainLayout from '~/components/Layout/MainLayout.vue'
</script>