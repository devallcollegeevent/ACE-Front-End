"use client";

import { useEffect, useState } from "react";
import styles from "./SpotlightCarousel.module.css";

import {
  DATEICON,
  LOCATION_ICON,
  SHAREICON,
} from "../../../const-value/config-icons/page";

/* ---------------- DATE FORMAT ---------------- */
function formatDate(dateString) {
  if (!dateString) return "TBA";
  const d = new Date(dateString);
  return d.toISOString().replace("T", " ").slice(0, 16);
}

/* ---------------- COUNTDOWN (NO HOOK) ---------------- */
function getCountdown(targetIso) {
  const diff = Math.max(new Date(targetIso) - new Date(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
    mins: Math.floor(diff / (1000 * 60)) % 60,
    secs: Math.floor(diff / 1000) % 60,
  };
}

/* ---------------- COMPONENT ---------------- */
export default function SpotlightCarousel({ data = [] }) {
  const [current, setCurrent] = useState(0);
  const [, forceUpdate] = useState(0); // for countdown refresh
  const total = data.length;

  /* Auto slide */
  useEffect(() => {
    if (!total) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 8000);

    return () => clearInterval(timer);
  }, [total]);

  /* Countdown tick */
  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!Array.isArray(data) || data.length === 0) return null;

  const goto = (i) => setCurrent((i + total) % total);
  const prev = () => goto(current - 1);
  const next = () => goto(current + 1);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Top Spotlights</h2>

      <div className={styles.wrapper}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((event) => {
            const { days, hours, mins, secs } =
              getCountdown(event.createdAt);

            return (
              <article className={styles.slide} key={event.identity}>
                {/* LEFT */}
                <div className={styles.left}>
                  <img
                    src={
                      event?.bannerImage && event.bannerImage.trim() !== ""
                        ? event.bannerImage
                        : "/images/event.png"
                    }
                    alt={event.title}
                    className={styles.image}
                  />
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                  <div className={styles.header}>
                    <h3>{event.title}</h3>
                    <button className={styles.share}>
                      {SHAREICON}
                    </button>
                  </div>

                  <div className={styles.meta}>
                    <p>
                      {LOCATION_ICON} {event.org?.city || "N/A"}
                    </p>
                    <p>
                      {DATEICON} {formatDate(event.createdAt)}
                    </p>
                  </div>

                  <div className={styles.startsIn}>
                    Event Starts In
                  </div>

                  <div className={styles.countdown}>
                    {[days, hours, mins, secs].map((v, i) => (
                      <div key={i} className={styles.pill}>
                        <div className={styles.num}>
                          {String(v).padStart(2, "0")}
                        </div>
                      </div>
                    ))}

                    <a
                      href={event.paymentLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cta}
                    >
                      Get Ticket
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CONTROLS */}
      <div className={styles.controls}>
        <button onClick={prev}>❮</button>

        <div className={styles.dots}>
          {data.map((_, i) => (
            <span
              key={i}
              className={
                i === current ? styles.activeDot : styles.dot
              }
              onClick={() => goto(i)}
            />
          ))}
        </div>

        <button onClick={next}>❯</button>
      </div>
    </section>
  );
}
