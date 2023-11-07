import { useAuth } from "@/stores/auth.store";
import { storeToRefs } from "pinia";
const adminMiddlewares = {
  handleCheckPermission: (to, from, next) => {
    try {
      const authStore = useAuth();
      const { adminLogin } = storeToRefs(authStore);
      if (adminLogin.value) {
        if (adminLogin.value.role === "0000") {
          next();
        }
      } else {
        next({ name: "admin-login", params: {} });
      }
    } catch (error) {
      console.error("Something went wrong::::::::", error);
      next({ name: "home", params: {} });
    }
  },
};
export default adminMiddlewares;
