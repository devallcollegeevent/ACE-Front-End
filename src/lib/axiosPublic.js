import axios from "axios";

const apiPublic = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_URL
      : "/api/proxy",
  withCredentials: false,
});

export default apiPublic;
