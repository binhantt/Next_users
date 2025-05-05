import { defineStore } from 'pinia';
import api from '~/config/Api';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
      items: []
    }),
    actions: {
      async fetchCategories() {
        try {
          const response = await fetch(`${api}/categroy`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            credentials: 'include'
          });
          
          if (!response.ok) throw new Error('Failed to fetch categories');
          const data = await response.json();
          this.items = data.data || data; 
          console.log('Fetched categories:', this.items);
        } catch (error) {
          console.error('Error fetching categories:', error);
          this.items = []; // Reset items on error
        }
      }
    }
  });