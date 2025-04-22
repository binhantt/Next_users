<template>
  <div class="login-page flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Đăng nhập</h1>
    <form class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-bold mb-2">Tên đăng nhập:</label>
        <input type="text" id="username" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 font-bold mb-2">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <button type="submit" @click.prevent="handleLogin" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Tạo các biến để lưu trữ tên đăng nhập và mật khẩu
const username = ref('');
const password = ref('');

const handleLogin = () => {
  // Thêm logic đăng nhập ở đây
  console.log('Đăng nhập với tên:', username.value, 'và mật khẩu:', password.value);
};
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>