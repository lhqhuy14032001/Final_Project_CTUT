import { useScreens } from "vue-screen-utils";

const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
export const columns = mapCurrent({ xs: 1 }, 2);
export const rows = mapCurrent({ xs: 2 }, 1);
export const bannerItem = mapCurrent({ xs: 1.5, sm: 2, md: 3, lg: 4 }, 1);
export const locationFamous = mapCurrent({ xs: 1, sm: 2, md: 3, lg: 4 }, 1);
