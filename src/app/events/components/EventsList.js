"use client";

import { useRouter } from "next/navigation";
import { encodeId } from "../../../lib/utils/secureId";
import { DATEICON, LIKE_ICON, LOCATION_ICON, TICKET_COLOR_ICON } from "../../../const-value/config-icons/page";

export default function EventsList({ events = [] }) {
  const router = useRouter();

  const handleClick = (eventId) => {
    const encId = encodeId(eventId);
    router.push(`/event/${encId}`);
  };

  if (!events.length) {
    return (
      <div className="events-empty">
        No events found for selected filters
      </div>
    );
  }
  return (
    <div className="events-list">

      {events.map((e) => (
        <div
          key={e.identity}
          className="event-row-card"
          onClick={() => handleClick(e.identity)}
        >
          {/* IMAGE */}
          <div className="event-img-wrap">
            <img
              src={e.bannerImage || "/images/event.png"}
              alt={e.title}
            />

            {e.offers && (
              <span className="event-offer">Offers</span>
            )}
          </div>

          {/* CONTENT */}
          <div className="event-content">

            <div className="event-title-row">
              <h6 className="event-title">
                {e.title}
              </h6>

              <div className="event-actions">
                <button className="icon-btn">{LIKE_ICON}</button>
                <button className="icon-btn">{TICKET_COLOR_ICON}</button>
              </div>
            </div>

            <div className="event-tags">
              <span className="tag paid">
                {e.paymentLink ? "Paid" : "Free"}
              </span>

              {e.categoryIdentity && (
                <span className="tag secondary">
                  {e.categoryIdentity}
                </span>
              )}
            </div>

            <div className="event-meta">
              <span>{DATEICON} {new Date(e.eventDate || e.createdAt).toDateString()}</span>
              <span>
                {LOCATION_ICON} {e.org?.city || "N/A"} •{" "}
                <span
                  className={
                    e.mode === "ONLINE" ? "online" : "offline"
                  }
                >
                  {e.mode}
                </span>
              </span>
            </div>
          </div>

          {/* STATUS */}
          <div className="event-status">
            {new Date(e.eventDate || e.createdAt) > new Date() ? (
              <span className="badge ongoing">
                {Math.ceil(
                  (new Date(e.eventDate || e.createdAt) - new Date()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                Days to go
              </span>
            ) : (
              <span className="badge past">{e.mode}</span>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}
