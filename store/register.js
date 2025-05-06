import { defineStore } from 'pinia';
import api from '~/config/Api';

export const useRegisterStore = defineStore('register', {
  actions: {
    async registerUser({ email, password, name, phone, address, captcha, captchaId }) {
      try {
        const response = await fetch(`${api}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password, 
            name,
            phone,
            address,
            captcha,
            captchaId
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Đăng ký thất bại');
        }

        return await response.json();
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    }
  }
});