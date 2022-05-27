import { RouteRecordRaw } from 'vue-router';

const miniAppManageRouter: RouteRecordRaw = {
  path: 'mini-app-manage',
  name: 'MiniAppManage',
  component: () => import('@/views/miniAppManage/MiniAppManage.vue'),
  meta: {
    isMenu: true,
    isMulti: false,
    breadcrumbName: '小程序管理',
    icon: 'icon-xiaochengxu',
  },
};

export default miniAppManageRouter;
