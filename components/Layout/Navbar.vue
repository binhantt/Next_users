<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <!-- Logo section -->
        <div class="flex-shrink-0 flex items-center">
          <Logo />
        </div>

        <!-- Main menu - hidden on mobile -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <MainMenu :menuItems="menuItems" />
        </div>

        <!-- Search and Icons - hidden on mobile -->
        <div class="hidden lg:flex lg:items-center lg:space-x-6">
          <SearchAndIcons />
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center lg:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              :class="{'hidden': isOpen, 'block': !isOpen }"
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              :class="{'block': isOpen, 'hidden': !isOpen }"
              class="h-6 w-6" 
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

    <!-- Mobile menu -->
    <div 
      :class="{'translate-x-0 opacity-100': isOpen, '-translate-x-full opacity-0': !isOpen}"
      class="lg:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out"
    >
      <div class="absolute inset-0 bg-gray-600 opacity-50" @click="isOpen = false"></div>
      <div class="relative bg-white dark:bg-gray-900 h-full w-64 shadow-xl">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <Logo />
            <button
              @click="isOpen = false"
              class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6">
            <MobileMenu :menuItems="menuItems" @click="isOpen = false" />
          </div>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="px-4">
            <SearchAndIcons />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '../Nabar/Logo.vue';
import MainMenu from '../Nabar/MainMenu.vue';
import SearchAndIcons from '../Nabar/SearchAndIcons.vue';
import MobileMenu from '../Nabar/MobileMenu.vue';

const isOpen = ref(false);

const menuItems = [
  { name: 'Trang chủ', path: '/', icon: 'home' },
  { name: 'Nữ', path: '/women', icon: 'female' },
  { name: 'Nam', path: '/men', icon: 'male' },
  { name: 'Trang sức', path: '/jewellery', icon: 'diamond' },
  { name: 'Điện tử', path: '/electronics', icon: 'device' },
  { name: 'Về chúng tôi', path: '/about', icon: 'info' }
];
</script>

<style scoped>
/* Các style cho Navbar nếu cần */
</style>