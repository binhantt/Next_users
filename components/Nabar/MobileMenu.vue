<template>
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
    <div 
      :class="{ 
        'fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-900 p-4': mobileMenuOpen, 
        'hidden': !mobileMenuOpen 
      }"
    >
      <!-- Nút đóng menu -->
      <button
        @click="mobileMenuOpen = false"
        class="self-end text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <!-- Thêm dòng -->
      <div v-if="mobileMenuOpen" class="border-t border-gray-300 dark:border-gray-700 my-2"></div>
      <div class="px-2 pt-2 pb-3 space-y-1 flex-grow overflow-y-auto">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);

defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
/* Các styles cho menu di động */
</style>