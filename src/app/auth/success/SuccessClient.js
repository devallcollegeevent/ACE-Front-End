"use client";

/**
 * SuccessClient
 *
 * Displays a success/confirmation screen after password reset or account signup.
 * - Reads `role` from query params to pick images, title, subtitle and login link.
 * - Uses the shared layout used across auth screens (left illustration + right card).
 * - Keeps UI stateless and purely presentational.
 */

import { useSearchParams } from "next/navigation";
import "./success.css";
import {
  BTN_EMAIL_VERIFY_SUCCESS,
  IMAGE_ALT,
  ROLE_USER,
  SUB_TITLE_DOMAIN_MAIL_VERIFY,
  SUB_TITLE_PASSWORD_UPDATE_SUCCESS,
  TEXT_SIGNIN,
  TITLE_ALREADY_HAVE_ACCOUNT,
} from "../../../const-value/config-message/page";
import { useLoading } from "../../../context/LoadingContext";

export default function SuccessClient() {
  // read role from query params (defaults to user)
  const params = useSearchParams();
  const role = params.get("role") || ROLE_USER;

  // global loading context is available if parent toggles it (not used here)
  const { setLoading } = useLoading();

  // UI configuration per role to keep JSX concise
  const config = {
    user: {
      image: "/images/auth-forgot.png",
      title: "Password Changed!",
      subtitle: SUB_TITLE_PASSWORD_UPDATE_SUCCESS,
      loginLink: "/auth/user/login",
    },
    organizer: {
      image: "/images/or_passwordsuccess.png",
      title: "Verify your Account",
      subtitle: SUB_TITLE_DOMAIN_MAIL_VERIFY,
      loginLink: "/auth/organization/login",
    },
  };

  const ui = config[role];

  return (
    <div className="org-shell">
      {/* LEFT: illustration */}
      <aside className="org-left">
        <img className="org-left-img" src={ui.image} alt={IMAGE_ALT} />
      </aside>

      {/* RIGHT: success card */}
      <main className="org-right">
        <div className="org-card org-success">
          <h2 className="org-title">{ui.title}</h2>
          <div className="org-sub">{ui.subtitle}</div>

          <div className="form-actions">
            <a href={ui.loginLink} className="btn-primary-ghost">
              {BTN_EMAIL_VERIFY_SUCCESS}
            </a>
          </div>

          <div className="org-foot">
            {TITLE_ALREADY_HAVE_ACCOUNT}{" "}
            <a href={ui.loginLink}>{TEXT_SIGNIN}</a>
          </div>
        </div>
      </main>
    </div>
  );
}
