<template>
  <div>
    <div>
      <label for="username" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Tên đăng nhập:</label>
      <!-- Thay đổi v-model thành v-bind và v-on -->
      <input 
        type="text" 
        id="username" 
        :value="username" 
        @input="$emit('update:username', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập tên đăng nhập của bạn" 
      />
    </div>
    <div>
      <label for="password" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Mật khẩu:</label>
      <!-- Thay đổi v-model thành v-bind và v-on -->
      <input 
        type="password" 
        id="password" 
        :value="password" 
        @input="$emit('update:password', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập mật khẩu của bạn" 
      />
    </div>
    <div>
      <label for="confirmPassword" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Xác nhận mật khẩu:</label>
      <!-- Thay đổi v-model thành v-bind và v-on -->
      <input 
        type="password" 
        id="confirmPassword" 
        :value="confirmPassword" 
        @input="$emit('update:confirmPassword', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập lại mật khẩu của bạn" 
      />
    </div>
    <div class="flex space-x-2 py-3">
      <button type="button" @click="$emit('prev-step')" class="w-1/2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out">
        Quay lại
      </button>
      <button type="submit" @click="$emit('register')" class="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 focus:outline-none transition duration-300 ease-in-out">
        Đăng ký
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  }
});

defineEmits(['prev-step', 'register', 'update:username', 'update:password', 'update:confirmPassword']);
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>