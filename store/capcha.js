import { defineStore } from 'pinia';
import api from '~/config/Api';

export const useCaptchaStore = defineStore('captcha', {
  state: () => ({
    data: null
  }),
  actions: {
    async fetchCaptcha() {
      try {
        const response = await fetch(`${api}/generate`);
        if (!response.ok) throw new Error('Failed to fetch captcha');
        this.data = await response.json();
        return this.data;
      } catch (error) {
        console.error('Error fetching captcha:', error);
        throw error;
      }
    },
    verifyCaptcha(input) {
      if (!this.data) return false;
      return { captchaId: this.data.id, input };
    }
  }
});