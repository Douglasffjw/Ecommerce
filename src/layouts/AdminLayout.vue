<template>
  <div class="flex flex-row min-h-screen bg-slate-100 dark:bg-slate-950">
    <aside class="w-64 bg-slate-900 text-white p-4">
      <h2 class="text-lg font-bold mb-4">Admin Dashboard</h2>
      <Menu :model="items" class="w-full" />
    </aside>

    <div class="flex-1 min-h-screen p-6 space-y-4">
      <Breadcrumb :home="home" :model="breadcrumbItems" />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const home = { label: 'Admin', route: '/admin' }

    const items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => router.push({ name: 'admin-dashboard' }),
      },
      {
        label: 'Produtos',
        icon: 'pi pi-box',
        command: () => router.push({ name: 'admin-products' }),
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-chart-line',
        command: () => router.push({ name: 'admin-reports' }),
      },
    ]

    const breadcrumbItems = computed(() => {
      return route.matched
        .filter((record) => Boolean(record.meta.breadcrumb))
        .map((record) => {
          return {
            label: String(record.meta.breadcrumb),
            route: record.path,
          }
        })
    })

    return {
      home,
      items,
      breadcrumbItems,
    }
  },
})
</script>
