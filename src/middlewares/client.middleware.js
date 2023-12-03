import { useAuth } from "@/stores/auth.store";
import { PERMISSION } from "@/ultils/constants";
import { storeToRefs } from "pinia";
const clientMiddlewares = {
  handleCheckLogin: (to, from, next) => {
    try {
      const authStore = useAuth();
      const { userLoggedIn } = storeToRefs(authStore);
      if (userLoggedIn.value) {
        next();
      } else {
        next({ name: "home", params: {} });
      }
    } catch (error) {
      console.error("Something went wrong::::::::", error);
      next({ name: "home", params: {} });
    }
  },
  checkRoleOwner: (to, from, next) => {
    try {
      const authStore = useAuth();
      const { userLoggedIn } = storeToRefs(authStore);
      if (userLoggedIn.value && userLoggedIn.value.role === PERMISSION.OW) {
        next();
      } else {
        next({ name: "home", params: {} });
      }
    } catch (error) {
      console.error("Something went wrong::::::::", error);
      next({ name: "home", params: {} });
    }
  },
};
export default clientMiddlewares;
