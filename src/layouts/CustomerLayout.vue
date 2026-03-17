<template>
  <div
    class="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
  >
    <Header />

    <main class="flex-1 max-w-7xl w-full mx-auto p-6">
      <div class="flex flex-col lg:flex-row gap-6">
        <section class="flex-1">
          <RouterView />
        </section>

        <aside
          class="w-full lg:w-80 h-fit lg:sticky lg:top-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Carrinho</h2>

          <div v-if="cart.items.length > 0" class="space-y-4 max-h-96 overflow-y-auto">
            <div v-for="item in cart.items" :key="item.product.id">
              <CartItem
                :item="item"
                @decrementItem="cart.decrementItem"
                @removeItem="cart.removeItem"
                @incrementItem="cart.addItem"
              />
            </div>

            <div class="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
              <div class="flex items-center justify-between mb-4">
                <span class="text-gray-700 dark:text-gray-300">Itens:</span>
                <span class="font-semibold text-gray-900 dark:text-white">{{ cart.count }}</span>
              </div>
              <div
                class="flex items-center justify-between text-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3"
              >
                <span>Total:</span>
                <span>{{ cart.formattedTotal }}</span>
              </div>
              <Button
                label="Finalizar Compra"
                class="w-full mt-4"
                @click="$router.push({ name: 'checkout' })"
              />
            </div>
          </div>

          <div v-else class="flex flex-col items-center justify-center py-12 text-center">
            <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Carrinho Vazio
            </h3>
            <p class="text-gray-400 dark:text-gray-500">Vamos comprar alguns periféricos?</p>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import CartItem from '@/components/card/CartItem.vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  components: {
    Header,
    CartItem,
  },
  setup() {
    const cart = useCartStore()
    return {
      cart,
    }
  },
})
</script>
