<template>
  <main class="min-h-screen flex items-center justify-center p-6">
    <Card class="w-full max-w-md">
      <template #title>Login</template>
      <template #content>
        <div class="space-y-4">
          <p class="text-sm text-gray-600 dark:text-gray-300">Escolha um perfil para autenticar:</p>
          <div class="flex gap-3">
            <Button label="Entrar como Cliente" class="w-full" @click="handleLogin('CUSTOMER')" />
            <Button
              label="Entrar como Admin"
              severity="contrast"
              class="w-full"
              @click="handleLogin('ADMIN')"
            />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore, type UserRole } from '@/stores/auth'

export default defineComponent({
  setup() {
    const authStore = useAuthStore()

    return {
      authStore,
    }
  },
  methods: {
    handleLogin(role: UserRole) {
      this.authStore.login(role)
      const redirect = this.$route.query.redirect
      if (typeof redirect === 'string' && redirect.length > 0) {
        this.$router.push(redirect)
        return
      }
      this.$router.push({ name: 'home' })
    },
  },
})
</script>
