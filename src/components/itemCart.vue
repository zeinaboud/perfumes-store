<template>
<div class="max-w-5xl  mx-auto py-3">
    <div class="flex items-center justify-between shadow-md rounded-lg md:p-4">
        <div class="flex items-center space-x-4">
            <div >
                <img :src="imageUrl" alt="item.name" class="w-20 h-20">
            </div>
            <div class="product-info">
                <h2 class="font-bold ">{{ item.name }}</h2>
                <div class="flex mt-2">
                   <span>{{(item.price *(1-item.discount/100).toFixed(2))}}</span>
                    <span class="text-sm text-gray-500 line-through ml-2">{{item.price}}</span>
                </div>
            </div>
        </div>
        <!-- Quantity Controls -->
        <div class=" flex items-center gap-2 mt-2">
            <button @click="cartStore.decreaseQty(item.id)" class="px-2 bg-gray-200 rounded">−</button>
                <span>{{ item.quantity }}</span>
            <button @click="cartStore.increaseQty(item.id)" class="px-2 bg-gray-200 rounded">+</button>
        </div>
        <div>
            <button
            class="text-sm text-red-500 hover:underline mt-1"
            @click="removeFromCart(item.id)"
            >
            Remove
            </button>
        </div>
    </div>
</div>

</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
const { removeFromCart } = useCartStore();
const props = defineProps({
    item: Object
});

// Safely resolve the full image path using Vite base
const imageUrl = computed(() => import.meta.env.BASE_URL + props.item.image);


</script>
