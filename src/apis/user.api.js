import axiosInstance from "./axios.configs";
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth.store";
const authStore = useAuth();
const { adminLogin, userLoggedIn } = storeToRefs(authStore);
const userAPI = {
  // create
  createUser: (user) => {
    let url = "admin/create-user";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid, user: user });
  },
  // read
  getUserList: () => {
    let url = "admin/user-list";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid });
  },
  getUserListViewMore: (page) => {
    let url = "admin/user-list-view-more";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid, page: page });
  },
  getTotalUsers: () => {
    let url = "admin/total-users";
    return axiosInstance.post(url, { _uid: adminLogin.value.uid });
  },
  // delete
  deleteUser: (user) => {
    let url = "admin/delete-user";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      user: user,
    });
  },
  // update
  updateAvatar: (urlAvt) => {
    let url = "client/update-avatar";
    return axiosInstance.post(url, {
      _uid: userLoggedIn.value.uid,
      url: urlAvt,
    });
  },
  updateRole: (email) => {
    let url = "client/req-update-role";
    return axiosInstance.post(url, {
      _uid: userLoggedIn.value.uid,
      email: email,
    });
  },
};
export default userAPI;
