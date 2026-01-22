"use client";

import styles from "./Stepper.module.css";

/**
 * Stepper
 *
 * Presentational component that displays a three-step progress indicator
 * for the create-space flow. Highlights the active step.
 *
 * Props:
 *  - step (number): active step index (1 | 2 | 3)
 */

export default function Stepper({ step }) {
  return (
    <div className={styles.stepperWrap}>
      {/* STEP 1 - Organization details */}
      <div className={`${styles.stepItem} ${step === 1 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/basicdetails.png" alt="organization" />
        </div>
        <p>ORGANIZATION DETAILS</p>
      </div>

      {/* STEP 2 - Event details */}
      <div className={`${styles.stepItem} ${step === 2 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/creatordetails.png" alt="event" />
        </div>
        <p>EVENT DETAILS</p>
      </div>

      {/* STEP 3 - Media and tickets */}
      <div className={`${styles.stepItem} ${step === 3 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/finaldetails.png" alt="media" />
        </div>
        <p>MEDIA & TICKETS</p>
      </div>
    </div>
  );
}
