import { storeToRefs } from "pinia";
import axiosInstance from "../axios.configs";
import { useAuth } from "@/stores/auth.store";
const authStore = useAuth();
const { adminLogin } = storeToRefs(authStore);
const userAPI = {
  createUser: (user) => {
    let url = "admin/create-user";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid, user: user });
  },
  getUserList: () => {
    let url = "admin/user-list";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid });
  },
  getUserListViewMore: (page) => {
    let url = "admin/user-list-view-more";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid, page: page });
  },
  deleteUser: (user) => {
    let url = "admin/delete-user";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      user: user,
    });
  },
};
export default userAPI;
