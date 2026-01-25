// src/lib/auth.js
export const isUserLoggedIn = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("authToken=");
};
