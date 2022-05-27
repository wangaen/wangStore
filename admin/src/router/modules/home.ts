import { RouteRecordRaw } from 'vue-router';

const homeRouter: RouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/Home.vue'),
  meta: {
    isMenu: true,
    isMulti: false,
    breadcrumbName: '首页',
    icon: 'icon-home',
  },
};

export default homeRouter;
