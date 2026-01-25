"use client";

import { IMAGE_LOADING } from "../../../const-value/config-message/page";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        How All College Event Works
      </h2>

      <img
        src="/images/animationImage.png"
        alt={IMAGE_LOADING}
        className={styles.animation}
      />
    </section>
  );
}
