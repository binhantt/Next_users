<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800 to-white py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900 mb-4">
          Sản phẩm bán chạy
        </h2>
        <p class="text-indigo-600/80 text-lg">Khám phá những sản phẩm được yêu thích nhất</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="product in bestSellers" :key="product.id" 
          class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
          <div class="relative overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <h3 class="font-semibold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {{ product.name }}
            </h3>
            <p class="text-indigo-600 font-bold text-xl">{{ product.price }}đ</p>
            <div class="flex items-center mt-4">
              <span class="text-sm text-indigo-500">Đã bán: {{ product.soldCount }}</span>
              <div class="ml-auto">
                <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bestSellers = ref([
    {
        id: 1,
        name: 'Sản phẩm 1',
        price: '299,000',
        image: '/images/product1.jpg',
        soldCount: 1234
    },
    // Add more products as needed
])
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced shadow effects */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>