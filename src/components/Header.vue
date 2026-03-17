<template>
  <header
    class="w-full bg-white dark:bg-slate-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg"
          >
            <span class="text-white font-bold text-lg">E</span>
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Ecommerce</h1>
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-4 sm:gap-6">
          <!-- Theme Toggle -->
          <ThemeToggle />

          <!-- Cart Button -->
          <button
            @click="showCart = !showCart"
            class="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            <svg
              class="w-6 h-6 text-blue-600 dark:text-blue-400"
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
            <span class="hidden sm:inline text-sm font-medium text-gray-900 dark:text-white">{{
              cartCount
            }}</span>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {{ cartCount }}
            </span>
          </button>

          <!-- Total Price -->
          <div class="hidden sm:block text-right">
            <p class="text-xs text-gray-500 dark:text-gray-400">Total</p>
            <p class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ cartTotal }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile Cart Summary -->
      <div
        v-if="showCart && cartCount > 0"
        class="sm:hidden pb-4 border-t border-gray-200 dark:border-gray-700 pt-4"
      >
        <p class="text-sm text-center font-semibold text-gray-900 dark:text-white">
          {{ cartTotal }}
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

export default defineComponent({
  components: {
    ThemeToggle,
  },
  props: {
    cartCount: {
      type: Number,
      default: 0,
    },
    cartTotal: {
      type: String,
      default: 'R$ 0,00',
    },
  },
  data() {
    return {
      showCart: false,
    }
  },
})
</script>
