"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { getUserProfileApi } from "../../../lib/api/user.api";
import { getOrganizationProfileApi } from "../../../lib/api/organizer.api";

import "./Navbar.css";
import {
  EXPLORE_ICON,
  LOCATION_ICON,
} from "../../../const-value/config-icons/page";

export default function Navbar() {
  const router = useRouter();

  // 🔐 REDUX AUTH STATE
  const { user, organizer, role, isLoggedIn } = useSelector(
    (state) => state.auth
  );

  const [mounted, setMounted] = useState(false);
  const [initial, setInitial] = useState("U");
  const [profileImage, setProfileImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================= INITIAL MOUNT ================= */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ================= SET INITIAL LETTER ================= */
  useEffect(() => {
    if (!isLoggedIn) return;

    const data = role === "organizer" ? organizer : user;
    if (!data) return;

    if (data.email) {
      setInitial(data.email.charAt(0).toUpperCase());
    }
  }, [isLoggedIn, user, organizer, role]);

  /* ================= LOAD PROFILE IMAGE ================= */
  useEffect(() => {
    async function loadProfile() {
      if (!isLoggedIn) return;

      try {
        let res;

        if (role === "organizer" && organizer?.id) {
          res = await getOrganizationProfileApi(organizer.id);
        }

        if (role !== "organizer" && user?.id) {
          res = await getUserProfileApi(user.id);
        }

        if (res?.status && res.data) {
          const image =
            res.data.profileImage ||
            res.data.logo ||
            res.data.bannerImages?.[0] ||
            null;

          if (image) {
            setProfileImage(image);
          }
        }
      } catch {
        // silent fail (navbar shouldn't break app)
      }
    }

    loadProfile();
  }, [isLoggedIn, role, user, organizer]);

  if (!mounted) return null;

  /* ================= HANDLERS ================= */

  const handleSignup = () => {
    setMenuOpen(false);
    router.push("/auth/user/login");
  };

  const handleProfileClick = () => {
    setMenuOpen(false);
    router.push("/dashboard");
  };

  /* ================= UI ================= */
  return (
    <nav className="nav-container">
      {/* LEFT */}
      <div className="nav-left">
        <img
          src="/images/logo.png"
          alt="logo"
          className="nav-logo"
          onClick={() => router.push("/")}
        />
        <button className="nav-explore">
          Explore {EXPLORE_ICON}
        </button>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <div className="nav-search-box">
          <input
            type="text"
            placeholder="Search anything"
            className="search-input"
          />
        </div>

        <button className="nav-location-btn">
          {LOCATION_ICON}
        </button>

        {!isLoggedIn && (
          <button
            className="nav-create"
            onClick={() => router.push("/dashboard/space/create")}
          >
            + Create Event
          </button>
        )}

        {!isLoggedIn && (
          <button
            className="nav-sinup"
            onClick={handleSignup}
          >
            Sign In
          </button>
        )}
      </div>

      {/* RIGHT */}
      {isLoggedIn && (
        <div className={`nav-right ${menuOpen ? "open" : ""}`}>
          <button
            className="nav-avatar-btn"
            onClick={handleProfileClick}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                className="nav-profile-image"
                onError={() => setProfileImage(null)}
              />
            ) : (
              <div className="nav-letter-avatar">
                {initial}
              </div>
            )}
          </button>
        </div>
      )}

      {/* HAMBURGER */}
      <button
        className={`nav-hamburger ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}
