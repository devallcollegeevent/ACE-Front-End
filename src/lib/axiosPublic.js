import axios from "axios";

/**
 * Public Axios Instance
 * Configured for public API requests without authentication headers.
 */
const apiPublic = axios.create({
  baseURL:
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_URL   //SERVER
      : "/api/proxy",                     //CLIENT
  withCredentials: false,
});

export default apiPublic;
