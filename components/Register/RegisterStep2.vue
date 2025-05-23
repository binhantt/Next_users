<template>
  <div>
    <div>
      <label for="username" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Tên đăng nhập:</label>
      <input 
        type="text" 
        id="username" 
        :value="username" 
        @input="$emit('update:username', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập tên đăng nhập của bạn" 
        required
        minlength="4"
      />
    </div>
    <div>
      <label for="password" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Mật khẩu:</label>
      <input 
        type="password" 
        id="password" 
        :value="password" 
        @input="$emit('update:password', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập mật khẩu của bạn" 
        required
        minlength="6"
      />
    </div>
    <div>
      <label for="confirmPassword" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2 tracking-wide">Xác nhận mật khẩu:</label>
      
      <input 
        type="password" 
        id="confirmPassword" 
        :value="confirmPassword" 
        @input="$emit('update:confirmPassword', $event.target.value)" 
        class="w-full px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out" 
        placeholder="Nhập lại mật khẩu của bạn" 
      />
    </div>
    <div>
      <!-- Captcha Section -->
      <div class="mt-4">
        <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Captcha:</label>
        <div class="flex items-center gap-2 mb-2">
          <img 
            v-if="captchaStore.data?.data.captchaSvg" 
            :src="captchaStore.data?.data.captchaSvg" 
            alt="Captcha" 
            class="h-12 border rounded"
          >
          <button @click="captchaStore.fetchCaptcha()" class="p-2 text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
        <input 
          v-model="captchaInput"
          @input="$emit('update:captchaInput', $event.target.value)"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
          placeholder="Nhập captcha"
        />
      </div>
    </div>
    <div class="flex space-x-2 py-3">
      <button type="button" @click="$emit('prev-step')" class="w-1/2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out">
        Quay lại
      </button>
      <button 
        type="submit" 
        @click="handleSubmit"
        class="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 focus:outline-none transition duration-300 ease-in-out"
      >
        Đăng ký
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCaptchaStore } from '~/store/capcha';

const props = defineProps({
  username: String,
  password: String,
  confirmPassword: String
});

const captchaStore = useCaptchaStore();
const captchaInput = ref('');
const emit = defineEmits(['update:captchaInput', 'prev-step', 'register', 'update:username', 'update:password', 'update:confirmPassword']);

const handleSubmit = () => {
  if (!captchaInput.value) {
    alert('Vui lòng nhập captcha');
    return;
  }
  if (!props.password || !props.confirmPassword) {
    alert('Vui lòng nhập mật khẩu và xác nhận mật khẩu');
    return;
  }
  if (props.password !== props.confirmPassword) {
    alert('Mật khẩu xác nhận không khớp');
    return;
  }
  emit('register', {
    captcha: captchaInput.value,
    captchaId: captchaStore.data?.data.captchaId
  });
};

onMounted(async () => {
  try {
    await captchaStore.fetchCaptcha();
  } catch (error) {
    console.error('Error loading captcha:', error);
  }
});
</script>
