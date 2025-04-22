<template>
  <div class="bg-gray-900 py-12 px-4">
    <h2 class="text-4xl font-bold text-center text-orange-500 mb-10">
      Hot Deals🔥
    </h2>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(product, index) in products" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
        <div class="relative">
          <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover"/>
          <span class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">Low Stock</span>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
          <p class="text-gray-900 font-bold">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomeHotDeals">
const products = [
  {
    name: 'Mens Cotton Jacket',
    image: '/products/jacket.jpg',
    price: '55.99'
  },
  {
    name: 'Mens Cotton Jacket',
    image: '/products/jacket.jpg',
    price: '55.99'
  },
  {
    name: 'Mens Cotton Jacket',
    image: '/products/jacket.jpg',
    price: '55.99'
  }
];
</script>

<style scoped>
/* Styles được xử lý bởi Tailwind CSS */
</style>