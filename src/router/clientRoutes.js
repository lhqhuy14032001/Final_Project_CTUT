import * as CLIENT from "./import/clientCoponents";
export default [
  {
    path: "",
    name: "home",
    component: CLIENT.HOME_PAGE,
  },
  {
    path: ":pathMatch(.*)*",
    component: () => import("@/views/404Page"),
    meta: {
      layout: "client",
    },
  },
];
