<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <!-- Profile Header -->
        <div class="px-6 py-8 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div class="flex items-center space-x-6">
            <div class="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span class="text-3xl font-bold text-indigo-600">
                {{ userInitials }}
              </span>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-white">{{ authStore.user?.name }}</h1>
              <p class="text-indigo-200">@{{ $route.params.name }}</p>
            </div>
          </div>
        </div>

        <!-- Profile Content -->
        <div class="px-6 py-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- User Info -->
            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Thông tin cá nhân</h2>
              <div class="space-y-4">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ authStore.user?.email }}</p>
                </div>
                <!-- Thêm các thông tin khác nếu cần -->
              </div>
            </div>

            <!-- User Actions -->
            <div class="space-y-4">
              <button 
                @click="logout"
                class="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const route = useRoute();

const userInitials = computed(() => {
  if (!authStore.user?.name) return '';
  const names = authStore.user.name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[names.length - 1].charAt(0) : '');
});

const logout = () => {
  authStore.logout();
  navigateTo('/');
};
</script>