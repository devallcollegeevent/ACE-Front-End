"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import toast from "react-hot-toast";

/* ORGANIZER APIS */
import {
  getOrganizationProfileApi,
  updateOrganizationProfileApi,
} from "../../../lib/api/organizer.api";

/* USER APIS */
import {
  getUserProfileApi,
  updateUserProfileApi,
} from "../../../lib/api/user.api";

/* AUTH APIS */
import {
  forgotApi,
  verifyOtpApi,
  resetPasswordApi,
} from "../../../lib/api/auth.api";

import { getUserData } from "../../../lib/auth";
import {
  PASSWORDHIDEICON,
  PASSWORDVIEWICON,
} from "../../../const-value/config-icons/page";
import { useLoading } from "../../../context/LoadingContext";

/* =====================================================
   ROLE / TYPE BASED API PICKER
===================================================== */
const getProfileApis = (user) => {
  // ORGANIZER
  if (user?.type === "org") {
    return {
      getProfile: getOrganizationProfileApi,
      updateProfile: updateOrganizationProfileApi,
      nameKey: "organizationName",
      emailKey: "domainEmail",
    };
  }

  // NORMAL USER
  return {
    getProfile: getUserProfileApi,
    updateProfile: updateUserProfileApi,
    nameKey: "name",
    emailKey: "email",
  };
};

export default function ProfilePage() {
  const [mode, setMode] = useState("view");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setLoading: setGlobalLoading } = useLoading();

  const [form, setForm] = useState({
    name: "",
    email: "",
    image: null,
  });

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const fileRef = useRef(null);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    async function loadProfile() {
      setGlobalLoading(true); // START GLOBAL LOADING

      try {
        const user = getUserData();
        if (!user?.identity) return;

        const api = getProfileApis(user);
        const res = await api.getProfile(user.identity);

        if (res?.status) {
          setProfile(res.data);
          setForm({
            name: res.data[api.nameKey] || "",
            email: res.data[api.emailKey] || "",
            image: null,
          });
        }
      } catch (err) {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
        setGlobalLoading(false);
      }
    }

    loadProfile();
  }, [setGlobalLoading]);

  /* ================= SAVE PROFILE ================= */
  const saveProfile = async () => {
    setGlobalLoading(true); // START GLOBAL LOADING

    try {
      const user = getUserData();
      const api = getProfileApis(user);

      const payload = new FormData();
      payload.append(api.nameKey, form.name);
      payload.append(api.emailKey, form.email);
      if (form.image) payload.append("image", form.image);

      const res = await api.updateProfile(user.identity, payload);

      if (res?.status) {
        setProfile(res.data);
        toast.success("Profile updated");
        setMode("view");
      } else {
        toast.error("Update failed");
      }
    } catch {
      toast.error("Update failed");
    } finally {
      setGlobalLoading(false);
    }
  };

  /* ================= PASSWORD FLOW ================= */
  const sendOtp = async () => {
    setGlobalLoading(true); // START GLOBAL LOADING
    await forgotApi({ email: form.email });
    toast.success("OTP sent");
    setMode("otp");
    setGlobalLoading(false); //STOP GLOBAL LOADING
  };

  const verifyOtp = async () => {
    setGlobalLoading(true); // START GLOBAL LOADING
    await verifyOtpApi({ email: form.email, otp });
    toast.success("OTP verified");
    setMode("password");
    setGlobalLoading(false); //STOP GLOBAL LOADING
  };

  const resetPass = async () => {
    if (password !== confirm) {
      return toast.error("Passwords not matching");
    }

    await resetPasswordApi({
      email: form.email,
      password,
    });

    toast.success("Password updated");
    setMode("success");
    setGlobalLoading(false);
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;
  if (!profile) return <p style={{ padding: 20 }}>No profile found</p>;

  return (
    <div className={styles.wrapper}>
      {/* ================= VIEW ================= */}
      {mode === "view" && (
        <div className={styles.viewBox}>
          <div>
            <label>Full Name</label>
            <p>{form.name}</p>
          </div>

          <div>
            <label>Email</label>
            <p>{form.email}</p>
          </div>

          <img
            src="/images/Pen.png"
            className={styles.editIcon}
            onClick={() => setMode("edit")}
          />
        </div>
      )}

      {/* ================= EDIT ================= */}
      {mode === "edit" && (
        <div className={styles.editBox}>
          <div className={styles.left}>
            <label>Full Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label>Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <span className={styles.changePass} onClick={sendOtp}>
              Change Password
            </span>
          </div>

          <div>
            <div
              className={styles.uploadBox}
              onClick={() => fileRef.current.click()}
            >
              <p>{form.image ? form.image.name : "Upload profile picture"}</p>
            </div>

            <input
              ref={fileRef}
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            />

            <div className={styles.btnRow}>
              <button onClick={() => setMode("view")}>Cancel</button>
              <button onClick={saveProfile}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= OTP ================= */}
      {mode === "otp" && (
        <div className={styles.centerBox}>
          <h3>Enter OTP</h3>
          <input
            maxLength={4}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <div className={styles.btnRow}>
            <button onClick={() => setMode("edit")}>Cancel</button>
            <button onClick={verifyOtp}>Continue</button>
          </div>
        </div>
      )}

      {/* ================= PASSWORD ================= */}
      {mode === "password" && (
        <div className={styles.centerBox}>
          <div className={styles.passWrap}>
            <input
              type={show1 ? "text" : "password"}
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShow1(!show1)}>
              {show1 ? PASSWORDVIEWICON : PASSWORDHIDEICON}
            </span>
          </div>

          <div className={styles.passWrap}>
            <input
              type={show2 ? "text" : "password"}
              placeholder="Confirm password"
              onChange={(e) => setConfirm(e.target.value)}
            />
            <span onClick={() => setShow2(!show2)}>
              {show2 ? PASSWORDVIEWICON : PASSWORDHIDEICON}
            </span>
          </div>

          <div className={styles.btnRow}>
            <button onClick={() => setMode("edit")}>Cancel</button>
            <button onClick={resetPass}>Save</button>
          </div>
        </div>
      )}

      {/* ================= SUCCESS ================= */}
      {mode === "success" && (
        <div className={styles.success}>Password Successfully Changed!!</div>
      )}
    </div>
  );
}
