<template>
  <div class="relative h-[600px] w-full overflow-hidden">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      :autoplay="{ delay: 3000 }"
      :effect="'fade'"
      class="h-full w-full"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index" >
        <div class="absolute inset-0 transform transition-transform duration-[3000ms] hover:scale-110">
          <img
            :src="slide.image_url"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>
        <div class="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div class="animate-fade-in-down">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {{ slide.title || 'New Arrivals Big Sale' }}
            
            </h1>
            <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
              {{ slide.subtitle || '' }}
            </p>
            <div class="flex gap-4 justify-center">
              <NuxtLink 
                :to="slide.button1_link || '/products'" 
                class="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                {{ slide.button1_text|| 'Shop Now' }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
              <NuxtLink 
                :to="slide.button2_link || '/promotions'" 
                class="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {{ slide.button2_text || 'Xem Thêm' }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'  // Thêm Navigation
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'  // Thêm CSS navigation

const slides = computed(() => {
  return productStore.products.map(product => ({
    image_url: product.image_url,
    title: product.title,
    subtitle: product.subtitle, 
    button1_text: product.button1_text,
    button1_link: product.button1_link,
    button2_text: product.button2_text,
    button2_link: product.button2_link
  }))
})
import { useProductIntroStore } from '~/store/productIntro'

const productStore = useProductIntroStore()

onMounted(async () => {
  await productStore.fetchProductIntro()
})
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