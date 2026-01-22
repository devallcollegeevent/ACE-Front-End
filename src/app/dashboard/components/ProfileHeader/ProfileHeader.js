"use client";

/**
 * ProfileHeader
 *
 * - Loads the current user's profile (user or organizer) on mount and displays
 *   a header with avatar, name, follower/following counts and rank.
 * - Uses getUserData() to determine identity and role, then calls the
 *   appropriate API (user or organization) to fetch profile details.
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProfileHeader.module.css";

// USER API
import { getOrganizationProfileApi } from "../../../../lib/api/organizer.api";
import { getUserProfileApi } from "../../../../lib/api/user.api";
import { getUserData } from "../../../../lib/auth";
import { useLoading } from "../../../../context/LoadingContext";

export default function ProfileHeader() {
  const router = useRouter();

  // profile default — empty object until API returns data
  const [profile, setProfile] = useState({});
  const { setLoading } = useLoading();

  /* ================= LOAD PROFILE =================
     - Runs once on mount.
     - Determines role from stored user data and fetches the correct profile.
     - Uses safe checks to avoid crashing if user info is missing.
  */
  useEffect(() => {
    async function loadProfile() {
      setLoading(true);

      try {
        const user = getUserData();
        if (!user?.identity) return;

        // Determine role: prefer explicit role, fallback to type mapping
        const role = user.role || (user.type === "org" ? "organizer" : "user");

        let res;
        if (role === "organizer") {
          res = await getOrganizationProfileApi(user.identity);
        } else {
          res = await getUserProfileApi(user.identity);
        }

        if (res?.status && res.data) {
          setProfile(res.data); 
        }
      } catch (err) {
        // Log for diagnostics; UI shows safe fallbacks
        console.error("ProfileHeader error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [setLoading]);

  /* ================= SAFE FALLBACK VALUES =================
     - Compute display-safe values so UI remains stable even when API data is missing.
  */
  const displayName = profile.organizationName || profile.name || "User";

  const firstLetter = displayName.charAt(0).toUpperCase();

  const followersCount = profile.followersCount || 0;
  const followingCount = profile.followingCount || 0;
  const rank = profile.rank || 0;

  /* ================= UI (PRESENTATIONAL) =================
     - Renders a cover, avatar (image or fallback initial), and brief stats.
     - Navigation handlers route to followers/following pages.
  */

  return (
    <div className={styles.wrapper}>
      {/* COVER */}
      <div className={styles.cover} />

      {/* CONTENT */}
      <div className={styles.content}>
        {/* AVATAR */}
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="profile"
            className={styles.avatar}
          />
        ) : (
          <div className={styles.avatarFallback}>{firstLetter}</div>
        )}

        {/* INFO */}
        <div className={styles.info}>
          <h2 className={styles.name}>
            {displayName}
            <span className={styles.role}>
              ({profile.domainEmail ? "Organization" : "User"})
            </span>
          </h2>

          <div className={styles.followInfo}>
            <span onClick={() => router.push("/dashboard/profile/followers")}>
              {followersCount} Followers
            </span>

            <span onClick={() => router.push("/dashboard/profile/following")}>
              {followingCount} Following
            </span>
          </div>

          <div className={styles.rank}>#{rank} Rank</div>
        </div>
      </div>
    </div>
  );
}
