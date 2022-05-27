import { RouteRecordRaw } from 'vue-router';

const sellerManageRouter: RouteRecordRaw = {
  path: 'seller-manage',
  name: 'SellerManage',
  component: () => import('@/views/sellerManage/SellerManage.vue'),
  meta: {
    isMenu: true,
    isMulti: false,
    breadcrumbName: '商家管理',
    icon: 'icon-shangjia',
  },
};

export default sellerManageRouter;
