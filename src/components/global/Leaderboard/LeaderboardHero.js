"use client";

import { SEARCH_ICON } from "../../../const-value/config-icons/page";
import { IMAGE_LOADING } from "../../../const-value/config-message/page";
import styles from "./LeaderboardHero.module.css";

export default function LeaderboardHero({ search, onSearchChange }) {
  return (
    <section className={styles.hero}>
      <p className={styles.topLine}>
        Follow Your Favourites For The Latest Buzz!
      </p>

      <h1 className={styles.heading}>
        <span className={styles.discover}>Discover</span>

        <span className={styles.avatarGroup}>
          <img src="/images/avatar1.jpg" alt={IMAGE_LOADING} />
          <img src="/images/avatar2.jpg" alt={IMAGE_LOADING} />
          <img src="/images/avatar3.jpg" alt={IMAGE_LOADING} />
        </span>

        <span className={styles.amazing}>Amazing</span>
      </h1>

      <h2 className={styles.subHeading}>
        Event Organizers
        <img src="/images/sparkles.png" alt={IMAGE_LOADING} />
      </h2>

      {/* 🔥 SEARCH */}
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>{SEARCH_ICON}</span>
        <input
          type="text"
          placeholder="Search event organizers name"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <h3 className={styles.boardTitle}>
        Star Organizers Board{" "}
        <span>
          <img src="/images/sparkles_s.png" alt={IMAGE_LOADING} />
        </span>
      </h3>

      <p className={styles.boardSub}>
        Where brilliant organizers rise — your dedication builds the stage for every success!
      </p>
    </section>
  );
}
