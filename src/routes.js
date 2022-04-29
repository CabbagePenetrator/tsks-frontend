import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/components/pages/auth/Login.vue'),
    meta: { title: 'Sign in' },
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/components/pages/auth/Register.vue'),
    meta: { title: 'Sign up' },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/components/pages/auth/ForgotPassword.vue'),
    meta: { title: 'Forgot password' },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/components/pages/auth/ResetPassword.vue'),
    meta: { title: 'Reset password' },
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/components/pages/Dashboard.vue'),
    meta: { title: 'Dashboard' },
  },
  {
    path: '/collections',
    name: 'collections',
    component: () => import('@/components/pages/collections/Index.vue'),
    meta: { title: 'Collections' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const title = import.meta.env.VITE_APP_NAME

router.afterEach((to, from) => {
  document.title = `${title} - ${to.meta.title}`
})

export default router
