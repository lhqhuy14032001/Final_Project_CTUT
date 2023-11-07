import { useAuth } from "@/stores/auth.store";
import { storeToRefs } from "pinia";
const clientMiddlewares = {
  handleCheckLogin: (to, from, next) => {
    try {
      const authStore = useAuth();
      const { userLoggedIn } = storeToRefs(authStore);
      if (userLoggedIn) {
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
