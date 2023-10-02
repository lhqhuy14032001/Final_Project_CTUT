const CLIENT = () =>
  import(/* webpackChunkName: "client" */ "@/features/client");
const HOME_PAGE = () =>
  import(/* webpackChunkName: "homepage" */ "@/features/client/HomePage");
export { HOME_PAGE, CLIENT };
