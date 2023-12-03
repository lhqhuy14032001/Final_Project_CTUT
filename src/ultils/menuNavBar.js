import {
  mdiMonitor,
  mdiAccountCircle,
  mdiNewspaper,
  mdiCar,
  mdiSale,
  mdiNoteText,
  mdiChartBar,
  mdiLogout,
} from "@mdi/js";

export default [
  {
    isCurrentUser: true,
    menu: [
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
        name: "coming-soon",
        path: "/coming-soon",
        params: {},
        label: "Khuyến mãi",
        icon: mdiSale,
      },
      {
        name: "coming-soon",
        path: "/coming-soon",
        params: {},
        label: "Hợp đồng",
        icon: mdiNoteText,
      },
      {
        name: "coming-soon",
        path: "/coming-soon",
        params: {},
        label: "Thống kê",
        icon: mdiChartBar,
      },
    ],
  },
  {
    icon: mdiLogout,
    label: "Đăng xuất",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
