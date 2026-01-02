"use client";

import { useEffect } from "react";

import styles from "./Booking.module.css";

export default function BookingEventsPage() {
  const bookings = Array(4).fill({
    title: "Faculty Development Program",
    location: "Chennai",
    date: "Dec 25, 2025",
    image: "/images/event.png",
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>My Bookings</h2>

      <div className={styles.grid}>
        {bookings.map((b, i) => (
          <div key={i} className={styles.card}>
            <img src={b.image} />
            <h4>{b.title}</h4>
            <p>{b.location}</p>
            <span>{b.date}</span>
            <button className={styles.badge}>Paid</button>
          </div>
        ))}
      </div>
    </div>
  );
}
