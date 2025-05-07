import { defineStore } from 'pinia';
import api from '~/config/Api';

export const useProductStore = defineStore('product', {
    state: () => ({
        items: [],
        loading: false,
        error: null, 
        searchTerm: null , 
    }),
    actions: {
        async fetchProducts() {
            this.loading = true;
            this.error = null;
            
            try {
                const response = await fetch(`${api}/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });
                
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                this.items = data.data || data;
            } catch (error) {
                this.error = error.message;
                console.error('Error fetching products:', error);
            } finally {
                this.loading = false;
            }
        },
        async addProduct(productData) {
            try {
                const response = await fetch(`${api}/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(productData)
                });
                
                if (!response.ok) throw new Error('Failed to add product');
                return await response.json();
            } catch (error) {
                console.error('Error adding product:', error);
                throw error;
            }
        }, 
        async searchName(key){
            try {
                const response = await fetch(`${api}/products/search?name=${key}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });
                const data = await response.json();
                this.searchTerm = data;
                this.items = data; // Thêm dòng này để lưu kết quả vào items
                return data;
            } catch (error) {
                console.error('Error searching products:', error);
                throw error;
            }
        }
       
    },
    getters: {
        getProductById: (state) => (id) => {
            return state.items.find(product => product.id === id);
        },
        searchProductsByName: (state) => (name) => {
            const searchTerm = name.toLowerCase();
            return state.items.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
        }
    }
});