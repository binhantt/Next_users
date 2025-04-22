<template>
    <!-- Gọi component MainLayout và đặt Hero và HomeHotDeals bên trong -->
    <MainLayout>
        <Hero />
        <HomeHotDeals />
    </MainLayout>
</template>

<script setup>
import Hero from '~/components/home/Hero.vue'
import HomeHotDeals from '~/components/home/HotDeals.vue'
// Import component MainLayout
import MainLayout from '~/components/Layout/MainLayout.vue'
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>