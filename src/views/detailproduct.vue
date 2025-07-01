<script setup>
import { useProductsStore } from '../stores/productstore';
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';
import {useRouter, useRoute, RouterLink} from 'vue-router';
import { Icon } from '@iconify/vue'; 
import { useToast } from 'vue-toastification'

const route = useRoute();
const router = useRouter();
const store = useProductsStore();
const cart =useCartStore();
const toast = useToast();

const product = computed(() =>
    store.products.find(p => p.id == route.params.id)
);
const handleAdd =()=>{
    cart.addToCart(product.value);
    toast.success(`${product.name} added to cart! 🛒`);
    /*router.push('/cart');*/
}
</script>
<template>
    <div v-if="product">
        <div class=" max-w-7xl  mw-auto flex  flex-col lg:flex-row  gap-10">
            <div class="text-center lg:w-1/2">
                <img :src="product.image" alt="product.name" class="mx-auto mt-6  sm:px-6 lg:gap-8 lg:px-8">
            </div>
            <div class="w-full lg:w-1/2 flex flex-col md:mt-8">
                <div class="flex items-center mb-2">
                    <Icon v-for="i in 5" :key="i" icon="line-md:star-alt-filled" width="16" height="16" 
                    :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"></Icon>
                    <span class="text-sm text-blue-500 ml-3">{{product.rating}} reviews</span>
                </div>
                <div class="flex  items-center gap-2 py-2">
                    <span class="text-lg font-bold">Name:</span>
                    <span>{{ product.name }}</span>
                </div>
                <div class="flex items-center gap-2 py-2">
                    <span class="text-lg font-bold">Price:</span>
                    <span>{{(product.price *(1-product.discount/100).toFixed(2))}}$</span>
                    <span class="text-sm text-gray-500 line-through ml-2 ">{{product.price}} $</span>
                </div>
                <div class="flex gap-2 py-2">
                    <span class="text-lg font-bold">Description:</span>
                    <span>{{ product.description }}</span>
                </div>
                <div class="flex items-center  gap-6 ">
                    <button  @click="handleAdd" class="bg-blue-500 text-white font-bold text-lg px-4 py-3 rounded-md w-fit mt-4">
                        add to cart
                    </button>
                    <button class="p-2 mt-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700">
                        <Icon icon="line-md:heart" width="18" height="18"></Icon>"
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div>
        
    </div>
</template>