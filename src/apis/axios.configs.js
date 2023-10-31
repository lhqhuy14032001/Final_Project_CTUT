import axios from "axios";
import queryString from "query-string";
// store
let token = JSON.parse(window.localStorage.getItem("authStore")).signUpInfo
  .token;
const axiosInstance = axios.create({
  baseURL: "http://localhost:3004/v1/api",
  headers: {
    "content-Type": "application/json",
    "access-token": `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosInstance;
