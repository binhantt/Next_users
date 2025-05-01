<template>
  <MainLayout>
    <div class="profile-page py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProfileHeader 
          :name="user.name" 
          :email="user.email" 
          :initials="userInitials" 
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-8">
            <ProfileOrders />
            <ProfileWishlist />
          </div>

          <div class="space-y-6">
            <ProfileAccountInfo 
              :name="user.name" 
              :email="user.email" 
              :phone="user.phone" 
            />
            
            <button 
              @click="logout"
              class="w-full px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/components/Layout/MainLayout.vue';
import ProfileHeader from '~/components/Profile/ProfileHeader.vue';
import ProfileOrders from '~/components/Profile/ProfileOrders.vue';
import ProfileWishlist from '~/components/Profile/ProfileWishlist.vue';
import ProfileAccountInfo from '~/components/Profile/ProfileAccountInfo.vue';

const user = ref({
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  phone: '0987654321'
});

const userInitials = computed(() => {
  if (!user.value.name) return '';
  const names = user.value.name.split(' ');
  return names[0].charAt(0) + (names.length > 1 ? names[names.length - 1].charAt(0) : '');
});

const logout = () => {
  // Xử lý đăng xuất
  navigateTo('/login');
};
</script>

<style scoped>
/* Có thể để trống nếu sử dụng Tailwind CSS */
</style>