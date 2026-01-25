"use client";

import { useEffect } from "react";

import {
  TITLE_VERIFY_ACCOUNT,
  MSG_VERIFY_EMAIL_SENT,
  IMAGE_LOADING,
} from "../../../../../const-value/config-message/page";

import "../../../organization/auth-common.css";

export default function Page() {

  return (
    <div className="verify-overlay">
      <div className="verify-modal">
        <img src="/images/ace-logo.png" className="verify-logo" alt={IMAGE_LOADING}/>
        <h2>{TITLE_VERIFY_ACCOUNT}</h2>
        <p>{MSG_VERIFY_EMAIL_SENT}</p>
      </div>
    </div>
  );
}
