"use client";

import { useEffect, useState } from "react";
import styles from "./Email.module.css";
import { useLoading } from "../../../../context/LoadingContext";

/**
 * EmailSettingsPage
 *
 * Simple toggle-based UI to control email notifications for common events:
 *  - Event Created
 *  - Event Status (approved/rejected)
 *  - Event Completed
 *
 * Uses global loading context to indicate page-level activity during mount/unmount.
 */

export default function EmailSettingsPage() {
  // toggle states for each notification preference
  const [created, setCreated] = useState(true);
  const [status, setStatus] = useState(false);
  const [completed, setCompleted] = useState(false);

  // global loader (show while performing async operations/navigation)
  const { setLoading } = useLoading(); // ONLY ADD

  useEffect(() => {
    // enable global loader while the page is mounting
    setLoading(true);

    // cleanup: ensure global loader is disabled when leaving page
    return () => {
      setLoading(false); 
    };
  }, [setLoading]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Email Settings</h2>

      {/* Event Created notification toggle */}
      <div className={styles.card}>
        <div>
          <h4>Event Created Successfully</h4>
          <p>
            We will notify you once your event is reviewed and approved.
          </p>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={created}
            onChange={() => setCreated(!created)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      {/* Event Status notification toggle */}
      <div className={styles.card}>
        <div>
          <h4>Event Status</h4>
          <p>
            We will notify when your event is approved or rejected.
          </p>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={status}
            onChange={() => setStatus(!status)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      {/* Event Completed notification toggle */}
      <div className={styles.card}>
        <div>
          <h4>Event Completed</h4>
          <p>We will notify when your event has ended.</p>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
