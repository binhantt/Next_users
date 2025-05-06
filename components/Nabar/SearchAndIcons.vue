<template>
  <div class="flex items-center space-x-2 md:space-x-6">
    <!-- Search - Ẩn trên mobile -->
    <div class="hidden md:block relative">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        class="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <div class="absolute left-3 top-2.5">
        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Cart -->
    <button class="p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
     
    </button>

    <!-- User -->
    <div class="relative">
      <button 
        @click="toggleUserMenu"
        class="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div class="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
          <span v-if="isLoggedIn" class="text-sm font-medium text-indigo-600 dark:text-indigo-300">{{ userInitials }}</span>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </button>

      <!-- Dropdown menu - Tối ưu cho mobile -->
      <div 
        v-if="showUserMenu"
        class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-200 dark:border-gray-700"
      >
        <NuxtLink 
          v-if="isLoggedIn"
          to="/profile" 
          class="block px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          @click="toggleUserMenu"
        >
          <div class="flex items-center">
            <UserCircleIcon class="h-5 w-5 mr-2 text-gray-500" />
            Trang cá nhân
          </div>
        </NuxtLink>
        <button 
          v-if="isLoggedIn"
          @click="logout"
          class="block w-full text-left px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div class="flex items-center">
            <ArrowLeftOnRectangleIcon class="h-5 w-5 mr-2 text-gray-500" />
            Đăng xuất
          </div>
        </button>
        <button 
          v-else
          @click="login"
          class="block w-full text-left px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div class="flex items-center">
            <ArrowRightOnRectangleIcon class="h-5 w-5 mr-2 text-gray-500" />
            Đăng nhập
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '~/store/auth'; // Updated import path

const authStore = useAuthStore();
const showUserMenu = ref(false);

const isLoggedIn = computed(() => authStore.isAuthenticated);

const userInitials = computed(() => {
  if (!authStore.user?.name) return '';
  const names = authStore.user.name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[names.length - 1].charAt(0) : '');
});

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const login = () => {
  navigateTo('/login');
};

const logout = () => {
  authStore.logout();
  showUserMenu.value = false;
};
</script>