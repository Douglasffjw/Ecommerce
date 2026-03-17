<template>
  <div
    class="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <Header :cartCount="cartCount" :cartTotal="cartTotal" />

    <main class="flex-1">
      <RouterView @updateCart="updateCart" />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
      cartCount: 0,
      cartTotal: 'R$ 0,00',
    }
  },
  methods: {
    updateCart(cartCount: number, cartTotal: string) {
      this.cartCount = cartCount
      this.cartTotal = cartTotal
    },
  },
})
</script>
