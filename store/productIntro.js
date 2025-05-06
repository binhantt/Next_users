import { defineStore } from 'pinia';
import api from '~/config/Api';

export const useProductIntroStore = defineStore('productIntro', {
    state: () => ({
        products: []
    }),
    actions: {
        async fetchProductIntro() {
            try {
                const response = await fetch(`${api}/productIntro`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });
                
                if (!response.ok) throw new Error('Failed to fetch product intro');
                const data = await response.json();
                this.products = data.data || data;
                console.log('Fetched products:', this.products);
            } catch (error) {
                console.error('Error fetching product intro:', error);
                this.products = [];
            }
        }
    }
});