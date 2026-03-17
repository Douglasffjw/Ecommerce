import type { Router } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export function authorizedGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const roles = to.meta.roles as string[] | undefined

    if (!roles || roles.length === 0) {
      return next()
    }

    if (!authStore.role) {
      return next({ name: 'login' })
    }

    if (roles.includes(authStore.role)) {
      return next()
    }

    return next({ name: 'home' })
  })
}
