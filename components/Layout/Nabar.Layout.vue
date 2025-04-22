<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Logo hoặc tên công ty -->
          <div class="flex-shrink-0 text-white font-bold text-xl">
            Nuxt App
          </div>
          <!-- Các liên kết chính -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                to="/"
                class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-500"
                :class="{ 'bg-indigo-500': $route.path === '/' }"
              >
                Trang chủ
              </NuxtLink>
              <NuxtLink
                to="/Login"
                class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-500"
                :class="{ 'bg-indigo-500': $route.path === '/Login' }"
              >
                Đăng nhập
              </NuxtLink>
            </div>
          </div>
          <!-- Menu cho thiết bị di động -->
          <div class="-mr-2 flex md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            >
              <span class="sr-only">Mở menu chính</span>
              <svg
                :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Menu di động -->
      <div :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink
            to="/"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-500"
            :class="{ 'bg-indigo-500': $route.path === '/' }"
          >
            Trang chủ
          </NuxtLink>
          <NuxtLink
            to="/Login"
            class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500 focus:outline-none focus:text-white focus:bg-indigo-500"
            :class="{ 'bg-indigo-500': $route.path === '/Login' }"
          >
            Đăng nhập
          </NuxtLink>
        </div>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>