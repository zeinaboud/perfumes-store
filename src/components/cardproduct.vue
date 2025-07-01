<script setup>
import { Icon } from '@iconify/vue'; 
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';
import { useToast } from 'vue-toastification';
// Accept product data as a prop
const props = defineProps({
    product: Object
});

const cartStore =useCartStore();
const toast =useToast();

</script>
<template>
        <li class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105">
        <figure class="relative">
            <img :src="product.image" alt="name" class="w-full max-w-xs mx-auto mx-auto object-cover">
            <button class="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700">
                <Icon icon="line-md:heart" width="18" height="18"></Icon>"
            </button>
            <button class="absolute text-xs top-3 right-3 p-1 bg-red-600 rounded-full shadow-md text-white">
                {{product.discount}} %
            </button>
        </figure>
        <div class="p-4">
            <div class="flex items-center mb-2">
                <Icon v-for="i in 5" :key="i" icon="line-md:star-alt-filled" width="16" height="16" 
                :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'"></Icon>
                <span class="text-sm text-gray-500 ml-1">{{product.rating}}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{{product.name}}</h3>
            
            <div class="flex items-center justify-between">
                <div>
                    <span>{{(product.price *(1-product.discount/100).toFixed(2))}}</span>
                    <span class="text-sm text-gray-500 line-through ml-2">{{product.price}}</span>
                </div>
                <div>
                    <button @click="cartStore.addToCart(product), 
                    toast.success(`${product.name} added to cart! 🛒`)"
                    class="p-2 bg-pink-900 rounded-full text-white hover:bg-pink-700 transition-colors">
                        <Icon icon="icon-park-solid:shopping" width="18" height="18"></Icon>
                    </button>
                </div>
            </div>
            <div class="mx-auto px-1 py-2 bg-white w-fit rounded-lg border-2  border-pink-800 text-md text-pink-900 font-bold hover:bg-pink-100">
                <RouterLink :to="'/products/' + product.id">show more</RouterLink>
            </div>
        </div>
        
    </li>

</template>