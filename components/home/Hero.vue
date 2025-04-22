<template>
  <div class="relative h-[600px] w-full overflow-hidden">
    <!-- Hero Image with Parallax Effect -->
    <div class="absolute inset-0 transform transition-transform duration-[3000ms] hover:scale-110">
      <img
        src="/gh.webp"
        alt="Shopping Mall"
        class="w-full h-full object-cover"
      />
      <!-- Enhanced Overlay with Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
    </div>

    <!-- Enhanced Content with Animations -->
    <div class="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
      <div class="animate-fade-in-down">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          New <span class="text-orange-400">Arrivals</span> Big Sale
        </h1>
        <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          Khám phá bộ sưu tập mới nhất của chúng tôi với những thiết kế độc đáo và xu hướng mới nhất
        </p>
        <div class="flex gap-4 justify-center">
          <button class="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button class="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Xem Thêm
          </button>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>