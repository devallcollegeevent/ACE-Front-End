/* ================= AUTH (COOKIE BASED) ================= */

export const isUserLoggedIn = async () => {
  try {
    const res = await fetch("/api/auth/me", {
      credentials: "include",
    });
    return res.ok;
  } catch {
    return false;
  }
};

/* ================= EMAIL (OTP ONLY) ================= */

export const saveEmail = (email) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem("userEmail", email);
};

export const getEmail = () => {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("userEmail");
};

export const clearEmail = () => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("userEmail");
};
