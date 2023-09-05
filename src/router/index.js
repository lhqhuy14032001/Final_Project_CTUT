import { createRouter, createWebHistory } from "vue-router";

import { HOME_PAGE } from "@/router/import/clientCoponents";
import {
  HOME_PAGE_ADMIN,
  ACCOUNT_MANAGE,
  BLOG_MANAGE,
  CAR_MANAGE,
  SALE_MANAGE,
  CONSTRACT_MANAGE,
  STATISTIS_MANAGE,
} from "@/router/import/adminComponents";

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
    component: HOME_PAGE_ADMIN,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/quan-ly-tai-khoan",
    name: "account-manage",
    component: ACCOUNT_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/blogs",
    name: "blog",
    component: BLOG_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/quan-ly-xe",
    name: "car-manage",
    component: CAR_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/quan-ly-khuyen-mai",
    name: "sale-manage",
    component: SALE_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/quan-ly-hop-dong",
    name: "constracts-manage",
    component: CONSTRACT_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/thong-ke",
    name: "statistic",
    component: STATISTIS_MANAGE,
    meta: {
      layout: "administration",
      title: "Tables",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => {
      import("@/components/admins/NotFound");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
