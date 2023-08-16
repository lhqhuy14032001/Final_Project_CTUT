import { createRouter, createWebHistory } from "vue-router";

import { HOME_PAGE } from "@/router/import/clientCoponents";
import {
  HOME_PAGE_ADMIN,
  ACCOUNT_MANAGE,
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
    path: "/about",
    name: "about",
    meta: {
      layout: "administration",
    },
    component: HOME_PAGE,
  },
  {
    path: "/admin-dashboard",
    name: "home_admin",
    component: HOME_PAGE_ADMIN,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/quan-ly-tai-khoan",
    name: "account_manage",
    component: ACCOUNT_MANAGE,
    meta: {
      layout: "administration",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
