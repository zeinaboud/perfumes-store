<script setup>
import { Icon } from '@iconify/vue';
import {ref} from 'vue';
import {  contactStore } from '@/stores/contactus';

const contactusStore= contactStore();

const form = ref({
    name:'',
    email:'',
    message:''
});

const errors = ref({});
const success= ref(false);

const isValidEmail =(email)=>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const handleSubmit=()=>{
    errors.value = {};

    if (form.value.name.length <3)
        errors.value.name ='Name must be at least 3 characters.'
    if(form.value.message.length <10){
        errors.value.message = 'Message must be at least 10 characters.';
    }
    if(!isValidEmail(form.value.email)){
        errors.value.email='Invalid email address.';
    }

    if(Object.keys(errors.value).length > 0) return;

    contactusStore.addMessage({...form.value});
    success.value = true;
    
    form.value = {name: '' ,email:'',message:''}
}

</script>
<template>
    <section id="contactus" class="bg-[#7b1e29] py-6 min-h-screen">
            <h2 class="text-2xl text-center md:text-3xl font-bold text-white uppercase  ">Contact Us</h2>
            <p class="text-white/60 text-center">we will be very happy if you contact with us </p>
            <div class=" mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="bg-white shadow-md rounded-md p-4">
                    <form @submit.prevent="handleSubmit">
                        <div class=" py-3">
                            <label for="" class="font-bold pr-2 ">Name</label>
                            <input v-model="form.name" type="text" placeholder="Enter Your Name" class=" border px-4 py-2 mt-1 rounded-lg w-full focus:ring-2 outline-none focus:ring-[#7b1e29]">
                            <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
                        </div>
                        <div class=" py-3">
                            <label for="" class="font-bold pr-4">Email</label>
                            <input v-model="form.email" type="email"  placeholder="Enter Your Email" class=" border px-4 py-2 mt-1 rounded w-full focus:ring-2 outline-none focus:ring-[#7b1e29]">
                            <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                        </div>
                        <div class=" py-3">
                            <label for="" class="font-bold pr-2">Message</label>
                            <textarea v-model="form.message" type="text" rows="4" placeholder="Enter Your Name" class=" border px-4 py-2 mt-1 rounded w-full focus:ring-2 outline-none focus:ring-[#7b1e29]"></textarea>
                            <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
                        </div>
                        <button type="submit" class="bg-[#7b1e29] hover:bg-[#c0392b] text-[#fef6e4] px-6 py-3 text-center text-xl rounded-2xl font-semibold transition">
                            >Send Your Message
                        </button>
                    </form>
                </div>
                <div class="bg-white shadow-md rounded-md p-4 space-y-6">
                    <h3 class="font-bold text-2xl ">Contact Information</h3>
                    <div class="flex gap-3">
                        <div class="bg-pink-200 p-3 rounded-full mr-4">
                            <icon icon="fa-solid:phone" class="text-pink-950 text-lg"></icon>
                        </div>
                        <div>
                            <span class="font-bold block">Phone</span>
                            <span class="text-gray-700">+589 5224 555</span>
                        </div>
                    </div>
                    <div class="flex gap-3 ">
                        <div class="bg-pink-200 p-3 rounded-full mr-4">
                            <icon icon="fa-solid:map-marker-alt" class="w-5 h-5"></icon>
                        </div>
                        <div>
                            <span class="font-bold block">Email</span>
                            <span class="text-gray-700">zeinaboud@gmail.com</span>
                        </div>
                    </div>
                </div>
        </div>

    </section>
</template>