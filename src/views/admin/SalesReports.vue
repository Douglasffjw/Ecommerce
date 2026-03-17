<template>
  <section class="p-6 space-y-4">
    <Card>
      <template #title>Relatórios de Vendas</template>
      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-4">
            <p class="text-sm text-gray-500 dark:text-gray-300">Pedidos hoje</p>
            <p class="text-2xl font-bold">24</p>
          </div>
          <div class="rounded-lg bg-green-50 dark:bg-green-900/30 p-4">
            <p class="text-sm text-gray-500 dark:text-gray-300">Receita do dia</p>
            <p class="text-2xl font-bold">R$ 8.420,00</p>
          </div>
          <div class="rounded-lg bg-amber-50 dark:bg-amber-900/30 p-4">
            <p class="text-sm text-gray-500 dark:text-gray-300">Ticket médio</p>
            <p class="text-2xl font-bold">R$ 350,83</p>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>
