<template>
  <main class="min-h-screen flex items-center justify-center p-6">
    <Card class="w-full max-w-md">
      <template #title>Cadastro</template>
      <template #content>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Cadastro simplificado para o desafio. Continue para autenticação.
        </p>
        <div class="flex gap-3">
          <Button label="Ir para Login" class="w-full" @click="$router.push({ name: 'login' })" />
          <Button
            label="Voltar Home"
            severity="secondary"
            outlined
            class="w-full"
            @click="$router.push({ name: 'home' })"
          />
        </div>
      </template>
    </Card>
  </main>
</template>
