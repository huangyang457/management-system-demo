import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/index.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
