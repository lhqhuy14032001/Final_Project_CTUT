import { useScreens } from "vue-screen-utils";

const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
export const columns = mapCurrent({ xs: 1 }, 2);
export const rows = mapCurrent({ xs: 2 }, 1);
