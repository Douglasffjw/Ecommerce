<template>
  <header
    class="w-full bg-white dark:bg-slate-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between min-h-16 py-3 gap-4">
        <div class="flex items-center gap-2 shrink-0">
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg"
          >
            <span class="text-white font-bold text-lg">E</span>
          </div>
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Ecommerce</h1>
        </div>

        <div class="w-full max-w-xl hidden md:block">
          <Menubar :model="menuItems" />
        </div>

        <div class="flex items-center gap-4 sm:gap-6 shrink-0">
          <ThemeToggle />

          <div class="hidden sm:block text-right">
            <p class="text-xs text-gray-500 dark:text-gray-400">Itens</p>
            <p class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ cart.count }}</p>
          </div>

          <div class="hidden sm:block text-right">
            <p class="text-xs text-gray-500 dark:text-gray-400">Total</p>
            <p class="text-lg font-bold text-blue-600 dark:text-blue-400">
              {{ cart.formattedTotal }}
            </p>
          </div>

          <Button
            v-if="auth.isAuthenticated"
            label="Sair"
            severity="secondary"
            text
            @click="onLogout"
          />
        </div>
      </div>

      <div class="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
        <Menubar :model="menuItems" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  components: {
    ThemeToggle,
  },
  setup() {
    const router = useRouter()
    const cart = useCartStore()
    const auth = useAuthStore()

    const menuItems = computed(() => [
      { label: 'Home', command: () => router.push({ name: 'home' }) },
      { label: 'Produtos', command: () => router.push({ name: 'products' }) },
      { label: 'Checkout', command: () => router.push({ name: 'checkout' }) },
      { label: 'Admin', command: () => router.push({ name: 'admin-dashboard' }) },
      !auth.isAuthenticated
        ? { label: 'Login', command: () => router.push({ name: 'login' }) }
        : { label: 'Perfil: ' + auth.role, disabled: true },
    ])

    function onLogout() {
      auth.logout()
      router.push({ name: 'home' })
    }

    return {
      cart,
      auth,
      menuItems,
      onLogout,
    }
  },
})
</script>
