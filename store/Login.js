import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import Api from '~/config/Api'  
export const useLoginStore = defineStore('login', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    async login(credentials) {
      try {
        // Gọi API đăng nhập
        const response = await fetch(`${Api}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        if (!response.ok) throw new Error('Đăng nhập thất bại')

        const data = await response.json()
        this.user = data.user
        this.isAuthenticated = true
        
        // Lưu token vào localStorage
        localStorage.setItem('authToken', data.token)
        
        return data
      } catch (error) {
        console.error('Login error:', error)
        throw error
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('authToken')
    }
  }
})