import { createRouter, createWebHistory } from "vue-router";

import { CLIENT } from "@/router/import/clientCoponents";
import { ADMIN } from "./import/adminComponents";
import ADMIN_ROUTES from "./adminRoutes";
import CLIENT_ROUTE from "./clientRoutes";

const routes = [
  {
    path: "",
    component: CLIENT,
    children: CLIENT_ROUTE,
    meta: {
      layout: "client",
    },
  },
  {
    path: "/quan-tri",
    component: ADMIN,
    children: ADMIN_ROUTES,
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
