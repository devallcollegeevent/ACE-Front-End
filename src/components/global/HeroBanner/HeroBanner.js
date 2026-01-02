"use client";

import styles from "./HeroBanner.module.css";

export default function HeroBanner({ text }) {
  const words = text.split(" ");
  console.log("00000000",words)

  return (
    <>
      <h1 className={`${styles.title} ${styles.center}`}>
        {words.map((word, i) => (
          <span
            key={i}
            style={{ animationDelay: `${0.3 * i}s` }}
          >
            {word}
          </span>
        ))}
      </h1>

      <p className={styles.subtitle}>
        Discover events that match your vibe — anytime, anywhere.
      </p>
    </>
  );
}
