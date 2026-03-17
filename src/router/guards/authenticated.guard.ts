import type { Router } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export function authenticatedGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const requiresAuth = Boolean(to.meta.requiresAuth || to.meta.requiresCheckoutAuth)

    if (!requiresAuth) {
      return next()
    }

    if (authStore.isAuthenticated) {
      return next()
    }

    return next({
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
    })
  })
}
