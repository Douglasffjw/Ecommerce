<template>
  <main class="space-y-4">
    <Card>
      <template #title>Gestão de Produtos</template>
      <template #content>
        <DataTable :value="products" paginator :rows="5" stripedRows tableStyle="min-width: 50rem">
          <Column field="id" header="ID" />
          <Column field="title" header="Produto" />
          <Column field="description" header="Descrição" />
          <Column header="Preço">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column header="Desconto">
            <template #body="slotProps">{{ (slotProps.data.discount * 100).toFixed(0) }}%</template>
          </Column>
        </DataTable>
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
  methods: {
    formatCurrency(value: number) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    },
  },
})
</script>
