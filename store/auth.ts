import { defineStore } from 'pinia';

interface User {
  data: {
    user: {
      name: string;
      email: string;
      // Add other user properties as needed
    };
    token?: string;
  };
}

interface Credentials {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),

  actions: {
    async login(credentials: Credentials) {
      try {
        const response = await $fetch<User>('/api/auth/login', {
          method: 'POST',
          body: credentials,
        });
        this.user = response;
        return response;
      } catch (error) {
        throw error;
      }
    },

    async initialize() {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          this.user = JSON.parse(userData) as User;
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        this.user = null;
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem('user');
    }
  },
}); 