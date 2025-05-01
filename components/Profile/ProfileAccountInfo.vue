<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Thông tin tài khoản</h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-600 dark:text-gray-400">Họ tên</label>
        <p class="mt-1 text-gray-900 dark:text-white">{{ name }}</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
        <p class="mt-1 text-gray-900 dark:text-white">{{ email }}</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-600 dark:text-gray-400">Số điện thoại</label>
        <p class="mt-1 text-gray-900 dark:text-white">{{ phone || 'Chưa cập nhật' }}</p>
      </div>
    </div>
    <button class="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
      Chỉnh sửa thông tin
    </button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  phone: String
});
</script>