<template>
  <div class="relative h-[600px] w-full overflow-hidden">
    <!-- Hero Image -->
    <div class="absolute inset-0">
      <img
        src="/gh.webp"
        alt="Shopping Mall"
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>

    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center text-center text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        New Arrivals Big Sale
      </h1>
      <p class="text-xl md:text-2xl mb-8">
        Khám phá bộ sưu tập mới nhất của chúng tôi
      </p>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
        Shop Now
      </button>
    </div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
/* Additional styles if needed */
</style>