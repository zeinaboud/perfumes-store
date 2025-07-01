<script setup>
import { ref ,computed} from 'vue';

const categories = [
    { title: 'men', image: '/src/assets/img/categories/woman1.jfif' },
    { title: 'women', image: '/src/assets/img/categories/men.jfif' },
    { title: 'unisex', image: '/src/assets/img/categories/unisex.jfif' }
];
</script>
<template>
    <section id="#categories" class="bg-gray-50 pt-20 pb-6 scroll-mt-20">
        <main class="container px-4 mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold text-amber-900 text-center uppercase">Explore Our Fragrance Collections</h2>
            <p class="mt-2 text-gray-800 mb-10 text-center">Discover Scents that your personality and style</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <RouterLink 
                v-for="category in categories"
                :Key="category.title"
                :to="{path : 'products' , query:{gender: category.title.toLocaleLowerCase()}}"
                class="shadow-md relative group overflow-hidden rounded-lg ">
                    <img :src="category.image" alt=""
                    class="-z-10 w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105">
                
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent ">
                        <div class="group-hover:absolute bottom-0 left-0 p-6 z-10 transition duration-300 ease-in-out">
                            <h3 class="text-white text-xl">{{ category.title }}</h3>
                        </div>
                    </div>
                </RouterLink>
            </div>        
        </main>
    </section>
</template>