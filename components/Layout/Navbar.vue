<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <Logo />
        <MainMenu :menuItems="menuItems" />
        <SearchAndIcons />
        <MobileMenu :menuItems="menuItems" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from '../Nabar/Logo.vue';
import MainMenu from '../Nabar/MainMenu.vue';
import SearchAndIcons from '../Nabar/SearchAndIcons.vue';
import MobileMenu from '../Nabar/MobileMenu.vue';

const menuItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Nữ', path: '/women' },
  { name: 'Nam', path: '/men' },
  { name: 'Trang sức', path: '/jewellery' },
  { name: 'Điện tử', path: '/electronics' },
  { name: 'Về chúng tôi', path: '/about' }
];
</script>

<style scoped>
/* Các style cho Navbar nếu cần */
</style>