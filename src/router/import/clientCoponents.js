const CLIENT = () => import(/* webpackChunkName: "client" */ "@/views/client");
const HOME_PAGE = () =>
  import(/* webpackChunkName: "homepage" */ "@/views/client/HomePage");
const POLICY_PAGE = () =>
  import(/* webpackChunkName: "policy" */ "@/views/client/AboutMiAuto");
const VEHICLE_LIST = () =>
  import(/* webpackChunkName: "vehicle-list" */ "@/views/client/VehicleList");
const VEHICLE_DETAIL = () =>
  import(
    /* webpackChunkName: "vehicle-detail" */ "@/views/client/VehicleDetail"
  );
const ACCOUNT = () =>
  import(/* webpackChunkName: "acccount" */ "@/views/client/UserAccount");
const ACCOUNT_INFO = () =>
  import(
    /* webpackChunkName: "acccount-info" */ "@/components/clients/AccountInfo"
  );

const WISH_LIST = () =>
  import(/* webpackChunkName: "wish-list" */ "@/components/clients/WishList");

// owner
const VEHICLE_MANAGE = () =>
  import(
    /* webpackChunkName: "vehicle-manage" */ "@/views/owner/VehiclesManage"
  );
const CREATE_CAR = () =>
  import(
    /*webpackChunkName: "create_car"*/ "@/views/owner/VehiclesManage/components/CreateVehicleView"
  );
export {
  CLIENT,
  HOME_PAGE,
  POLICY_PAGE,
  VEHICLE_LIST,
  ACCOUNT,
  ACCOUNT_INFO,
  WISH_LIST,
  VEHICLE_DETAIL,
  VEHICLE_MANAGE,
  CREATE_CAR,
};
