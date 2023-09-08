import { createRouter, createWebHistory } from "vue-router";

import { HOME_PAGE } from "@/router/import/clientCoponents";
import * as ADMIN from "./import/adminComponents";

const routes = [
  {
    path: "/",
    name: "home",
    component: HOME_PAGE,
    meta: {
      layout: "client",
    },
  },
  {
    path: "/tong-quan",
    name: "home-admin",
    component: ADMIN.HOME_PAGE_ADMIN,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/quan-ly-tai-khoan",
    name: "account-manage",
    component: ADMIN.ACCOUNT_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/blogs",
    name: "blog",
    component: ADMIN.BLOG_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/quan-ly-xe",
    name: "car-manage",
    component: ADMIN.CAR_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/them-xe",
    name: "car-create",
    component: ADMIN.CREATE_CAR,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/chi-tiet-xe/:id",
    name: "car-detail",
    component: ADMIN.CAR_DETAIL,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/quan-ly-khuyen-mai",
    name: "sale-manage",
    component: ADMIN.SALE_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/quan-ly-hop-dong",
    name: "constracts-manage",
    component: ADMIN.CONSTRACT_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/thong-ke",
    name: "statistic",
    component: ADMIN.STATISTIS_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      layout: "client",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
