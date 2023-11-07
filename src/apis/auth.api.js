import axiosInstance from "./axios.configs";
const authAPI = {
  refreshToken: (_uid) => {
    const url = "auth/refresh-token";
    return axiosInstance.post(url, { _uid: _uid });
  },
  signUp: (user) => {
    const url = "auth/sign-up";
    return axiosInstance.post(url, user);
  },
  signIn: (user) => {
    const url = "auth/sign-in";
    return axiosInstance.post(url, user);
  },
  signOut: (_uid) => {
    const url = "auth/sign-out";
    return axiosInstance.post(url, { _uid });
  },
  // google auth
  signupWithGoogle: async (accessToken) => {
    const url = "auth/google-sign-up";
    return axiosInstance.post(url, { access_token: accessToken });
  },
};

export default authAPI;
