import { createRouter, createWebHistory } from "vue-router";

import adminMiddlewares from "@/middlewares/admin.middlewares";
import { CLIENT } from "@/router/import/clientCoponents";
import { ADMIN, LOGIN } from "./import/adminComponents";
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
    beforeEnter: adminMiddlewares.handleCheckPermission,
    meta: {
      layout: "administration",
    },
  },
  {
    path: "/quan-tri/dang-nhap",
    name: "admin-login",
    component: LOGIN,
    meta: {
      layout: "blank",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

export default router;
