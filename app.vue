<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

// Initialize auth state when app starts
onMounted(async () => {
  await authStore.initialize();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

