import axiosInstance from "./axios.configs";
const authAPI = {
  signUp: (user) => {
    const url = "/sign-up";
    return axiosInstance.post(url, user);
  },
  signIn: (username, password) => {
    const url = "/sign-out";
    return axiosInstance.post(url, { username, password });
  },
  signOut: (_uid) => {
    const url = "/sign-out";
    return axiosInstance.post(url, { _uid: _uid });
  },
};

export default authAPI;
