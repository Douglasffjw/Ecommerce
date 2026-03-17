import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export type UserRole = 'CUSTOMER' | 'ADMIN'

const AUTH_STORAGE_KEY = 'ecommerce-auth'

interface AuthSnapshot {
  isAuthenticated: boolean
  role: UserRole | null
}

function readAuthSnapshot(): AuthSnapshot {
  const saved = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!saved) {
    return { isAuthenticated: false, role: null }
  }

  try {
    const parsed = JSON.parse(saved) as AuthSnapshot
    return {
      isAuthenticated: Boolean(parsed.isAuthenticated),
      role: parsed.role ?? null,
    }
  } catch {
    return { isAuthenticated: false, role: null }
  }
}

export const useAuthStore = defineStore('auth', () => {
  const snapshot = readAuthSnapshot()
  const isAuthenticated = ref(snapshot.isAuthenticated)
  const role = ref<UserRole | null>(snapshot.role)

  const isAdmin = computed(() => role.value === 'ADMIN')

  function persist() {
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({
        isAuthenticated: isAuthenticated.value,
        role: role.value,
      }),
    )
  }

  function login(nextRole: UserRole) {
    isAuthenticated.value = true
    role.value = nextRole
    persist()
  }

  function logout() {
    isAuthenticated.value = false
    role.value = null
    persist()
  }

  return {
    isAuthenticated,
    role,
    isAdmin,
    login,
    logout,
  }
})
