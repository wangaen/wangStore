import { RouteRecordRaw } from 'vue-router';

const goodsManageRouter: RouteRecordRaw = {
  path: 'goods-manage',
  name: 'GoodsManage',
  component: () => import('@/views/goodsManage/GoodsManage.vue'),
  meta: {
    breadcrumbName: '商品管理',
    isMenu: true,
    isMulti: false,
    icon: 'icon-shangpin',
  },
};

export default goodsManageRouter;
