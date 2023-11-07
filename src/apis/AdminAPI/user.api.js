import axiosInstance from "../axios.configs";
const userAPI = {
  createUser: (user) => {
    let url = "admin/create-user";
    return axiosInstance.post(url, { user: user });
  },
};
export default userAPI;
