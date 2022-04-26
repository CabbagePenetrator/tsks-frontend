import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/components/pages/auth/Login.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/components/pages/auth/Register.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
