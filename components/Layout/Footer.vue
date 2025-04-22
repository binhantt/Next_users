<template>
  <!-- Sử dụng lớp md:hidden để ẩn trên màn hình lớn hơn md breakpoint -->
  <footer class="md:flex hidden bg-gray-900 text-white py-8 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div class="text-xl font-bold hover:text-gray-300 transition-colors duration-300 cursor-pointer">Siêu Thị Sách</div>
      <div class="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-2 md:space-y-0">
        <NuxtLink 
          to="/" 
          class="hover:text-gray-300 text-center md:text-left transition-colors duration-300"
          :class="{ 'text-gray-300': $route.path === '/' }"
        >
          Trang chủ
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="hover:text-gray-300 text-center md:text-left transition-colors duration-300"
          :class="{ 'text-gray-300': $route.path === '/about' }"
        >
          Về chúng tôi
        </NuxtLink>
      </div>
      <div class="text-sm text-center md:text-right">&copy; 2024 Siêu Thị Sách. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
// Logic cho footer nếu cần
</script>

<style scoped>
/* Các style cho footer nếu cần */
</style>