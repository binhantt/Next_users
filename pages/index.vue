<template>
   <MyComponent />
  <div class="home-page flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Chào mừng đến trang chủ</h1>
    <p class="text-lg text-gray-600">Đây là trang chủ của dự án Nuxt.js của bạn.</p>
    <!-- Sử dụng component đã import -->
   
  </div>
</template>

<script setup>
// Import component
import MyComponent from '../components/Layout/default.vue';
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>