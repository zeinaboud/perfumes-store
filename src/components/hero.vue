
<template>
  <section class="relative bg-gradient-to-br from-[#f8d4a6] to-[#eab676] overflow-hidden pt-16 px-6 md:px-20">
    <!-- Curved BG Shape -->
    <div class="absolute top-0 right-0 md:w-[55%]  h-full bg-[#fdf4ea] rounded-l-full"></div>
    <!-- Main Content -->
    <div class="relative z-10 grid md:grid-cols-2 items-center justify-center gap-12">
      <!-- Text -->
      <div class="text-center md:text-left">
        <h2 class=" text-4xl lg:text-5xl font-extrabold text-[#3d1f00] mb-4">
          Perfume Collection
        </h2>
        <p class="text-lg md:text-xl text-[#4b2c0b] mb-6">
          Discover elegance, charm, and signature scents with our premium line.
        </p>
        <div class="flex gap-4 justify-center md:justify-start">
          <button class="bg-[#7b1e29] hover:bg-[#c0392b] text-[#fef6e4] px-6 py-3 rounded-2xl font-semibold transition">
            Shop Now
          </button>
          <button class="border border-[#7b1e29] text-[#7b1e29] px-6 py-3 rounded-2xl font-medium hover:bg-[#fef6e4] transition">
            Learn More
          </button>
        </div>
      </div>

      <!-- Slider -->
      <div class="relative w-full h-[400px] overflow-hidden">
        <transition-group
          name="fade"
          tag="div"
          class="w-full h-full relative"
        >
          <img
            v-for="(perfume, index) in [currentPerfume]"
            :key="perfume"
            :src="perfume"
            alt="Perfume"
            class="absolute w-full max-w-xs mx-auto left-0 right-0 transition-all duration-700 ease-in-out"
          />
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted ,computed} from 'vue'

const perfumes = [
  new URL('@/assets/img/perfumes/perfume1.png', import.meta.url).href,
  new URL('@/assets/img/perfumes/perfume2.png', import.meta.url).href,
  new URL('@/assets/img/perfumes/perfume4.png', import.meta.url).href,
]

const currentIndex = ref(0)

const currentPerfume = computed(() => perfumes[currentIndex.value])

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % perfumes.length
  }, 3500)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
