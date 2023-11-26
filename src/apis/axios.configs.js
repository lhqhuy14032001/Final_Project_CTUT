import axios from "axios";
import queryString from "query-string";
import authAPI from "./auth.api";
import { getUIDFromCookies } from "@/ultils/functions";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3004/v1/api",
  headers: {
    "content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  credentials: "include",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  // handle token
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (
      error.response.data.message === "jwt expired" &&
      originalConfig.url !== "/sign-in" &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      let _uid = getUIDFromCookies();
      await authAPI.refreshToken(_uid);
      return axiosInstance.request(originalConfig);
    } else if (error.response.status === 403) {
      let err = {
        message: "Phiên đăng nhập hết hạn",
        code: 403,
      };
      // response.data.message;
      throw { response: { data: { message: err } } };
    } else {
      throw error;
    }
  }
);
export default axiosInstance;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjExMywicGhvbmVudW1iZXIiOiIwOTE0Nzc5NjAxIiwiaWF0IjoxNjk4OTAxNDM0LCJleHAiOjE2OTg5MDE0OTR9.i1TZsjp26jtceFfCInqCV4B7kCXiZSNAglNYhJ8FwoQ
