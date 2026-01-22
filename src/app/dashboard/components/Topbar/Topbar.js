"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Topbar.module.css";
import { clearToken, getUserData } from "../../../../lib/auth";
import { useLoading } from "../../../../context/LoadingContext";

// Topbar: simple header for dashboard with logout and avatar initial
export default function Topbar() {
  const router = useRouter();
  const [initial, setInitial] = useState("U");

  // global loading context to show app-level loader during async/navigation
  const { setLoading } = useLoading();

  useEffect(() => {
    // start global loading while determining initial
    setLoading(true);

    const user = getUserData();
    // pick first character from email or name for avatar initial
    if (user?.email) {
      setInitial(user.email.charAt(0).toUpperCase());
    } else if (user?.name) {
      setInitial(user.name.charAt(0).toUpperCase());
    }

    // stop global loading when component unmounts or effect cleans up
    return () => {
      setLoading(false); //STOP GLOBAL LOADING
    };
  }, [setLoading]);

  // logout handler: enable global loader, clear auth token, navigate to login
  const handleLogout = () => {
    setLoading(true); //GLOBAL LOADING ON (navigation)
    clearToken();
    router.push("/auth/user/login");
  };

  return (
    <div className={styles.topbar}>
      {/* LEFT: page title */}
      <div className={styles.left}>
        <h2 className={styles.title}>Dashboard</h2>
      </div>

      {/* RIGHT: logout button and avatar initial */}
      <div className={styles.right}>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>

        <div className={styles.avatar}>
          {initial}
        </div>
      </div>
    </div>
  );
}
