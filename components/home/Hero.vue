<template>
  <div class="relative h-[80vh] w-full overflow-hidden">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :autoplay="{ delay: 3000 }"
      :effect="'fade'"
      class="h-full w-full"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-full">
          <!-- Background Image with Parallax Effect -->
          <div class="absolute inset-0 transform transition-transform duration-[3000ms] hover:scale-110">
            <img
              :src="slide.image_url"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <!-- Enhanced Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70"></div>
          </div>

          <!-- Content with Enhanced Animation -->
          <div class="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <div class="animate-fade-in-down max-w-6xl mx-auto">
              <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {{ slide.title || 'New Arrivals Big Sale' }}
              </h1>
              <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-gray-200">
                {{ slide.subtitle || '' }}
              </p>
              <div class="flex gap-6 justify-center">
                <NuxtLink 
                  :to="slide.button1_link || '/products'" 
                  class="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center"
                >
                  {{ slide.button1_text|| 'Shop Now' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
                <NuxtLink 
                  :to="slide.button2_link || '/promotions'" 
                  class="bg-transparent backdrop-blur-sm border-2 border-white/80 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/20"
                >
                  {{ slide.button2_text || 'Xem Thêm' }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    <div class="absolute top-1/2 left-0 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl -translate-y-1/2"></div>
    <div class="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl -translate-y-1/2"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

import { useProductIntroStore } from '~/store/productIntro'

const productStore = useProductIntroStore()

onMounted(async () => {
  await productStore.fetchProductIntro()
})

const slides = computed(() => {
  if (!productStore.products?.items || !Array.isArray(productStore.products.items)) {
    return []
  }
  return productStore.products.items.map(product => ({
    image_url: product.image_url,
    title: product.title,
    subtitle: product.subtitle,
    button1_text: product.button1_text,
    button1_link: product.button1_link,
    button2_text: product.button2_text,
    button2_link: product.button2_link
  }))
})
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 1.2s ease-out;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(4px);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>