"use client";
import styles from "./StandFor.module.css";

export default function StandFor() {
  return (
    <section className={styles.wrapper}>
      <h2>What We <span>Stand For</span></h2>

      <div className={styles.cards}>
        <div>
          <h3>Mission</h3>
          <p>Connecting students & organizers through a unified event platform.</p>
        </div>

        <div>
          <h3>Vision</h3>
          <p>To build India’s most trusted student event ecosystem.</p>
        </div>

        <div>
          <h3>Values</h3>
          <p>Transparency, creativity, collaboration & inclusivity.</p>
        </div>
      </div>
    </section>
  );
}
