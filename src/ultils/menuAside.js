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
    to: "/admin-dashboard",
    icon: mdiMonitor,
    label: "Tổng quan",
  },
  {
    to: "/quan-ly-tai-khoan",
    label: "Người dùng",
    icon: mdiAccountCircle,
  },
  {
    to: "/admin-dashboard",
    label: "Blogs",
    icon: mdiNewspaper,
  },
  {
    to: "/admin-dashboard",
    label: "Quản lý xe",
    icon: mdiCar,
  },
  {
    to: "/admin-dashboard",
    label: "Khuyến mãi",
    icon: mdiSale,
  },
  {
    to: "/admin-dashboard",
    label: "Hợp đồng",
    icon: mdiNoteText,
  },
  {
    to: "/admin-dashboard",
    label: "Thống kê",
    icon: mdiChartBar,
  },
];
