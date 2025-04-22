<template>
    <div class="container mx-auto py-8">
        <h2 class="text-2xl font-bold mb-6">Sản phẩm bán chạy</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div v-for="product in bestSellers" :key="product.id" class="bg-white rounded-lg shadow-md p-4">
                <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
                <p class="text-red-600 font-bold">{{ product.price }}đ</p>
                <div class="flex items-center mt-2">
                    <span class="text-sm text-gray-600">Đã bán: {{ product.soldCount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const bestSellers = ref([
    {
        id: 1,
        name: 'Sản phẩm 1',
        price: '299,000',
        image: '/images/product1.jpg',
        soldCount: 1234
    },
    // Add more products as needed
])
</script>