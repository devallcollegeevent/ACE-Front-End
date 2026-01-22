"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  DATEICON,
  HEART_ICON,
  LOCATION_ICON,
  SAVEICON,
  TICKET_ICON,
  VIEW_ICON,
} from "../../../const-value/config-icons/page";

import "./EventSlider.css";

/**
 * EventSlider Component
 * Renders a horizontal scrollable list of event cards with navigation controls.
 */
export default function EventSlider({
  title,
  data = [],
  des,
  loading = false,
}) {
  const router = useRouter();
  const sliderRef = useRef(null);

  // like state per card (id based)
  const [likedCards, setLikedCards] = useState({});

  // Toggle the like status for a specific event ID
  const toggleLike = (id) => {
    if (!id) return;
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Scroll the slider view to the left
  const slideLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  // Scroll the slider view to the right
  const slideRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  // Navigate to the specific event details page
  const handleClick = (slug) => {
    if (!slug) return;
    router.push(`/events/${slug}`);
  };

  // Navigate to the main events listing page
  const handleCardClick = () => {
    router.push(`/events`);
  };

  // Format a date string into a readable locale format
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <section className="container-fluid mt-4 px-5">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-center py-5">Loading events...</p>
      </section>
    );
  }

  /* ================= EMPTY ================= */
  if (!loading && data.length === 0) {
    return (
      <section className="container-fluid mt-4 px-5">
        <h5 className="fw-bold">{title}</h5>
        <p className="text-center text-muted py-4">No events found</p>
      </section>
    );
  }

  /* ================= NORMAL ================= */
  return (
    <section className="container-fluid mt-4 px-5">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h5 className="fw-bold mb-0 land-title">{title}</h5>
          {des && <p className="mt-4">{des}</p>}
        </div>
        <button className="see-all-btn" onClick={handleCardClick}>
          See all
        </button>
      </div>

      <hr />

      {/* NAV */}
      <div className="d-flex justify-content-end gap-4 mb-3">
        <button className="scroll-rounded-circle" onClick={slideLeft}>
          ❮
        </button>
        <button className="scroll-rounded-circle" onClick={slideRight}>
          ❯
        </button>
      </div>

      {/* SLIDER */}
      <div
        className="d-flex gap-3 overflow-hidden"
        ref={sliderRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {data.map((event, index) => {
          const calendar = event.calendars?.[0];
          const isLiked = likedCards[event.identity];

          return (
            <div
              key={event.identity ?? index}
              className={`card event-card ${isLiked ? "liked" : ""}`}
            >
              <img
                src={event.bannerImages?.[0] || "/images/event.png"}
                className="event-img"
                alt={event.title}
                onClick={() => handleClick(event.slug)}
              />

              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-semibold card-titel">
                    {event.title || "Untitled Event"}
                  </span>
                  <div onClick={() => toggleLike(event.identity)}>
                    <HEART_ICON active={isLiked} />
                  </div>
                  {SAVEICON}
                </div>

                <div className="mt-2 event-details">
                  <div className="d-flex justify-content-between">
                    <span className="ellipsis">
                      {LOCATION_ICON} {event.location?.city || "N/A"}
                    </span>
                    <span>{TICKET_ICON} 500</span>
                  </div>

                  <div className="mt-2">
                    <div>
                      {DATEICON} {formatDate(calendar?.startDate)}
                    </div>

                    {/* LIKE */}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="view-badge">{VIEW_ICON} 456</span>
                  <span className="badge-paid">{event.categoryName}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
