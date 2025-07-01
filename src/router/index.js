import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import products from '@/views/products.vue'
import detailproduct from '@/views/detailproduct.vue'
import cart from '@/views/cart.vue'
import contactus from '@/components/contactus.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'homePage',
    component:homePage,
    },
    {
    path: '/cart',
    name: 'cart',
    component: cart, 
    },
    {
    path: '/products/',
    name: 'products',
    component: products, 
    },
    {
    path: '/products/:id',
    name: 'productsdetail',
    component: detailproduct, 
    },
    {
    path: '/cart',
    name: 'cart',
    component: cart, 
    },
    {
    path: '/contactus',
    name: 'contactus',
    component: contactus, 
    },
  ],
})

export default router
