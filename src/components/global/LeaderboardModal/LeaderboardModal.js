"use client";

import { useEffect } from "react";
import styles from "./LeaderboardModal.module.css";

// Public images
const goldMedal = "/images/FirstOr.png";
const silverMedal = "/images/SecondOr.png";
const bronzeMedal = "/images/ThreedOr.png";

/**
 * LeaderboardModal Component
 * Displays a modal with the top 3 organizers on a podium and a list of others.
 */
export default function LeaderboardModal({ open, onClose, data = [] }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  const top3 = data.slice(0, 3);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className={styles.title}>Legends Board</h2>
        <p className={styles.subtitle}>
          Where brilliant organizers rise — your dedication builds the stage for every success!
        </p>

        {/* PODIUM */}
        <div className={styles.podium}>
          {top3.map((org, i) => (
            <div
              key={org.id}
              className={`${styles.podiumCard} ${
                i === 0 ? styles.first : i === 1 ? styles.second : styles.third
              }`}
            >
              <img
                src={i === 0 ? goldMedal : i === 1 ? silverMedal : bronzeMedal}
                alt="medal"
                className={styles.medal}
              />

              <div className={styles.avatarWrap}>
                <img src={org.avatar} alt={org.name} />
              </div>

              <div className={styles.name}>{org.name}</div>

              <div className={styles.stats}>
                <div>
                  <div className={styles.statLabel}>Events created</div>
                  <div className={styles.statValue}>{org.events}</div>
                </div>
                <div>
                  <div className={styles.statLabel}>User views</div>
                  <div className={styles.statValue}>{org.views}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <h3 className={styles.listTitle}>List of Top Organizers</h3>
        <p className={styles.listSub}>
          You don't just host events; you shape experiences. Keep shining!
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Organizer</th>
                <th>Events</th>
                <th>Views</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {data.map((org) => (
                <tr key={org.id}>
                  <td className={styles.nameCell}>
                    <img src={org.avatar} alt={org.name} />
                    {org.name}
                  </td>
                  <td>{org.events}</td>
                  <td>{org.views}</td>
                  <td className={styles.rank}>{org.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
