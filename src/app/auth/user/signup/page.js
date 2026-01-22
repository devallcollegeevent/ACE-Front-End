"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import "../auth-common.css";
import "./signup.css";

import {
  PAGEMOVEICON,
  PASSWORDHIDEICON,
  PASSWORDVIEWICON,
} from "../../../../const-value/config-icons/page";

import { userSignupSchema } from "../../../../components/validation";
import { signupApi } from "../../../../lib/api/auth.api";
import {
  TITLE_USER_SIGNUP,
  SUBTITLE_USER_SIGNUP,
  LABEL_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  LABEL_CONFIRM_PASSWORD,
  PH_NAME,
  PH_PASSWORD,
  PH_CONFIRM_PASSWORD,
  TEXT_SIGNUP,
  TEXT_SIGNIN,
  TEXT_NO_ACCOUNT,
  ROLE_USER,
  MSG_SIGNUP_SUCCESS,
  MSG_LOGIN_FAILED,
  PH_USER_EMAIL,
  MSG_ERR_SIGNUP_FAILED,
} from "../../../../const-value/config-message/page";
import { useLoading } from "../../../../context/LoadingContext";

/**
 * UserSignupPage
 *
 * Client-side user registration form.
 * - Validates input with Yup (userSignupSchema).
 * - Calls signupApi to register the user on the backend.
 * - Uses global loading context to block UI during the async request.
 * - Shows toast notifications for success/error and navigates to login on success.
 */
export default function UserSignupPage() {
  const router = useRouter();

  // Global loading context (start/stop around async calls)
  const { setLoading } = useLoading();

  // toggles to show/hide password fields
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // controlled form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: ROLE_USER,
  });

  // Submit handler: validate -> API -> feedback -> navigate
  const onSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation using Yup schema
    try {
      await userSignupSchema.validate(
        {
          name: form.name,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        },
        { abortEarly: false }
      );
    } catch (err) {
      return toast.error(err.errors[0]);
    }

    // Prepare payload for API
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      type: form.type,
      platform: "web",
    };

    // Start global loading indicator
    setLoading(true); 

    // Call signup API (do not throw on backend error; inspect response)
    const res = await signupApi(payload);

    //DO NOT THROW
    if (!res?.status) {
      // Stop loading and show backend-provided or generic error
      setLoading(false);
      return toast.error(res?.message || MSG_ERR_SIGNUP_FAILED);
    }

    // Success: notify user and navigate to login
    toast.success(res.message || MSG_SIGNUP_SUCCESS);
    setLoading(false); //STOP LOADING
    router.push("/auth/user/login");
  };

  // Navigate to organizer signup flow
  const handleCreateEvent = () => {
    router.push("/auth/organization/signup/category");
  };

  return (
    <div className="auth-shell">
      {/* LEFT ILLUSTRATION (hidden on small screens) */}
      <div className="auth-left d-none d-lg-flex">
        <img src="/images/auth-signup.png" alt="signup" />
      </div>

      {/* RIGHT: signup form */}
      <div className="auth-right">
        <div className="auth-card signup-card">
          <div className="organization-sections mt-4">  
            <div className="Switch-to-Organizer" onClick={handleCreateEvent}>
              Switch to Organizer Sign Up
            </div>
            <div>{PAGEMOVEICON}</div>
          </div>
          <h1 className="auth-title mt-5">{TITLE_USER_SIGNUP}</h1>
          <p className="auth-sub">{SUBTITLE_USER_SIGNUP}</p>

          <form onSubmit={onSubmit}>
            {/* NAME */}
            <label className="auth-label">{LABEL_NAME}</label>
            <input
              className="auth-input"
              placeholder={PH_NAME}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            {/* EMAIL */}
            <label className="auth-label">{LABEL_EMAIL}</label>
            <input
              className="auth-input"
              placeholder={PH_USER_EMAIL}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            {/* PASSWORD */}
            <label className="auth-label">{LABEL_PASSWORD}</label>
            <div className="auth-pass-wrap">
              <input
                className="auth-input"
                type={showPass ? "text" : "password"}
                placeholder={PH_PASSWORD}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <span
                className="auth-pass-toggle"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? PASSWORDVIEWICON : PASSWORDHIDEICON}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <label className="auth-label">{LABEL_CONFIRM_PASSWORD}</label>
            <div className="auth-pass-wrap signup-confirm">
              <input
                className="auth-input"
                type={showConfirm ? "text" : "password"}
                placeholder={PH_CONFIRM_PASSWORD}
                value={form.confirmPassword}
                onPaste={(e) => e.preventDefault()}
                onDrop={(e) => e.preventDefault()}
                autoComplete="off"
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <span
                className="auth-pass-toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? PASSWORDVIEWICON : PASSWORDHIDEICON}
              </span>
            </div>

            {/* SUBMIT */}
            <button className="auth-btn">{TEXT_SIGNUP}</button>

            {/* FOOTER */}
            <div className="auth-footer">
              {TEXT_NO_ACCOUNT} <a href="/auth/user/login">{TEXT_SIGNIN}</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
