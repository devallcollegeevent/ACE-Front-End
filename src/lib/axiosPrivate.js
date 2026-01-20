import axios from "axios";
import { getToken, clearToken } from "./auth";

const apiPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

apiPrivate.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiPrivate.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      clearToken();
      if (typeof window !== "undefined") {
        // window.location.href = "/auth/user/login";
      }
    }
    return Promise.reject(err);
  }
);

export default apiPrivate;
