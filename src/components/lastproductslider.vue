<script setup>
import { Icon } from '@iconify/vue';
import cardproduct from './cardproduct.vue';
import { useProductsStore } from '../stores/productstore';
import { ref,computed,watch,onUnmounted, onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
import { useRouter,RouterLink } from 'vue-router';
const store = useProductsStore();
const products = computed(() => store.products.slice(-6));

/*const currentSlide=ref(0);
const productsperpage=ref(4);
const totalslide=computed(()=>Math.ceil(products.length/productsperpage.value));
const visibleproduct =computed()=>{
    const start = currentSlide.value*productsperpage.value;
    return products.slice(start,start+productsperpage.value)
})

const nextslide = ()=>{
    currentSlide.value = currentSlide.value ===totalslide.value -1 ? 0 :currentSlide.value +1;
}

const prevslide = ()=>{
    currentSlide.value = currentSlide.value ===totalslide.value -1 ? 0 :currentSlide.value -1;
}

const handleresize = ()=>{
    if(window.innerWidth,640){
        productsperpage.value = 1
    }else if(window.innerWidth <700){
        productsperpage.value = 2;
    }else if(window.innerWidth = 1024){
        productsperpage.value;
    }else{
        productsperpage.value = 4;
    }
}

onMounted(()=>{
    handleresize();
    window.addEventListener('resize',handleresize)
})

onBeforeUnmount(()=>{
    window.removeEventListener('resize',handleresize)
})*/

const currentIndex = ref(1);
const screenWidth =ref(window.innerWidth);
const itemsPerPage = ref(getItemsPerPage()); // Show 3 items at a time
const totalPages = computed(()=>{
    Math.ceil(products.value.length / itemsPerPage.value)
});

function getItemsPerPage() {
    if (screenWidth.value < 640) {
    return 1; // Small screens show 1 item
    } else if (screenWidth.value < 1024) {
    return 2; // Medium screens show 2 items
    } else {
    return 3; // Large screens show 3 items
    }
}


const visibleProducts = computed(() =>{
    const startIndex = (currentIndex.value - 1) * itemsPerPage.value;
    return products.value.slice(startIndex, startIndex + itemsPerPage.value);
}); 

const nextSlide = () => {
   currentIndex.value = currentIndex.value ===totalPages.value -1 ? 0 :currentIndex.value +1;
    };
const prevSlide = () => {
    currentIndex.value = currentIndex.value ===totalPages.value -1 ? 0 :currentIndex.value -1;
    };
const handleresize = ()=>{
    screenWidth.value = window.innerWidth;
    itemsPerPage.value = getItemsPerPage();
}

onMounted(()=>{

    window.addEventListener('resize',handleresize)
});
onUnmounted(()=>{
    window.removeEventListener('resize',handleresize)
});


watch(() => visibleProducts.value, (newVal) => {
    console.log("Updated visible products:cd", newVal);
});
</script>

<template>
    <section class="bg-gray-50 pt-20  pb-6 scroll-mt-20">
        <main class="container mx-auto px-4">
            <header class="flex justify-between gap-1 items-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-amber-900 uppercase">The latest Products</h2>
                <nav class="flex space-x-4">
                    <button @click="prevSlide" class="rounded-full bg-white p-2 shadow-md hover:bg-pink-100
                    text-pink-600 transition-colors">
                        <Icon icon="line-md:arrow-small-left" width="24" height="24"></Icon>
                    </button>
                    <button @click="nextSlide" class="rounded-full bg-white p-2 shadow-md hover:bg-pink-100
                    text-pink-600 transition-colors ">
                    <Icon icon="line-md:arrow-small-right" width="24" height="24"></Icon>
                    </button>
                </nav>
            </header>
            <section class="relative overflow-hidden ">
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <cardproduct v-for="product in visibleProducts" :key="product.id" :product="product" />
                </ul>
            </section>
            <div class="mx-auto shadow-mds mt-5 px-1 py-2 bg-white w-fit rounded-lg border-2  border-pink-800 text-md text-pink-900 font-bold hover:bg-pink-100">
                <RouterLink to="/products"> show all product</RouterLink>
             </div>
        </main>
    </section>
    
</template>