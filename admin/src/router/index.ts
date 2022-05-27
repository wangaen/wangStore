import { createRouter, createWebHistory, Router } from 'vue-router';
import homeRouter from './modules/home';
import miniAppManageRouter from './modules/miniAppManage';
import goodsManageRouter from './modules/goodsManage';
import sellerManageRouter from './modules/sellerManage';

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/layout/Index.vue'),
      children: [
        { ...homeRouter },
        { ...miniAppManageRouter },
        { ...goodsManageRouter },
        { ...sellerManageRouter },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

export default router;
