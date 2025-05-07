<template>
  <div class="product-list py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
          Danh Sách Sản Phẩm
        </h2>
        <p class="text-gray-400 text-lg">Khám phá các sản phẩm chất lượng của chúng tôi</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id" 
          class="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="product.main_image_url"  
              :alt="product.name" 
              class="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2 text-white group-hover:text-indigo-400 transition-colors duration-300">
              {{ product.name }}
            </h3>
   
            <div class="mt-4 flex justify-between items-center">
              <p class="text-indigo-400 font-bold text-2xl">
                ₫{{ product.price }}
              </p>
              <button 
                @click="viewProductDetail(product.name)"
                class="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '~/store/product';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const productStore = useProductStore();
const products = ref([]);

onMounted(async () => {
  await productStore.fetchProducts();
  products.value = productStore.items;
  console.log(products.value);

});

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value;
  const query = searchQuery.value.toLowerCase();
  return products.value.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );
});

const router = useRouter();

const viewProductDetail = (productname) => {
  const product = products.value.find(p => p.name === productname);
  if (product) {
    try {
      const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
      
      // Kiểm tra nếu sản phẩm đã tồn tại
      const existingIndex = viewedProducts.findIndex(p => p.id === product.id);
      
      if (existingIndex >= 0) {
        // Di chuyển sản phẩm lên đầu nếu đã tồn tại
        viewedProducts.splice(existingIndex, 1);
      }
      
      // Thêm sản phẩm mới vào đầu mảng
      viewedProducts.unshift(product);
      
      // Giới hạn chỉ lưu 10 sản phẩm gần nhất
      const limitedProducts = viewedProducts.slice(0, 10);
      localStorage.setItem('viewedProducts', JSON.stringify(limitedProducts));
    } catch (error) {
      console.error('Lỗi khi lưu vào localStorage:', error);
    }
  }
  router.push(`/products/${productname}`);
};
</script>

<style scoped>
/* Add smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Add custom hover effect for product cards */
.group:hover {
  transform: translateY(-5px);
}
</style>