<template>
  <section v-if="product" class="max-w-3xl mx-auto space-y-4">
    <ProductCard :product="product" @onClick="cart.addItem" />
    <div class="flex gap-3">
      <Button label="Adicionar ao carrinho" @click="cart.addItem(product)" />
      <Button
        label="Ir para checkout"
        severity="secondary"
        outlined
        @click="$router.push({ name: 'checkout' })"
      />
    </div>
  </section>
  <section v-else class="p-6">
    <Card>
      <template #title>Produto não encontrado</template>
      <template #content>
        <Button label="Voltar para Home" @click="$router.push({ name: 'home' })" />
      </template>
    </Card>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/card/ProductCard.vue'
import { productsCatalog } from '@/data/products'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  components: { ProductCard },
  setup() {
    const cart = useCartStore()
    return {
      cart,
    }
  },
  computed: {
    product() {
      const productId = String(this.$route.params.id)
      return productsCatalog.find((p) => p.id === productId)
    },
  },
})
</script>
