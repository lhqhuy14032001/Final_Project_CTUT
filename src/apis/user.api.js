import axiosInstance from "./axios.configs";
const authStore = useAuth();
const { adminLogin, userLoggedIn } = storeToRefs(authStore);
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth.store";
const getAdminRole = () => {
  const authStore = useAuth();
  const { adminLogin } = storeToRefs(authStore);
  if (adminLogin.value && adminLogin.value.role) {
    return adminLogin.value.role;
  }
};
const userAPI = {
  // create
  createUser: (user) => {
    let url = "admin/create-user";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      user: user,
      role: getAdminRole(),
    });
  },
  // read
  getUserList: () => {
    let url = "admin/user-list";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      role: getAdminRole(),
    });
  },
  getUserListViewMore: (page) => {
    let url = "admin/user-list-view-more";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      page: page,
      role: getAdminRole(),
    });
  },
  getTotalUsers: () => {
    let url = "admin/total-users";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      role: getAdminRole(),
    });
  },
  // delete
  deleteUser: (user) => {
    let url = "admin/delete-user";
    return axiosInstance.post(url, {
      _uid: adminLogin.value.uid,
      user: user,
      role: getAdminRole(),
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
