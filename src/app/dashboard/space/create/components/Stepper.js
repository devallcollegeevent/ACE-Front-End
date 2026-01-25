"use client";

import { IMAGE_LOADING } from "../../../../../const-value/config-message/page";
import styles from "./Stepper.module.css";
export default function Stepper({ step }) {
  return (
    <div className={styles.stepperWrap}>
      {/* STEP 1 */}
      <div className={`${styles.stepItem} ${step === 1 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/basicdetails.png" alt={IMAGE_LOADING} />
        </div>
        <p>ORGANIZATION DETAILS</p>
      </div>

      {/* STEP 2 */}
      <div className={`${styles.stepItem} ${step === 2 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/creatordetails.png" alt={IMAGE_LOADING} />
        </div>
        <p>EVENT DETAILS</p>
      </div>

      {/* STEP 3 */}
      <div className={`${styles.stepItem} ${step === 3 ? styles.active : ""}`}>
        <div className={styles.circle}>
          <img src="/images/finaldetails.png" alt={IMAGE_LOADING} />
        </div>
        <p>MEDIA & TICKETS</p>
      </div>
    </div>
  );
}
