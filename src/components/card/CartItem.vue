<template>
  <div
    class="flex flex-wrap items-center gap-3 bg-gray-50 dark:bg-slate-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600"
  >
    <!-- Product Image -->
    <img
      :src="'https://picsum.photos/80/80?random=' + item.product.id"
      :alt="item.product.title"
      class="w-16 h-16 rounded-lg object-cover shrink-0"
    />

    <!-- Product Info -->
    <div class="flex-1 min-w-[9rem]">
      <h4 class="font-semibold text-gray-900 dark:text-white truncate text-sm">
        {{ item.product.title }}
      </h4>
      <p class="text-blue-600 dark:text-blue-400 font-bold">
        {{ item.product.getPrice() }}
      </p>
    </div>

    <!-- Quantity Controls -->
    <div
      class="flex items-center bg-white dark:bg-slate-600 rounded-lg border border-gray-200 dark:border-gray-500 shrink-0 ml-auto"
    >
      <button
        @click="onDecrementItem(item.product)"
        class="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-500 transition-colors"
      >
        −
      </button>
      <span class="px-3 py-1 font-semibold text-gray-900 dark:text-white min-w-[2rem] text-center">
        {{ item.quantity }}
      </span>
      <button
        @click="onIncrementItem(item.product)"
        class="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-500 transition-colors"
      >
        +
      </button>
    </div>

    <!-- Remove Button -->
    <button
      @click="onRemoveItem(item.product)"
      class="p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors shrink-0"
      title="Remover do carrinho"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type ICartItem } from '@/model/cart.model'
import type { Product } from '@/model/product.model'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ICartItem>,
      required: true,
    },
  },
  emits: ['removeItem', 'decrementItem', 'incrementItem'],
  methods: {
    onDecrementItem(product: Product) {
      this.$emit('decrementItem', product)
    },
    onRemoveItem(product: Product) {
      this.$emit('removeItem', product)
    },
    onIncrementItem(product: Product) {
      // Emitir um evento personalizado para incrementar
      this.$emit('incrementItem', product)
    },
  },
})
</script>
