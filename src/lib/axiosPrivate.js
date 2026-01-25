import axios from "axios";

const apiPrivate = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_URL
      : "/api/proxy",
  withCredentials: true,
});

apiPrivate.interceptors.response.use(
  (res) => res,
  (err) => {
    if (status === 401 && window.location.pathname.startsWith("/dashboard")) {
      window.location.href = "/unauthorized";
    }
    return Promise.reject(err);
  },
);

export default apiPrivate;
