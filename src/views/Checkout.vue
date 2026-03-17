<template>
  <section class="max-w-5xl mx-auto p-6">
    <Card>
      <template #title>Finalização de Compra</template>
      <template #content>
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Você está autenticado e pode concluir seu pedido com segurança.
          </p>
          <div class="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-4">
            <p class="text-sm text-gray-600 dark:text-gray-300">Total do carrinho</p>
            <p class="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {{ cart.formattedTotal }}
            </p>
          </div>
          <Button label="Confirmar Pedido" class="w-full md:w-auto" />
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>
