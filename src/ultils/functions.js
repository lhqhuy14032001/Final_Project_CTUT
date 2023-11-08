export const getCookie = function getCookieValue(name) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2] ? match[2] : null;
  }
};

export const handleCheckSeesstion = (router, nameRoute) => {
  router.push(nameRoute);
};

export const handleDeleteCookie = (name) => {
  document.cookie = `${name}=`;
};
