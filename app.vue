<script setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
authStore.initialize() // Gọi phương thức initialize để khởi tạo auth state
// Khởi tạo auth state khi ứng dụng load
onMounted(() => {
  authStore.initialize()
 
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

