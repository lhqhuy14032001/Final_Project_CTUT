import axiosInstance from "./axios.configs";
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth.store";
const authStore = useAuth();
const { userLoggedIn } = storeToRefs(authStore);
const emailAPI = {
  sendVerifyEmail: (user) => {
    let url = "owner/verify-email";
    return axiosInstance.post(url, {
      _uid: userLoggedIn.value.uid,
      user: user,
    });
  },
  updateEmailState: (email) => {
    let url = "owner/update-email-state";
    return axiosInstance.post(url, {
      _uid: userLoggedIn.value.uid,
      email: email,
    });
  },
};
export default emailAPI;
