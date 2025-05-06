<template>
  <MainLayout>
    <div class="register-page flex flex-col justify-center items-center min-h-screen bg-white dark:bg-gray-900 transition duration-300 ease-in-out">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 mb-8 animate-pulse">Đăng ký</h1>
      <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 transition duration-300 ease-in-out hover:shadow-4xl">
        <img :src="i" alt="">
        <RegisterStep1 
          v-if="step === 1"
          :fullname="fullname"
          :email="email"
          :phone="phone"
          :address="address"
          @update:fullname="(value) => fullname = value"
          @update:email="(value) => email = value" 
          @update:phone="(value) => phone = value"
          @update:address="(value) => address = value"
          @next-step="step = 2"
        />
        <RegisterStep2 
          v-if="step === 2"
          :username="username"
          :password="password"
          :confirmPassword="confirmPassword"
          @update:username="(value) => username = value"
          @update:password="(value) => password = value"
          @update:captchaInput="(value) => captchainput = value"
          @update:confirmPassword="(value) => confirmPassword = value"
          @prev-step="step = 1"
          @register="(captchaInput) => handleRegister(captchaInput)"
        />
      </div>
      <!-- Thêm liên kết quay lại trang đăng nhập -->
      <div class="flex flex-col items-center space-y-2">
        <NuxtLink to="/login" class="text-blue-500 dark:text-blue-400 hover:underline">Đã có tài khoản? Đăng nhập</NuxtLink>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';
import { useCaptchaStore } from '~/store/capcha';

const step = ref(1);
const fullname = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const phone = ref('');
const address = ref('');
const captchaInput = ref('');   // Sửa từ captchainput -> captchaInput

const handleRegister = async ({captcha, captchaId}) => {
  try {
    const authStore = useAuthStore();
    
    await authStore.register({
      email: email.value,
      password: password.value,
      name: fullname.value,
      username: username.value,
      phone: phone.value,
      address: address.value,
      captcha,
      captchaId
    });

    navigateTo('/');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
</script>

<style scoped>
/* Bạn có thể để phần này trống nếu sử dụng Tailwind CSS */
</style>