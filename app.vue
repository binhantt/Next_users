<script setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
authStore.initialize()
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

