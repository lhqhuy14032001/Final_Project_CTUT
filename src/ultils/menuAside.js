import {
  mdiAccountCircle,
  mdiCar,
  mdiChartBar,
  mdiMenu,
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
    // name: "blog",
    // params: {},
    path: "/coming-soon",
    label: "Blogs",
    icon: mdiNewspaper,
    menu: [
      {
        label: "Danh sách bài",
        icon: mdiMenu,
        name: "coming-soon",
        params: {},
      },
      {
        label: "Thêm bài viết",
        icon: mdiNewspaper,
      },
    ],
  },
  {
    name: "car-manage",
    path: "/quan-tri/phe-duyet-xe",
    params: {},
    label: "Phê duyệt xe",
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
    path: "/coming-soon",
    params: {},
    label: "Hợp đồng",
    name: "coming-soon",
    icon: mdiNoteText,
  },
  {
    name: "coming-soon",
    path: "/coming-soon",
    params: {},
    label: "Thống kê",
    icon: mdiChartBar,
  },
];
