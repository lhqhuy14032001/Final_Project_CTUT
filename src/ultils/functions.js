export const getCookie = function getCookieValue(name) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2] ? match[2] : null;
  }
};

export const handleCheckSession = (router, nameRoute) => {
  router.push(nameRoute);
};

export const handleDeleteCookie = (name) => {
  document.cookie = `${name}=`;
};

export const getUIDFromCookies = () => {
  let _uid;
  let _user = getCookie("_us");
  if (_user && JSON.parse(_user).uid) {
    _uid = JSON.parse(_user).uid;
    return _uid;
  }
};
