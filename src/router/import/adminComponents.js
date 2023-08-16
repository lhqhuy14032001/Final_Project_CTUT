const HOME_PAGE_ADMIN = () =>
  import(
    /* webpackChunkName: "ad_homepage" */ "@/views/administration/HomeView"
  );
const ACCOUNT_MANAGE = () => {
  import(
    /*webpackChunkName: "acc_manage"*/ "@/views/administration/AccountsManage"
  );
};
export { HOME_PAGE_ADMIN, ACCOUNT_MANAGE };
