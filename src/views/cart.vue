<script setup>
import itemCart from '@/components/itemCart.vue';
import { useCartStore } from '@/stores/cartStore';
const cartStore=useCartStore();
</script>
<template>
    <h1 class="font-bold text-3xl text-center ">Shoping Cart</h1>
    <itemCart
        v-for="item in cartStore.cart"
        :key="item.id"
        :item="item"
    />
  <!--  <pre>{{ cartStore.cart }}</pre>-->
    <div class="max-w-3xl mx-auto bg-gray-100 mt-5 p-4">
        <div class="flex justify-between mb-5">
            <span class="font-bold text-gray-600 ">
                Subtotal 
            </span>
            <span>{{cartStore.totalPrice}}</span>
        </div>
        <div class="flex justify-between mb-5">
            <span class="font-bold text-gray-600 ">
                Shaping 
            </span>
            <span>5 AED</span>
        </div>
        <div class="flex justify-between">
            <span class="font-bold text-gray-600 ">
                    Order total:
            </span>
            <span>{{cartStore.orderTotal}}AED</span>
        </div>
        <div class="mt-5  bg-blue-500 py-2 text-center text-2xl font-bold text-white">
            <button>checkout</button>
        </div>
    </div>

</template>