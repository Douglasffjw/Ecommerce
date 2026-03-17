import CustomerLayout from '@/layouts/CustomerLayout.vue'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import ProductAdmin from '@/views/admin/products.vue'
import { authenticatedGuard } from './guards/authenticated.guard'
import { authorizedGuard } from './guards/authorized.guard'
import NotFound from '@/views/not-found.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'products',
          component: Products,
        },
        {
          path: 'products/:id',
          component: ProductDetail,
          meta: {
            auth: true,
            role: ['customer'],
          },
        },
      ],
    },
    {
      path: '/admin',
      meta: {
        auth: true,
        role: ['admin'],
      },
      component: AdminLayout,
      children: [
        {
          path: '',
          component: Dashboard,
        },
        {
          path: 'products',
          component: ProductAdmin,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})
authenticatedGuard(router)
authorizedGuard(router)

export default router
