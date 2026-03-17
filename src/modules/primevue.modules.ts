import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Breadcrumb from 'primevue/breadcrumb'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { Card } from 'primevue'
import Aura from '@primeuix/themes/aura'

export function setPrimeVue(app: App): void {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  app.component('Button', Button)
  app.component('Card', Card)
  app.component('Menubar', Menubar)
  app.component('Menu', Menu)
  app.component('Breadcrumb', Breadcrumb)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
}
