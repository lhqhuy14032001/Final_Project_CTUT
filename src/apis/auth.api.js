import axiosInstance from "./axios.configs";
const authAPI = {
  refreshToken: (_uid, role) => {
    const url = "auth/refresh-token";
    return axiosInstance.post(url, { _uid: _uid, role: role });
  },
  signUp: (user) => {
    const url = "auth/sign-up";
    return axiosInstance.post(url, user);
  },
  signIn: (user) => {
    const url = "auth/sign-in";
    return axiosInstance.post(url, user);
  },
  signOut: (_uid, role) => {
    const url = "auth/sign-out";
    return axiosInstance.post(url, { _uid: _uid, role: role });
  },
  // google auth
  signupWithGoogle: async (accessToken) => {
    const url = "auth/google-sign-up";
    return axiosInstance.post(url, { access_token: accessToken });
  },
};

export default authAPI;
