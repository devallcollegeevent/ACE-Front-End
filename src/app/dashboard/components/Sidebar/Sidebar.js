"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Sidebar.module.css";

import { getOrganizationProfileApi } from "../../../../lib/api/organizer.api";
import { getUserProfileApi } from "../../../../lib/api/user.api";
import ConfirmModal from "../../../../components/ui/Modal/ConfirmModal";
import { logout } from "../../../../store/authSlice";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // profile display-only
  const [profile, setProfile] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // ✅ REDUX AUTH
  const { user, organizer, role, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  /* ================= FALLBACK LETTER ================= */
  const displayName =
    profile?.organizationName || profile?.name || "User";
  const displayEmail =
    profile?.domainEmail || profile?.email || "User";
  const firstLetter = displayName.charAt(0).toUpperCase();

  /* ================= LOAD PROFILE ================= */
  useEffect(() => {
    async function loadProfile() {
      if (!isLoggedIn) return;

      const identity =
        role === "organizer"
          ? organizer?.identity
          : user?.identity;

      if (!identity) return;

      try {
        let res;
        if (role === "organizer") {
          res = await getOrganizationProfileApi(identity);
        } else {
          res = await getUserProfileApi(identity);
        }

        if (res?.status) {
          setProfile(res.data);
        }
      } catch (err) {
        console.error("Sidebar profile error:", err);
      }
    }

    loadProfile();
  }, [isLoggedIn, role, user?.identity, organizer?.identity]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const Arrow = ({ open }) => (
    <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
  );

  /* ================= LOGOUT ================= */
  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    dispatch(logout());
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <aside
      className={`${styles.sidebar} ${expanded ? styles.expand : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setOpenMenu(null);
      }}
    >
      {/* PROFILE */}
      <div className={styles.menu} onClick={() => toggleMenu("profile")}>
        <img src="/images/User.png" alt="profile" />
        {expanded && (
          <div className={styles.menuText}>
            Profile <Arrow open={openMenu === "profile"} />
          </div>
        )}
      </div>

      {expanded && openMenu === "profile" && (
        <div className={styles.dropdown}>
          <Link href="/dashboard/profile">My Profile</Link>
          {role === "organizer" && (
            <Link href="/dashboard/profile/manage">Manage</Link>
          )}
          <Link href="/dashboard/profile/delete">Delete</Link>
        </div>
      )}

      {/* ACTIVITIES */}
      <div className={styles.menu} onClick={() => toggleMenu("activities")}>
        <img src="/images/myactivityes.png" alt="activities" />
        {expanded && (
          <div className={styles.menuText}>
            Activities <Arrow open={openMenu === "activities"} />
          </div>
        )}
      </div>

      {expanded && openMenu === "activities" && (
        <div className={styles.dropdown}>
          <Link href="/dashboard/activities/saved">Saved</Link>
          {role === "organizer" && (
            <Link href="/dashboard/activities/bookings">
              Bookings
            </Link>
          )}
        </div>
      )}

      {/* ORGANIZER SPACE */}
      {role === "organizer" && (
        <>
          <div className={styles.menu} onClick={() => toggleMenu("space")}>
            <img src="/images/myspace.png" alt="space" />
            {expanded && (
              <div className={styles.menuText}>
                My Space <Arrow open={openMenu === "space"} />
              </div>
            )}
          </div>

          {expanded && openMenu === "space" && (
            <div className={styles.dropdown}>
              <Link href="/dashboard/space/create">
                Create Event
              </Link>
              <Link href="/dashboard/space/overview-dashboard">
                Event Analytics
              </Link>
              <Link href="/dashboard/space/my-events">
                My Events
              </Link>
            </div>
          )}
        </>
      )}

      {/* SETTINGS */}
      <div className={styles.menu} onClick={() => toggleMenu("settings")}>
        <img src="/images/Settings.png" alt="settings" />
        {expanded && (
          <div className={styles.menuText}>
            Settings <Arrow open={openMenu === "settings"} />
          </div>
        )}
      </div>

      {expanded && openMenu === "settings" && (
        <div className={styles.dropdown}>
          <Link href="/dashboard/settings/notification">
            Notification
          </Link>
          {role === "organizer" && (
            <Link href="/dashboard/settings/email">Email</Link>
          )}
        </div>
      )}

      {/* BOTTOM PROFILE */}
      <div className={styles.bottomProfile}>
        {profile?.profileImage ? (
          <img
            src={profile.profileImage}
            alt="profile"
            className={styles.profileImg}
          />
        ) : (
          <div className={styles.profileCircle}>{firstLetter}</div>
        )}

        {expanded && (
          <div onClick={handleLogoutClick}>
            <div className={styles.profileText}>{displayName}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.profileTextEmail}>
                {displayEmail}
              </div>
              <img
                src="/images/exit.png"
                alt="logout"
                className={styles.exitImage}
              />
            </div>
          </div>
        )}
      </div>

      {/* LOGOUT MODAL */}
      <ConfirmModal
        open={showLogoutConfirm}
        title="Confirm Logout"
        description="Are you sure you want to logout?"
        image="/images/logo.png"
        onCancel={cancelLogout}
        onConfirm={confirmLogout}
      />
    </aside>
  );
}
