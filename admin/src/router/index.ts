import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "Layout",
  //   redirect: "/dashboard",
  //   component: () => import(/* webpackChunkName: "layout" */ "@/layout/index.vue"),
  //   meta: {
  //     title: "首页",
  //   },
  // children: [...common],
  // },
];

export const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
