"use client";

import { useEffect, useState } from "react";
import styles from "./Notification.module.css";
import { MdEmail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

/**
 * NotificationPage
 *
 * Simple settings page to toggle notification channels.
 * - Email notifications
 * - WhatsApp notifications
 *
 * State is local-only; persist changes via API when backend integration is added.
 */

export default function NotificationPage() {
  // Toggle state for email notifications (on by default)
  const [emailNotify, setEmailNotify] = useState(true);

  // Toggle state for WhatsApp notifications (off by default)
  const [whatsappNotify, setWhatsappNotify] = useState(false);



  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Notification</h2>

      {/* Email notification toggle */}
      <div className={styles.card}>
        <div className={styles.left}>
          <MdEmail className={styles.icon} />
          <div>
            <h4>Email Notification</h4>
            <p>
              Stay updated with event alerts directly in your inbox.
            </p>
          </div>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={emailNotify}
            onChange={() => setEmailNotify(!emailNotify)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      {/* WhatsApp notification toggle */}
      <div className={styles.card}>
        <div className={styles.left}>
          <IoNotificationsOutline className={styles.icon} />
          <div>
            <h4>WhatsApp Notification</h4>
            <p>
              Stay updated with event alerts directly in your chat.
            </p>
          </div>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={whatsappNotify}
            onChange={() =>
              setWhatsappNotify(!whatsappNotify)
            }
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
