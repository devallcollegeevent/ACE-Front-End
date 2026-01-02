"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Topbar.module.css";
import { clearToken, getUserData } from "../../../../lib/auth";
import { useLoading } from "../../../../context/LoadingContext";

export default function Topbar() {
  const router = useRouter();
  const [initial, setInitial] = useState("U");

  const { setLoading } = useLoading(); // ONLY ADD

  useEffect(() => {
    setLoading(true); // START GLOBAL LOADING

    const user = getUserData();
    if (user?.email) {
      setInitial(user.email.charAt(0).toUpperCase());
    } else if (user?.name) {
      setInitial(user.name.charAt(0).toUpperCase());
    }

    return () => {
      setLoading(false); //STOP GLOBAL LOADING
    };
  }, [setLoading]);

  const handleLogout = () => {
    setLoading(true); //GLOBAL LOADING ON (navigation)
    clearToken();
    router.push("/auth/user/login");
  };

  return (
    <div className={styles.topbar}>
      {/* LEFT */}
      <div className={styles.left}>
        <h2 className={styles.title}>Dashboard</h2>
      </div>

      {/* RIGHT */}
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
