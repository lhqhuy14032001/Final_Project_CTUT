import * as CLIENT from "./import/clientCoponents";
import clientMiddlewares from "@/middlewares/client.middleware";
export default [
  {
    path: "",
    name: "home",
    component: CLIENT.HOME_PAGE,
  },
  {
    path: "chinh-sach",
    name: "policy",
    component: CLIENT.POLICY_PAGE,
  },
  { path: "danh-sach-xe", name: "vehicleList", component: CLIENT.VEHICLE_LIST },
  {
    path: "tai-khoan",
    name: "account",
    beforeEnter: clientMiddlewares.handleCheckLogin,
    component: CLIENT.ACCOUNT,
    // redirect: "tai-khoan/thong-tin-tai-khoan",
    children: [
      {
        path: "thong-tin-tai-khoan",
        name: "accountInfo",
        component: CLIENT.ACCOUNT_INFO,
      },
      {
        path: "xe-yeu-thich",
        name: "wishList",
        component: CLIENT.WISH_LIST,
      },
    ],
  },
  {
    path: ":pathMatch(.*)*",
    component: () => import("@/views/404Page"),
    meta: {
      layout: "client",
    },
  },
];
