"use client";

import { useEffect } from "react";

import {
  TITLE_VERIFY_ACCOUNT,
  MSG_VERIFY_EMAIL_SENT,
} from "../../../../../const-value/config-message/page";

import "../../../organization/auth-common.css";
import { useLoading } from "../../../../../context/LoadingContext";

export default function Page() {
  const { setLoading } = useLoading(); // ONLY ADD

  useEffect(() => {
    setLoading(true);     // GLOBAL LOADING ON

    return () => {
      setLoading(false);  // GLOBAL LOADING OFF
    };
  }, [setLoading]);

  return (
    <div className="verify-overlay">
      <div className="verify-modal">
        <img src="/images/ace-logo.png" className="verify-logo" />
        <h2>{TITLE_VERIFY_ACCOUNT}</h2>
        <p>{MSG_VERIFY_EMAIL_SENT}</p>
      </div>
    </div>
  );
}
