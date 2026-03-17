<template>
  <div
    class="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col"
  >
    <!-- Image -->
    <div
      class="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden"
    >
      <img
        :src="'https://picsum.photos/300/200?random=' + product?.id"
        :alt="product?.title"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-4 flex flex-col flex-1">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
        {{ product?.title }}
      </h3>

      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 flex-1">
        {{ product?.description }}
      </p>

      <!-- Price -->
      <div class="flex items-baseline gap-2 mb-4">
        <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          R$ {{ product?.price.toFixed(2).replace('.', ',') }}
        </span>
        <span
          v-if="product?.discount !== undefined && product.discount > 0"
          class="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded"
        >
          -{{ (product.discount * 100).toFixed(0) }}%
        </span>
      </div>

      <!-- Button -->
      <button
        @click="addItem(product!)"
        class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Adicionar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
  emits: ['onClick'],
  methods: {
    addItem(product: Product) {
      this.$emit('onClick', product)
    },
  },
})
</script>
