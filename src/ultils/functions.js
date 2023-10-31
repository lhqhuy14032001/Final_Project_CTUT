export const debounce = (func, delay = 0) => {
  let timerID;
  return () => {
    if (timerID) {
      clearTimeout(timerID);
      timerID = null;
    }
    timerID = setTimeout(() => {
      func();
    }, delay);
  };
};
