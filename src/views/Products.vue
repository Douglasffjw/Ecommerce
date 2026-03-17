<template>
  <main class="space-y-4">
    <Card>
      <template #title>Catálogo</template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="product in products"
            :key="product.id"
            class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex items-center justify-between"
          >
            <div>
              <p class="font-semibold">{{ product.title }}</p>
              <p class="text-sm text-gray-500">{{ product.getPrice() }}</p>
            </div>
            <Button
              label="Detalhes"
              @click="$router.push({ name: 'product-detail', params: { id: product.id } })"
            />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { productsCatalog } from '@/data/products'

export default defineComponent({
  setup() {
    return {
      products: productsCatalog,
    }
  },
})
</script>
