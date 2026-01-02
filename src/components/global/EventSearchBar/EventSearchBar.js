"use client";

import styles from "./EventSearchBar.module.css";

export default function EventSearchBar({
  whatIcon,
  whereIcon,
  whenIcon,
  onWhatClick,
  onWhereClick,
  onWhenClick,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.col} onClick={onWhatClick}>
            <div className={styles.icon}>{whatIcon}</div>
            <div>
              <div className={styles.title}>What</div>
              <div className={styles.sub}>Event Type</div>
            </div>
          </div>

          <div className={styles.col} onClick={onWhereClick}>
            <div className={styles.icon}>{whereIcon}</div>
            <div>
              <div className={styles.title}>Where</div>
              <div className={styles.sub}>Location</div>
            </div>
          </div>

          <div className={styles.col} onClick={onWhenClick}>
            <div className={styles.icon}>{whenIcon}</div>
            <div>
              <div className={styles.title}>When</div>
              <div className={styles.sub}>Date</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
