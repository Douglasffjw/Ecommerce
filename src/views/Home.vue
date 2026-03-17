<script lang="ts">
import { Product } from '@/model/product.model'
import ProductCard from '@/components/card/ProductCard.vue'
import { Cart } from '@/model/cart.model'
import CartItem from '@/components/card/CartItem.vue'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(
          '1',
          'Teclado Mecânico RGB',
          'Teclado mecânico com iluminação RGB, switches Blue',
          350,
          0.1,
        ),
        new Product(
          '2',
          'Mouse Gamer',
          'Mouse com precisão 16000 DPI, 8 botões programáveis',
          180,
          0.05,
        ),
        new Product(
          '3',
          'Monitor 24" Full HD',
          'Monitor IPS 24 polegadas, 75Hz, Full HD 1920x1080',
          650,
          0.15,
        ),
        new Product(
          '4',
          'Headset Gamer',
          'Headset com som surround 7.1, microfone retrátil',
          280,
          0.1,
        ),
        new Product('5', 'Mousepad XL', 'Mousepad grande 800x300mm, base antiderrapante', 85, 0.2),
        new Product(
          '6',
          'Webcam Full HD',
          'Webcam 1080p 30fps com microfone embutido e correção automática de luz',
          220,
          0.1,
        ),
      ],
    }
  },
  methods: {
    addItem(item: Product) {
      this.cart.addItem(item)
      this.updateCartHeader()
    },
    decItem(item: Product) {
      this.cart.decrementItem(item)
      this.updateCartHeader()
    },
    removeItem(item: Product) {
      this.cart.removeItem(item)
      this.updateCartHeader()
    },
    updateCartHeader() {
      this.$emit('updateCart', this.cart.list.length, this.cart.getTotalPrice())
    },
    goToDetail(product: Product) {
      const id = product.id
      this.$router.push({ path: `/products/${id}` })
    },
  },
  components: { ProductCard, CartItem },
  mounted() {
    this.updateCartHeader()
  },
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">
    <!-- Produtos -->
    <div class="flex-1">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Periféricos de PC</h2>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="cursor-pointer transform hover:scale-105 transition-transform"
        >
          <ProductCard :product="product" @onClick="addItem" />
        </div>
      </section>
    </div>

    <!-- Carrinho -->
    <aside
      class="w-full lg:w-80 h-fit lg:sticky lg:top-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Carrinho
      </h2>

      <div v-if="cart.list.length > 0" class="space-y-4 max-h-96 overflow-y-auto">
        <div v-for="item in cart.list" :key="item.product.id">
          <CartItem
            :item="item"
            @decrementItem="decItem"
            @removeItem="removeItem"
            @incrementItem="addItem"
          />
        </div>

        <div class="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-700 dark:text-gray-300">Itens:</span>
            <span class="font-semibold text-gray-900 dark:text-white">{{ cart.list.length }}</span>
          </div>
          <div
            class="flex items-center justify-between text-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3"
          >
            <span>Total:</span>
            <span>{{ cart.getTotalPrice() }}</span>
          </div>
          <button
            class="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Finalizar Compra
          </button>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center py-12 text-center">
        <svg
          class="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">Carrinho Vazio</h3>
        <p class="text-gray-400 dark:text-gray-500">Vamos comprar alguns periféricos?</p>
      </div>
    </aside>
  </div>
</template>
