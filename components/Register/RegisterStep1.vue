<template>
  <div>
    <div>
      <label for="fullname" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Họ và tên:</label>
      <input 
        type="text" 
        id="fullname" 
        :value="fullname" 
        @input="$emit('update:fullname', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập họ và tên của bạn" 
      />
    </div>
    <div>
      <label for="email" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Email:</label>
      <input 
        type="email" 
        id="email" 
        :value="email" 
        @input="$emit('update:email', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập email của bạn" 
      />
    </div>
    <!-- Thêm lớp mt-6 để tạo khoảng cách phía trên nút -->
    <button type="button" @click="$emit('next-step')" class="w-full py-3 mt-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 focus:outline-none transition duration-300 ease-in-out">
      Tiếp theo
    </button>
  </div>
</template>

<script setup>
defineProps({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

defineEmits(['next-step', 'update:fullname', 'update:email']);
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>