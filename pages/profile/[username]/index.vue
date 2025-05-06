<template>
  <MainLayout>
    <div class="profile-page py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <!-- Profile Header -->
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <span class="text-xl font-medium text-indigo-600 dark:text-indigo-300">
                {{ userInitials }}
              </span>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ authStore.user?.name }}
              </h1>
              <p class="text-gray-500 dark:text-gray-400">
                {{ authStore.user?.email }}
              </p>
            </div>
          </div>

          <!-- Profile Content -->
          <div class="space-y-6">
            <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Thông tin cá nhân
              </h2>
              <div class="grid grid-cols-1 gap-4">
                <div class="space-y-1">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Tên người dùng
                  </p>
                  <p class="text-base text-gray-900 dark:text-white">
                    {{ authStore.user?.username }}
                  </p>
                </div>
                <div class="space-y-1">
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p class="text-base text-gray-900 dark:text-white">
                    {{ authStore.user?.email }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';
import MainLayout from '~/components/Layout/MainLayout.vue';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login');
    return;
  }
  
  const username = route.params.username;
  if (username !== authStore.user?.username) {
    router.push('/404');
  }
});

const userInitials = computed(() => {
  if (!authStore.user?.name) return '';
  const names = authStore.user.name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[names.length - 1].charAt(0) : '');
});
</script>