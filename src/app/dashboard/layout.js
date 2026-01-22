"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import styles from "./Dashboard.module.css";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
 
/**
 * DashboardLayout Component
 * Main layout wrapper for the dashboard. Handles sidebar navigation and conditional header rendering.
 */
export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  // space/create pages la ProfileHeader hide
  const hideProfileHeader =
    pathname.startsWith("/dashboard/space");

  return (
    <div className={styles.container}>
      {/* SIDEBAR – ALWAYS VISIBLE */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className={styles.main}>
        {/* TOPBAR optional */}
        {/* <Topbar /> */}

        {/* PROFILE HEADER – CONDITIONAL */}
        {!hideProfileHeader && <ProfileHeader />}

        {/* PAGE CONTENT */}
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
}
