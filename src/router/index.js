import { createRouter, createWebHistory } from "vue-router";

import { HOME_PAGE } from "@/router/import/clientCoponents";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
