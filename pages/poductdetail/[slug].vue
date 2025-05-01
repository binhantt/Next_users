<template>
  <MainLayout>
    <div class="product-detail py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 dark:text-gray-400">Đang tải sản phẩm...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-500 dark:text-red-400 text-lg">Không tìm thấy sản phẩm</p>
          <NuxtLink to="/products" class="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Quay lại danh sách
          </NuxtLink>
        </div>

        <!-- Product Content -->
        <div v-else-if="product">
          <ProductHeader :product="product" />
          <ProductDetails :details="product.details" />
          <ProductReviews :reviews="product.reviews" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/components/Layout/MainLayout.vue';
import ProductHeader from '~/components/ProductDetail/ProductHeader.vue';
import ProductDetails from '~/components/ProductDetail/ProductDetails.vue'; 
import ProductReviews from '~/components/ProductDetail/ProductReviews.vue';

const route = useRoute();
const slug = route.params.slug;

const loading = ref(true);
const error = ref(false);
const product = ref(null);

// Simulate API call
setTimeout(() => {
  try {
    product.value = {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '25.000.000',
      description: 'Điện thoại cao cấp với camera 48MP',
      image: '/images/iphone15.jpg',
      details: '<ul><li>Màn hình: 6.7 inch Super Retina XDR</li><li>Chip: A17 Pro</li><li>RAM: 8GB</li><li>Bộ nhớ: 256GB</li></ul>',
      stock: 3,
      reviews: [
        {
          id: 1,
          user: 'Nguyễn Văn A',
          date: '15/10/2023',
          rating: 5,
          comment: 'Máy chụp ảnh đẹp, pin trâu'
        },
        {
          id: 2,
          user: 'Trần Thị B',
          date: '20/10/2023',
          rating: 4,
          comment: 'Máy đẹp nhưng giá hơi cao'
        }
      ]
    };
    loading.value = false;
  } catch (err) {
    error.value = true;
    loading.value = false;
  }
}, 500);

// Set meta tags
useHead(() => ({
  title: product.value?.name || 'Chi tiết sản phẩm',
  meta: [
    { 
      name: 'description', 
      content: product.value?.description || 'Trang chi tiết sản phẩm' 
    }
  ]
}));
</script>


