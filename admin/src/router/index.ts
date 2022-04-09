import { createRouter, createWebHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => '',
    },
  ],
});

export default router;
