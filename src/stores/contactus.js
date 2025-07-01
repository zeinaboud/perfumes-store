import { defineStore } from 'pinia';
import { ref ,watch} from 'vue';

export const contactStore = defineStore('contactStore',()=>{
    const messages = ref(JSON.parse(localStorage.getItem('contactMessages')) || []);
    const addMessage = (message) => {
    messages.value.push({ ...message, id: Date.now(), date: new Date().toISOString() });
    };

    watch(messages, (newVal) => {
        localStorage.setItem('contactMessages', JSON.stringify(newVal));
    }, { deep: true });
return{ messages, addMessage};
});