"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import "./forgot-password.css";

/* VALIDATION */
import {
  organizerForgotSchema,
  userForgotSchema,
} from "../../../components/validation";

/* CONSTANTS */
import {
  BTN_OTP_SEND,
  MSG_OTP_SEND_EMAIL,
  MSG_OTP_SEND_EMAIL_ERROR,
  SUB_TITLE_OTP_SEND,
  TEXT_SIGNIN,
  TITLE_ALREADY_HAVE_ACCOUNT,
  ROLE_USER,
  ROLE_ORGANIZER,
} from "../../../const-value/config-message/page";

/* API */
import { forgotApi } from "../../../lib/api/auth.api";

/* AUTH */
import { saveEmail } from "../../../lib/auth";

/* LOADING */
import { useLoading } from "../../../context/LoadingContext";

/**
 * ForgotPasswordClient
 *
 * Simple client UI for requesting a password reset OTP.
 * - Validates input using role-specific schema.
 * - Calls forgotApi to send OTP to provided email.
 * - Saves email to local storage and navigates to Enter OTP screen on success.
 */
export default function ForgotPasswordClient() {
  const router = useRouter();
  const params = useSearchParams();
  const role = params.get("role") || ROLE_USER;

  const { setLoading } = useLoading();
  const [email, setEmail] = useState("");

  // UI and behavior configuration per role (user / organizer)
  const config = {
    user: {
      image: "/images/auth-forgot.png",
      label: "Email",
      login: "/auth/user/login",
      redirect: "/auth/enter-otp?role=user",
      schema: userForgotSchema,
      type: ROLE_USER,
    },
    organizer: {
      image: "/images/or_forgotpassword.png",
      label: "Domain Mail ID",
      login: "/auth/organization/login",
      redirect: "/auth/enter-otp?role=organizer",
      schema: organizerForgotSchema,
      type: ROLE_ORGANIZER,
    },
  };

  const ui = config[role];

  // Form submit handler:
  // - validate input with role-specific schema
  // - call API to send OTP
  // - persist email locally and navigate to OTP entry on success
  async function onSubmit(e) {
    e.preventDefault();

    try {
      await ui.schema.validate({ email }, { abortEarly: false });
    } catch (err) {
      return toast.error(err.errors[0]);
    }

    setLoading(true);

    try {
      await forgotApi({
        email,
      });

      // keep email for next screen (Enter OTP)
      saveEmail(email);
      toast.success(MSG_OTP_SEND_EMAIL);
      router.push(ui.redirect);
    } catch (err) {
      toast.error(err?.message || MSG_OTP_SEND_EMAIL_ERROR);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="org-shell">
      {/* Illustration / left column */}
      <aside className="org-left">
        <img src={ui.image} className="org-left-img" alt="Forgot Password" />
      </aside>

      {/* Form / right column */}
      <main className="org-right">
        <div className="org-card">
          <h2 className="org-title">Forgot Password</h2>
          <p className="org-sub">{SUB_TITLE_OTP_SEND}</p>

          <form onSubmit={onSubmit}>
            <label className="form-label">{ui.label}</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={ui.label}
            />

            <div className="form-actions">
              <button type="submit" className="btn-primary-ghost">
                {BTN_OTP_SEND}
              </button>
            </div>

            <div className="org-foot">
              {TITLE_ALREADY_HAVE_ACCOUNT}{" "}
              <a href={ui.login}>{TEXT_SIGNIN}</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
