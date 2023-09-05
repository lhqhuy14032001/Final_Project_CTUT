import {
  mdiAccountCircle,
  mdiCar,
  mdiChartBar,
  mdiMonitor,
  mdiNewspaper,
  mdiNoteText,
  mdiSale,
} from "@mdi/js";

export default [
  {
    path: "/tong-quan",
    name: "home-admin",
    params: {},
    icon: mdiMonitor,
    label: "Tổng quan",
  },
  {
    name: "account-manage",
    params: {},
    path: "/quan-ly-tai-khoan",
    label: "Người dùng",
    icon: mdiAccountCircle,
  },
  {
    name: "blog",
    params: {},
    path: "/blogs",
    label: "Blogs",
    icon: mdiNewspaper,
  },
  {
    name: "car-manage",
    path: "/quan-ly-xe",
    params: {},
    label: "Quản lý xe",
    icon: mdiCar,
  },
  {
    name: "sale-manage",
    path: "/quan-ly-khuyen-mai",
    params: {},
    label: "Khuyến mãi",
    icon: mdiSale,
  },
  {
    path: "/quan-ly-hop-dong",
    params: {},
    label: "Hợp đồng",
    name: "constracts-manage",
    icon: mdiNoteText,
  },
  {
    name: "statistic",
    path: "/thong-ke",
    params: {},
    label: "Thống kê",
    icon: mdiChartBar,
  },
];
