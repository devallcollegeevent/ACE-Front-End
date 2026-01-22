"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import "./reset-password.css";

import { toast } from "react-hot-toast";
import { resetPasswordApi } from "../../../lib/api/auth.api";
import { clearEmail, getEmail } from "../../../lib/auth";
import { userResetSchema } from "../../../components/validation";
import {
  PASSWORDHIDEICON,
  PASSWORDVIEWICON,
} from "../../../const-value/config-icons/page";
import {
  MSG_PASSWORD_UPDATED_SUCCESS,
  MSG_PASSWORD_UPDATED_FAILED,
  TITLE_SET_NEW_PASSWORD,
  SUB_TITLE_SET_NEW_PASSWORD,
  LABEL_SET_NEW_PASSWORD,
  LABEL_CONFIRM_PASSWORD,
  BTN_CONTINUE,
  TITLE_ALREADY_HAVE_ACCOUNT,
  TEXT_SIGNIN,
  ROLE_USER,
} from "../../../const-value/config-message/page";
import { useLoading } from "../../../context/LoadingContext";

/**
 * ResetPasswordPage (client)
 *
 * - Reads role from query params to choose assets/redirects.
 * - Loads the email from local storage (saved during forgot-password flow).
 * - Validates new password + confirmation using `userResetSchema`.
 * - Calls resetPasswordApi to persist the new password and clears stored email on success.
 * - Uses global loading context and toast notifications for UX feedback.
 */
export default function ResetPasswordPage() {
  // query param role (defaults to user)
  const params = useSearchParams();
  const role = params.get("role") || ROLE_USER;

  // global loading context (used to block UI during async operations)
  const { setLoading } = useLoading(); 

  // email persisted from previous step (forgot password -> enter otp -> reset)
  const email = getEmail();

  // local controlled inputs
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  // visibility toggles for password fields
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // ROLE BASED CONFIG: images and redirects differ for user / organizer flows
  const config = {
    user: {
      image: "/images/auth-forgot.png",
      redirect: "/auth/success?role=user",
      login: "/user/login",
    },
    organizer: {
      image: "/images/or_forgotpasswordnextimage.png",
      redirect: "/auth/success?role=organizer",
      login: "/organizer/login",
    },
  };

  const ui = config[role];

  // Form submit:
  // 1) validate inputs with YUP schema
  // 2) call API to reset password
  // 3) clear stored email and redirect on success
  async function onSubmit(e) {
    e.preventDefault();

    // CLIENT-SIDE VALIDATION using Yup schema
    try {
      await userResetSchema.validate(
        { password, confirmPassword: confirm },
        { abortEarly: false }
      );
    } catch (err) {
      return toast.error(err.errors[0]);
    }
    finally {
      // ensure loading is off if validation threw; note setLoading(true) is set before API
      setLoading(false); 
    }



    // API CALL: reset password on backend
    try {
      await resetPasswordApi({
        email,
        password,
      });

      // success -> notify, clear persisted email, and redirect
      toast.success(MSG_PASSWORD_UPDATED_SUCCESS);
      clearEmail();
      window.location.href = ui.redirect;
    } catch (err) {
      // show backend error if available otherwise generic message
      toast.error(err?.response?.data?.message || MSG_PASSWORD_UPDATED_FAILED);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="org-shell">
      {/* LEFT IMAGE */}
      <aside className="org-left">
        <img src={ui.image} className="org-left-img" alt="reset" />
      </aside>

      {/* RIGHT FORM */}
      <main className="org-right">
        <div className="org-card">
          <h2 className="org-title">{TITLE_SET_NEW_PASSWORD}</h2>
          <p className="org-sub">{SUB_TITLE_SET_NEW_PASSWORD}</p>

          <form onSubmit={onSubmit}>
            {/* NEW PASSWORD */}
            <div className="form-group">
              <label className="form-label">{LABEL_SET_NEW_PASSWORD}</label>
              <div className="pass-wrap">
                <input
                  className="form-control"
                  type={show1 ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                />
                <span className="pass-toggle" onClick={() => setShow1(!show1)}>
                  {show1 ? PASSWORDHIDEICON : PASSWORDHIDEICON}
                </span>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label className="form-label">{LABEL_CONFIRM_PASSWORD}</label>
              <div className="pass-wrap">
                <input
                  className="form-control"
                  type={show2 ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  onPaste={(e) => e.preventDefault()}
                  onDrop={(e) => e.preventDefault()}
                  autoComplete="off"
                  placeholder="Re-enter password"
                />
                <span className="pass-toggle" onClick={() => setShow2(!show2)}>
                  {show2 ? PASSWORDVIEWICON : PASSWORDHIDEICON}
                </span>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="form-actions">
              <button className="btn-primary-ghost" type="submit">
                {BTN_CONTINUE}
              </button>
            </div>

            {/* FOOTER */}
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
