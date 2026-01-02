"use client";

import { useEffect } from "react";

import styles from "./Saved.module.css";

export default function SavedEventsPage() {


  const events = Array(4).fill({
    title: "International Conference",
    location: "Coimbatore",
    date: "Dec 29, 2025",
    image: "/images/event.png",
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Saved Events</h2>

      <div className={styles.grid}>
        {events.map((e, i) => (
          <div key={i} className={styles.card}>
            <img src={e.image} className={styles.image} />
            <h4>{e.title}</h4>
            <p>{e.location}</p>
            <span>{e.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
