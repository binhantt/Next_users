<template>
  <MainLayout>
    <div class="login-page flex flex-col justify-center items-center min-h-screen bg-white dark:bg-gray-900 transition duration-300 ease-in-out">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 mb-8 animate-pulse">Đăng nhập</h1>
      <form class="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 transition duration-300 ease-in-out hover:shadow-4xl">
        <div>
          <label for="username" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Tên đăng nhập:</label>
          <input type="text" id="username" v-model="username" class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" placeholder="Nhập tên đăng nhập của bạn" />
        </div>
        <div>
          <label for="password" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Mật khẩu:</label>
          <input type="password" id="password" v-model="password" class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" placeholder="Nhập mật khẩu của bạn" />
        </div>
        <button type="submit" @click.prevent="handleLogin" class="w-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 focus:outline-none transition duration-300 ease-in-out">
          Đăng nhập
        </button>
        <!-- Thêm phần đăng ký và quên mật khẩu -->
        <div class="flex flex-col items-center space-y-2">
          <NuxtLink to="/register" class="text-blue-500 dark:text-blue-400 hover:underline">Đăng ký</NuxtLink>
          <NuxtLink to="/forgot-password" class="text-blue-500 dark:text-blue-400 hover:underline">Quên mật khẩu?</NuxtLink>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import MainLayout from '~/components/Layout/MainLayout.vue';

const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Đăng nhập với tên:', username.value, 'và mật khẩu:', password.value);
};
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>