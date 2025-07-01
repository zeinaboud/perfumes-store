<script setup>
import { Icon } from '@iconify/vue';
import {ref,onMounted,onUnmounted} from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'vue-router';

const router=useRouter();
const searchTerm = ref([]);
const handleSearch = () => {
    const value = searchTerm.value.toLowerCase();

  // Simple keyword matching
    const gender = value.includes('woman') || value.includes('women') ? 'women'
                : value.includes('man') || value.includes('men') ? 'men'
                : null;

    router.push({
        name: 'products',
        query: {
        ...(gender && { gender })
    }
    });

  searchTerm.value = ''; // optional: clear input
};
const cartStore = useCartStore();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const navItem = [
    {id:1,name:'Home',link:'/'},
    {id:2,name:'Products',link:'products'},
    {id:3,name:'Categories',link:'#categories'},
    {id:4,name:'Contact-us',link:'contactus'}
]

const handleScrolled = () =>{
    isScrolled.value = window.scrollY >10
}
onMounted(() =>{
    window.addEventListener('scroll',handleScrolled)
})

onUnmounted(()=>{
    window.removeEventListener('scroll',handleScrolled)
})


</script>
<template>
    <header class="sticky  top-0 z-50 transition-all duration-300 ">
    <section :class="['w-full',isScrolled ? 'bg-gray-100/75 backdrop-blur shadow-md pt-2':'bg-white pt-4']">
        <div class=" max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div class="flex flex-col md:flex-row justify-between items-center ">
                <!--]logo +menu mobile toggle-->
                <div class="flex justify-between items-center w-full md:w-auto"> 
                    <a href="/" class="text-2xl font-bold uppercase text-pink-600">shop</a>
                    <button 
                    class="block md:hidden text-gray-700 hover:text-indigo-600"
                    aria-label="Toggle menue"
                    @click="isMobileMenuOpen =! isMobileMenuOpen"
                    >
                    <Icon icon="mdi:menu" class="w-6 h-6 mt-1"/>
                    </button>
                </div>
                <!--search -->
                <div class="w-96 md:flex-1 relative mx-14">
                    <input  v-model="searchTerm"
                        @keydown.enter="handleSearch"
                        type="text" 
                        placeholder="search.." 
                        class=" w-full px-6 py-1  border rounded-full hover:border hover:rounded-full hover:outline-none focus:outline-none focus:text-indigo-600">
                    <button @click="handleSearch" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600">
                        <Icon icon="mdi:search" />
                    </button>
                </div>
                <!--icons-->
                <div class="flex justify-between item-center  mt-2" >
                    <button class="relative p-2 text-gray-700 hover:text-pink-600 ">
                        <icon icon="mdi:heart-outline" class="w-5 h-5"/>
                        <span class="absolute  w-4 h-4  bg-pink-300 text-xs text-black -top-1 -right-1 rounded-full">3</span>
                    </button> 
                    <button  class="relative p-2 text-gray-700 hover:text-pink-600 ">
                        <icon icon="mdi:account-outline" class="w-5 h-5"/>
                        <span class="absolute  w-4 h-4  bg-pink-300 text-xs text-black -top-1 -right-1 rounded-full">3</span>
                    </button>
                        <RouterLink to="/cart"  class="relative p-2 text-gray-700 hover:text-pink-600 ">
                        <icon icon="mdi:cart-outline" class="w-5 h-5"/>
                        <span class="absolute flex items-center justify-center  w-4 h-4  bg-pink-300 text-xs text-black -top-1 -right-1 rounded-full">{{ cartStore.totalItems }}</span>
                    </RouterLink>  
                </div>
            </div>
        </div>
        <nav class="md:bg-[#7b1e29] ">
            <div class="max-w-7xl mx-auto px-2 text-white sm:px-6 lg:px-8">
                <ul class="hidden md:flex justify-center py-3 flex-wrap ">
                    <li v-for="item in navItem" :key="item.id">
                        <RouterLink :to="item.link" class="hover:text-pink-300 transition-colors px-2">{{ item.name }}</RouterLink>
                    </li>
                </ul>

                <section v-if="isMobileMenuOpen"
                class="md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-[#5D4037] text-center">
                    <a v-for="item in navItem" :href="item.link" :key="item.id" class="block hover:text-pink-600 text-sm">{{ item.name }}</a>
                </section>
            </div>
        </nav>
    </section>
</header>
</template>