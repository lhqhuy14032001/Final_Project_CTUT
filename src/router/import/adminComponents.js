const ADMIN = () =>
  import(/* webpackChunkName: "admin" */ "@/features/administration");
const HOME_PAGE_ADMIN = () =>
  import(
    /* webpackChunkName: "ad_homepage" */ "@/features/administration/HomeView"
  );
const ACCOUNT_MANAGE = () =>
  import(
    /*webpackChunkName: "acc_manage"*/ "@/features/administration/AccountsManage"
  );

const BLOG_MANAGE = () =>
  import(
    /*webpackChunkName: "blog_manage"*/ "@/features/administration/BlogsManage/views/BlogsList"
  );
const CAR_MANAGE = () =>
  import(/*webpackChunkName: "car_manage"*/ "@/features/VehiclesManage");

const CAR_DETAIL = () =>
  import(
    /*webpackChunkName: "car_detail"*/ "@/features/VehiclesManage/components/VehicleDetail"
  );

const CREATE_CAR = () =>
  import(
    /*webpackChunkName: "create_car"*/ "@/features/VehiclesManage/components/CreateVehicleView"
  );
const SALE_MANAGE = () =>
  import(
    /*webpackChunkName: "sale_manage"*/ "@/features/administration/VouchersManage"
  );
const CONSTRACT_MANAGE = () =>
  import(
    /*webpackChunkName: "contract_manage"*/ "@/features/administration/ContractsManage"
  );
const STATISTIS_MANAGE = () =>
  import(
    /*webpackChunkName: "statistic"*/ "@/features/administration/ErrorView"
  );

export {
  ADMIN,
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
