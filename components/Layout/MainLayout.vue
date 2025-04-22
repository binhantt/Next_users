<template>
  <div>
    <Navbar />
    <main class="pt-16">
      <!-- Sử dụng slot để hiển thị nội dung trang -->
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Layout/Navbar.vue';
import Footer from '~/components/Layout/Footer.vue';
</script>

<style scoped>
/* Các style cho MainLayout nếu cần */
</style>