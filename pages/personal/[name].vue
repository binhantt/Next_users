<template>
  <MainLayout>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <!-- Profile Header -->
        <div class="px-6 py-8 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div class="flex items-center space-x-6">
            <div class="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span class="text-3xl font-bold text-indigo-600">
                {{ userInitials }}
              </span>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-white">{{ authStore.user?.name }}</h1>
              <p class="text-indigo-200">@{{ $route.params.name }}</p>
            </div>
          </div>
        </div>

        <!-- Profile Content -->
        <div class="px-6 py-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- User Info -->
            <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Thông tin cá nhân</h2>
              <div class="space-y-4">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ authStore.user?.data.user.email }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Số điện thoại</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ authStore.user?.data.user.phone }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Địa chỉ</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ authStore.user?.data.user.address }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Số dư tài khoản</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ authStore.user?.data.user.balance }} VNĐ</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Ngày tạo tài khoản</p>
                  <p class="text-gray-800 dark:text-gray-200">{{ new Date(authStore.user?.data.user.created_at).toLocaleDateString('vi-VN') }}</p>
                </div>
              </div>
            </div>

            <!-- User Actions -->
            <div class="space-y-4">
              <!-- Edit Profile Form -->
              <div v-if="isEditing" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-white">Chỉnh sửa thông tin</h3>
                <form @submit.prevent="updateProfile" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Tên</label>
                    <input 
                      v-model="editForm.name" 
                      type="text" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input 
                      v-model="editForm.email" 
                      type="email" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Số điện thoại</label>
                    <input 
                      v-model="editForm.phone" 
                      type="tel" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Địa chỉ</label>
                    <input 
                      v-model="editForm.address" 
                      type="text" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                  </div>
                  <div class="flex space-x-4">
                    <button 
                      type="submit"
                      class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Lưu thay đổi
                    </button>
                    <button 
                      type="button"
                      @click="cancelEdit"
                      class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                    >
                      Hủy
                    </button>
                  </div>
                </form>
              </div>

              <!-- Edit and Logout Buttons -->
              <button 
                v-if="!isEditing"
                @click="startEdit"
                class="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors mb-4"
              >
                Chỉnh sửa thông tin
              </button>
              <button 
                @click="logout"
                class="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MainLayout>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
import MainLayout from '~/components/Layout/MainLayout.vue';
const authStore = useAuthStore();
const route = useRoute();

const isEditing = ref(false);
const editForm = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
});

const startEdit = () => {
  editForm.value = {
    name: authStore.user?.data.user.name || '',
    email: authStore.user?.data.user.email || '',
    phone: authStore.user?.data.user.phone || '',
    address: authStore.user?.data.user.address || ''
  };
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
  editForm.value = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
};

const updateProfile = async () => {
  try {
    // Kiểm tra dữ liệu đầu vào
    if (!editForm.value.name || !editForm.value.email || !editForm.value.phone || !editForm.value.address) {
      throw new Error('Vui lòng điền đầy đủ thông tin');
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editForm.value.email)) {
      throw new Error('Email không hợp lệ');
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(editForm.value.phone)) {
      throw new Error('Số điện thoại không hợp lệ (phải có 10 chữ số)');
    }

    // Gửi request cập nhật thông tin
    const response = await fetch('http://localhost:8000/api/users/update-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.user.data.token}`
      },
      body: JSON.stringify({
        name: editForm.value.name,
        email: editForm.value.email,
        phone: editForm.value.phone,
        address: editForm.value.address
      })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Có lỗi xảy ra khi cập nhật thông tin');
    }

    // Cập nhật thông tin trong store
    authStore.user.data.user = {
      ...authStore.user.data.user,
      ...editForm.value
    };

    // Đóng form chỉnh sửa
    isEditing.value = false;

    // Hiển thị thông báo thành công
    alert('Cập nhật thông tin thành công');

  } catch (error) {
    // Hiển thị thông báo lỗi
    alert(error.message || 'Có lỗi xảy ra khi cập nhật thông tin');
    console.error('Lỗi khi cập nhật thông tin:', error);
  }
};

const userInitials = computed(() => {
  if (!authStore.user?.name) return '';
  const names = authStore.user.name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[names.length - 1].charAt(0) : '');
});

const logout = () => {
  authStore.logout();
  navigateTo('/');
};
</script>