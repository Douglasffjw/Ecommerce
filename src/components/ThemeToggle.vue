<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const KEY = 'theme-mode'

function applyTheme(mode: 'light' | 'dark') {
  const html = document.documentElement

  if (mode === 'dark') {
    html.classList.add('dark')
    document.body.style.colorScheme = 'dark'
  } else {
    html.classList.remove('dark')
    document.body.style.colorScheme = 'light'
  }

  localStorage.setItem(KEY, mode)
  isDark.value = mode === 'dark'
  console.log('Tema alterado para:', mode)
}

function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem(KEY)

  if (saved === 'dark') {
    applyTheme('dark')
    return
  }

  if (saved === 'light') {
    applyTheme('light')
    return
  }

  // Detectar preferência do sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(prefersDark ? 'dark' : 'light')
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    :title="`Mudar para tema ${isDark ? 'claro' : 'escuro'}`"
  >
    <svg v-if="isDark" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm8.66-13.5a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zm-14.5 14.5a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zM21 11h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM3 11H2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm17.66 6.5a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71zM6.05 6.05a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71z"
      />
    </svg>
    <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>
