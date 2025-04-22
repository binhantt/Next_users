<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <span class="text-white font-bold">
              📚 Siêu Thị Sách
            </span>
          </div>

          <!-- Menu chính -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.path"
                class="text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 dark:hover:text-white"
                :class="{ 'text-gray-900 dark:text-white': $route.path === item.path }"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Thanh tìm kiếm và icons -->
          <div class="flex items-center space-x-4">
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
            <button class="w-8 h-8 rounded-full bg-gray-200">
              👤
            </button>
          </div>

          <!-- Menu cho thiết bị di động -->
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <span class="sr-only">Mở menu chính</span>
              <svg
                :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Menu di động -->
      <div :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 dark:hover:text-white"
            :class="{ 'text-gray-900 dark:text-white': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
    <main class="pt-16">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Women', path: '/women' },
  { name: 'Men', path: '/men' },
  { name: 'Jewellery', path: '/jewellery' },
  { name: 'Electronics', path: '/electronics' },
  { name: 'About Us', path: '/about' }
];
</script>

<style scoped>
/* Các styles sẽ được xử lý bởi Tailwind CSS */
</style>