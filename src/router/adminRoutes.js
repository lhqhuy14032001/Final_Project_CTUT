import * as ADMIN from "./import/adminComponents";
export default [
  {
    path: "tong-quan",
    name: "home-admin",
    component: ADMIN.HOME_PAGE_ADMIN,
    meta: {},
  },
  {
    path: "quan-ly-tai-khoan",
    name: "account-manage",
    component: ADMIN.ACCOUNT_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  {
    path: "blogs",
    name: "blog",
    component: ADMIN.BLOG_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  {
    path: "quan-ly-xe",
    name: "car-manage",
    component: ADMIN.CAR_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  // {
  //   path: "chi-tiet-xe/:id",
  //   name: "car-detail",
  //   component: ADMIN.CAR_DETAIL,
  //   meta: {},
  // },
  {
    path: "quan-ly-khuyen-mai",
    name: "sale-manage",
    component: ADMIN.SALE_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  {
    path: "quan-ly-hop-dong",
    name: "constracts-manage",
    component: ADMIN.CONSTRACT_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  {
    path: "thong-ke",
    name: "statistic",
    component: ADMIN.STATISTIS_MANAGE,
    meta: {
      title: "Tables",
    },
  },
  {
    path: ":pathMatch(.*)*",
    component: () => import("@/views/404Page"),
    meta: {
      layout: "client",
    },
  },
];
