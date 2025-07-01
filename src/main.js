import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from "@iconify/vue";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Toast)
app.component(Icon)
app.mount('#app')
