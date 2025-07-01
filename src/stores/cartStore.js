import { defineStore } from "pinia";
import { ref , computed, watch} from "vue";


export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    const addToCart = (product) =>{
    const existing = cart.value.find(item => item.id === product.id);
    if(existing){
        existing.quantity++;
    }else{
        cart.value.push({...product,quantity:1});
    }
    };

    const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId);
    };

    const totalItems = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
    );
    const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    const orderTotal = computed(() =>
    cart.value.reduce((sum, item) => (sum + item.price * item.quantity)+ 5, 0)
    );
 
    const increaseQty = (productId) =>{
        const item = cart.value.find(i =>i.id === productId)
        if(item){
            item.quantity++;
        }
    };

    const decreaseQty = (productId) =>{
        const item = cart.value.find(i =>i.id === productId)
        if(item && item.quantity >1){
            item.quantity--;
        }
    }

    // Load cart from localStorage
    if (localStorage.getItem('cart')) {
    cart.value = JSON.parse(localStorage.getItem('cart'));
    }

     // Save cart to localStorage whenever it changes
    watch(cart, (val) => {
    localStorage.setItem('cart', JSON.stringify(val));
    }, { deep: true });

    return { cart,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
    orderTotal,
    increaseQty,
    decreaseQty}
})
