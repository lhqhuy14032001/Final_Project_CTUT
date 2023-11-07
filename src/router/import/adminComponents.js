const ADMIN = () =>
  import(/* webpackChunkName: "admin" */ "@/views/administration");
const LOGIN = () =>
  import(/* webpackChunkName: "admin" */ "@/views/administration/LoginView");
const HOME_PAGE_ADMIN = () =>
  import(
    /* webpackChunkName: "ad_homepage" */ "@/views/administration/HomeView"
  );
const ACCOUNT_MANAGE = () =>
  import(
    /*webpackChunkName: "acc_manage"*/ "@/views/administration/AccountsManage"
  );

const BLOG_MANAGE = () =>
  import(
    /*webpackChunkName: "blog_manage"*/ "@/views/administration/BlogsManage/views/BlogsList"
  );
const CAR_MANAGE = () =>
  import(/*webpackChunkName: "car_manage"*/ "@/views/VehiclesManage");

const CAR_DETAIL = () =>
  import(
    /*webpackChunkName: "car_detail"*/ "@/views/VehiclesManage/components/VehicleDetail"
  );

const CREATE_CAR = () =>
  import(
    /*webpackChunkName: "create_car"*/ "@/views/VehiclesManage/components/CreateVehicleView"
  );
const SALE_MANAGE = () =>
  import(
    /*webpackChunkName: "sale_manage"*/ "@/views/administration/VouchersManage"
  );
const CONSTRACT_MANAGE = () =>
  import(
    /*webpackChunkName: "contract_manage"*/ "@/views/administration/ContractsManage"
  );
const STATISTIS_MANAGE = () =>
  import(/*webpackChunkName: "statistic"*/ "@/views/administration/ErrorView");

export {
  ADMIN,
  LOGIN,
  HOME_PAGE_ADMIN,
  ACCOUNT_MANAGE,
  BLOG_MANAGE,
  CAR_MANAGE,
  SALE_MANAGE,
  CONSTRACT_MANAGE,
  STATISTIS_MANAGE,
  CAR_DETAIL,
  CREATE_CAR,
};
