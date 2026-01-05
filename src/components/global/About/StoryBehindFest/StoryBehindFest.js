"use client";
import styles from "./StoryBehindFest.module.css";

export default function StoryBehindFest() {
  return (
    <section className={styles.hero}>
      <h1>
        The <span>Story</span> Behind the <strong>Fest</strong>
      </h1>

      <div className={styles.images}>
        {[1,2,3,4,5,6].map(i => (
          <img key={i} src={`/images/about/${i}.jpg`} alt="" />
        ))}
      </div>
    </section>
  );
}
