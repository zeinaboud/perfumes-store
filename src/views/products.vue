<script setup>
import { Icon } from '@iconify/vue';
import { useProductsStore } from '../stores/productstore';
import cardproduct from '@/components/cardproduct.vue';
import { onMounted ,computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useProductsStore();
const products = computed(() => store.products);

// Fetch data (if you use axios in store)
onMounted(() => {
  store.fetchProducts(); // important if products start as []
});
const gender = computed(()=> route.query.gender || null);
const filterProducts = computed(()=>
    store.getFilterdproduct(gender.value)
);

</script>
<template>
        <section class="relative overflow-hidden mt-2">
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <cardproduct v-for="product in filterProducts" :key="product.id" :product="product" />
            </ul>
        </section>

</template>