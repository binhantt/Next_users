<template>
  <!-- Thay đổi lớp từ md:hidden thành block md:hidden -->
  <div class="hidden md:flex flex items-center space-x-4">
    <!-- Thanh tìm kiếm -->
    <div class="relative">
      <input
        type="text"
        placeholder="Search..."
        class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 pl-10 focus:outline-none"
      />
      <span class="absolute left-3 top-2.5">
        🔍
      </span>
    </div>

    <!-- Icons -->
    <button class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      🌙
    </button>
    <button class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      🛒
    </button>
    <button class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      ❤️
    </button>
    <button 
      v-if="isLoggedIn"
      class="w-8 h-8 rounded-full bg-gray-200"
    >
      👤
    </button>
    <NuxtLink 
      v-else 
      to="/login" 
      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
    >
      👤
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'nuxt/app';

const router = useRouter();
// Giả sử có một biến để theo dõi trạng thái đăng nhập
const isLoggedIn = ref(false); 

// Logic để cập nhật trạng thái đăng nhập sau khi người dùng đăng nhập thành công
</script>

<style scoped>
/* Các styles cho thanh tìm kiếm và icons */
</style>