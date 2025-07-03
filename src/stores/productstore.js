import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
export const useProductsStore = defineStore('productStore', () => {
    const products = ref([]);
    const fetchProducts = async()=>{
      try{
        const response = await axios.get(import.meta.env.BASE_URL + 'products.json')
        products.value = response.data;
      }catch(error){
        console.error("Error fetching products:",error)
      }
    };
    onMounted(fetchProducts);

    const getFilterdproduct =(gender =null )=>{
      return products.value.filter(p =>{
        const genderMatch = !gender || p.gender === gender;
        return genderMatch;
      })
    }
  return { products,fetchProducts, getFilterdproduct}
})
