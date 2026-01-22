"use client";

import { useEffect } from "react";

import {
  TITLE_VERIFY_ACCOUNT,
  MSG_VERIFY_EMAIL_SENT,
} from "../../../../../const-value/config-message/page";

import "../../../organization/auth-common.css";
import { useLoading } from "../../../../../context/LoadingContext";

/**
 * Verification notice page
 *
 * - Displays a modal telling the user that a verification email was sent.
 * - Toggles the global loading indicator while this modal is mounted so the
 *   rest of the UI is visually blocked (optional UX choice).
 * - The loading flag is enabled on mount and disabled on unmount.
 */
export default function Page() {
  const { setLoading } = useLoading(); 

  useEffect(() => {
    // Turn on global loading when this confirmation is shown
    setLoading(true); 

    // Ensure loading is turned off when the component unmounts
    return () => {
      setLoading(false); 
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
