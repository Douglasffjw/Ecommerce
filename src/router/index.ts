import CustomerLayout from '@/layouts/CustomerLayout.vue'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import ProductAdmin from '@/views/admin/products.vue'
import SalesReports from '@/views/admin/SalesReports.vue'
import Checkout from '@/views/Checkout.vue'
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
      name: 'login',
      component: Login,
      meta: {
        breadcrumb: 'Login',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        breadcrumb: 'Cadastro',
      },
    },
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          meta: {
            breadcrumb: 'Home',
          },
        },
        {
          path: 'products',
          name: 'products',
          component: Products,
          meta: {
            breadcrumb: 'Produtos',
          },
        },
        {
          path: 'products/:id',
          name: 'product-detail',
          component: ProductDetail,
          meta: {
            breadcrumb: 'Detalhes',
          },
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout,
          meta: {
            requiresCheckoutAuth: true,
            breadcrumb: 'Checkout',
          },
        },
      ],
    },
    {
      path: '/admin',
      meta: {
        requiresAuth: true,
        roles: ['ADMIN'],
        breadcrumb: 'Admin',
      },
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'admin-dashboard',
          component: Dashboard,
          meta: {
            breadcrumb: 'Dashboard',
          },
        },
        {
          path: 'products',
          name: 'admin-products',
          component: ProductAdmin,
          meta: {
            breadcrumb: 'Produtos',
          },
        },
        {
          path: 'reports',
          name: 'admin-reports',
          component: SalesReports,
          meta: {
            breadcrumb: 'Relatórios',
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})
authenticatedGuard(router)
authorizedGuard(router)

export default router
