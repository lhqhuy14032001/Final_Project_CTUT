const CLIENT = () => import(/* webpackChunkName: "client" */ "@/views/client");
const HOME_PAGE = () =>
  import(/* webpackChunkName: "homepage" */ "@/views/client/HomePage");
export { HOME_PAGE, CLIENT };
