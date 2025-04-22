
    <!-- Gọi component MainLayout và đặt Hero và HomeHotDeals bên trong -->
    <template>
        <MainLayout>
            <Hero />
            <HomeHotDeals />
            <!-- <BestSellers /> -->
        </MainLayout>
    </template>
    
    <script setup>
    import Hero from '~/components/home/Hero.vue'
    import HomeHotDeals from '~/components/home/HotDeals.vue'
    import MainLayout from '~/components/Layout/MainLayout.vue'
    // import BestSellers from '~/components/home/BestSellers.vue'
    </script>