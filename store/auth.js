import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import Api from '~/config/Api'

const isClient = typeof window !== 'undefined'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: null,
      email: '',
      name: '',
      phone: '',
      address: '',
      balance: '0.00',
      is_active: false,
      created_at: null,
      updated_at: null
    },
    isAuthenticated: false,
    token: null
  }),
  actions: {
    initialize() {
      if (!isClient) return
      
      try {
        
        const userData = localStorage.getItem('user')
        this.user = userData ? JSON.parse(userData) : null
        this.isAuthenticated = !!this.token
        this.token = localStorage.getItem('authToken')
        if (this.isAuthenticated) {
          const router = useRouter()
          if (router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      } catch (e) {
        console.error('Failed to initialize auth state:', e)
        // Replace clearAuthState() call with logout logic
        this.user = null

        this.isAuthenticated = false
        this.token = null
        if (isClient) {

          localStorage.removeItem('authToken')
          localStorage.removeItem('user')
        }
      }
    },
    async login(credentials) {
      try {
        const response = await fetch(`${Api}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        if (!response.ok) throw new Error('Đăng nhập thất bại')

        const data = await response.json().data.user

        this.user = data // Thay đổi từ data.user thành data.data.user
        this.isAuthenticated = true
        this.token = data.data.token
        
        if (isClient) {
          localStorage.setItem('authToken', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
        }
        return data
      } catch (error) {
        console.error('Login error:', error)
        throw error
      }
    },
    
    async register(userData) {
      try {
        const response = await fetch(`${Api}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Đăng ký thất bại');
        }
        const data = await response.json()
        this.user = data.user
        this.isAuthenticated = true
        this.token = data.token
        if (isClient) {
          localStorage.setItem('authToken', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
        }
        return data
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    },
    
    logout() {
      this.user = null
      this.isAuthenticated = false
      this.token = null
      if (isClient) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
      }
    }
  }
})