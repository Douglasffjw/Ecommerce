<script lang="ts">
import ProductCard from '@/components/card/ProductCard.vue'
import { productsCatalog } from '@/data/products'
import { useCartStore } from '@/stores/cart'

export default {
  components: { ProductCard },
  setup() {
    const cart = useCartStore()
    return {
      cart,
      products: productsCatalog,
    }
  },
  data() {
    return {}
  },
  methods: {
    goToDetail(productId: string) {
      this.$router.push({ name: 'product-detail', params: { id: productId } })
    },
  },
}
</script>

<template>
  <div class="flex-1">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Periféricos de PC</h2>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      <div v-for="product in products" :key="product.id" class="flex flex-col h-full gap-2">
        <ProductCard class="flex-1" :product="product" @onClick="cart.addItem" />
        <Button
          label="Ver Detalhes"
          severity="secondary"
          outlined
          class="w-full relative"
          @click="goToDetail(product.id)"
        />
      </div>
    </section>
  </div>
</template>
