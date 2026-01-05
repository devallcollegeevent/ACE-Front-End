"use client";
import styles from "./VoiceOfTrust.module.css";

export default function VoiceOfTrust() {
  return (
    <section className={styles.wrapper}>
      <h2>
        Voice Of <span>Trust</span>
      </h2>

      <div className={styles.grid}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className={styles.card}>
            <h4>Jerome Bell</h4>
            <span>User</span>
            <p>
              Smooth and reliable experience. Booking events was super easy!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
