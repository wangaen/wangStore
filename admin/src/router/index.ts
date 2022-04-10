import { createRouter, createWebHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/App.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/register.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/notFound.vue'),
    },
  ],
});

export default router;
