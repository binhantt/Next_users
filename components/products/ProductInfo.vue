
<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400">
        {{ product.name }}
      </h1>
      <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-lg">
        {{ formatPrice(product.price) }}
      </div>
    </div>

    <div class="flex items-center gap-3">
      <span class="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors duration-200">
        Mã SP: {{ product.id }}
      </span>
    </div>

    <div class="border-t border-b border-gray-200 dark:border-gray-700 py-4">
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-200">
        {{ product.description }}
      </p>
    </div>

    <div class="space-y-4">
      <div class="flex flex-wrap gap-2">
        <span v-for="(tag, index) in tags" :key="index" 
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
              :class="tagClasses[tag.type]">
          <component :is="tag.icon" class="h-4 w-4 mr-1" />
          {{ tag.text }}
        </span>
      </div>

      <div class="flex items-center gap-4">
        <div class="flex items-center rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <button 
            @click="quantity > 1 ? quantity-- : null"
            class="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <MinusIcon class="h-5 w-5" />
          </button>
          <input 
            type="number" 
            min="1" 
            v-model="quantity"
            class="w-12 h-10 text-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none"
          />
          <button 
            @click="quantity++"
            class="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <PlusIcon class="h-5 w-5" />
          </button>
        </div>
        <button 
          @click="addToCart"
          class="flex-1 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg gap-2"
        >
          <ShoppingCartIcon class="h-5 w-5" />
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['add-to-cart']);

const quantity = ref(1);

const tags = [
  {
    type: 'stock',
    text: 'Còn hàng',
    icon: 'CheckIcon'
  },
  {
    type: 'shipping',
    text: 'Giao hàng miễn phí',
    icon: 'TruckIcon'
  },
  {
    type: 'warranty', 
    text: 'Bảo hành 12 tháng',
    icon: 'ShieldCheckIcon'
  }
];

const tagClasses = {
  stock: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
  shipping: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800',
  warranty: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
};

const formatPrice = (price) => {
  if (!price) return 'Liên hệ';
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const addToCart = () => {
  emit('add-to-cart', {
    productId: props.product.id,
    quantity: quantity.value
  });
};
</script>