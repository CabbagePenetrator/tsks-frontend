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
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/components/pages/auth/ForgotPassword.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
