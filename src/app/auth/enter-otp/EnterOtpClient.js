"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import "./enter-otp.css";

/* VALIDATION */
import { otpSchema } from "../../../components/validation";

/* API */
import { verifyOtpApi, resendOtpApi } from "../../../lib/api/auth.api";

/* AUTH */
import { getEmail } from "../../../lib/auth";

/* CONSTANTS */
import {
  TITLE_ENTER_OTP,
  SUB_TITLE_ENTER_OTP,
  BTN_CONTINUE,
  BTN_OTP_RESEND,
  MSG_GENERIC_ERROR,
  MSG_NEW_OTP_SEND,
  MSG_NEW_OTP_FAILED_TO_SEND,
  MSG_OTP_INVALID,
  MSG_OTP_VERIFIED,
  SUB_TITLE_OTP_NOT_RECEIVE,
  CONDITION_OTP_VERIFY,
  CONDITION_OTP_SEND,
  ROLE_USER,
} from "../../../const-value/config-message/page";

/* GLOBAL LOADING */
import { useLoading } from "../../../context/LoadingContext";

/**
 * EnterOtpClient
 *
 * UI for entering a 4-digit OTP sent to user's email.
 * - Reads role from query params to adjust assets/redirect.
 * - Pre-fills email from local storage (getEmail).
 * - Validates OTP with otpSchema and calls verifyOtpApi.
 * - Supports resending OTP via resendOtpApi.
 */
export default function EnterOtpClient() {
  const router = useRouter();
  const params = useSearchParams();
  const role = params.get("role") || ROLE_USER;

  // local state
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // stores 4 single-digit inputs
  const [resendLoading, setResendLoading] = useState(false);

  const { loading, setLoading } = useLoading();

  // refs for input focus management
  const inputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // load previously stored email once
  useEffect(() => {
    const storedEmail = getEmail();
    if (storedEmail) setEmail(storedEmail);
  }, []);

  // UI/redirect config per role
  const config = {
    user: {
      image: "/images/auth-forgot.png",
      redirect: "/auth/reset-password?role=user",
    },
    organizer: {
      image: "/images/or_forgotpassword.png",
      redirect: "/auth/reset-password?role=organizer",
    },
  };

  const ui = config[role];

  // handle input change: only digits allowed, auto-focus next input
  function onChange(index, value) {
    if (!/^\d*$/.test(value)) return;

    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);

    if (value && index < 3) {
      inputs[index + 1].current?.focus();
    }
  }

  // submit OTP: validate then call API
  async function onSubmit(e) {
    e.preventDefault();
    const code = otp.join("");

    try {
      await otpSchema.validate({ otp: code }, { abortEarly: false });
    } catch (err) {
      return toast.error(err.errors[0]);
    }

    try {
      setLoading(true);
      const res = await verifyOtpApi({ email, otp: code });
      setLoading(false);

      if (res?.status) {
        toast.success(MSG_OTP_VERIFIED);
        router.push(ui.redirect);
      } else {
        toast.error(res?.message || MSG_OTP_INVALID);
      }
    } catch {
      setLoading(false);
      toast.error(MSG_GENERIC_ERROR);
    }
  }

  // resend OTP handler
  async function resendCode() {
    try {
      setResendLoading(true);
      const res = await resendOtpApi({ email });
      setResendLoading(false);

      if (res?.status) {
        toast.success(MSG_NEW_OTP_SEND);
      } else {
        toast.error(res?.message || MSG_NEW_OTP_FAILED_TO_SEND);
      }
    } catch {
      setResendLoading(false);
      toast.error(MSG_GENERIC_ERROR);
    }
  }

  return (
    <div className="org-shell">
      <aside className="org-left">
        <img className="org-left-img" src={ui.image} alt="otp" />
      </aside>

      <main className="org-right">
        <div className="org-card">
          <h2 className="org-title">{TITLE_ENTER_OTP}</h2>

          <div className="org-sub">
            {SUB_TITLE_ENTER_OTP} {email || "your email"}
          </div>

          <form className="org-form" onSubmit={onSubmit}>
            <div className="otp-row">
              {otp.map((val, i) => (
                <input
                  key={i}
                  ref={inputs[i]}
                  className="otp-input"
                  maxLength={1}
                  value={val}
                  onChange={(e) => onChange(i, e.target.value)}
                />
              ))}
            </div>

            <div className="form-actions">
              <button
                className="btn-primary-ghost"
                type="submit"
                disabled={loading}
              >
                {loading ? CONDITION_OTP_VERIFY : BTN_CONTINUE}
              </button>
            </div>

            <div className="org-foot" style={{ marginTop: 10 }}>
              {SUB_TITLE_OTP_NOT_RECEIVE}{" "}
              <button
                type="button"
                className="resendCondeText"
                onClick={resendCode}
                disabled={resendLoading}
              >
                {resendLoading ? CONDITION_OTP_SEND : BTN_OTP_RESEND}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
