"use client";

/**
 * SavedEventsPage
 *
 * - Loads saved events on mount and displays them via EventSlider.
 * - Shows a lightweight empty state when there are no events.
 * - Uses the global loading context to indicate network activity.
 *
 */
import { useEffect, useState } from "react";
import styles from "./Saved.module.css";
import EventSlider from "../../../../components/global/EventSlider/EventSlider";
import { useLoading } from "../../../../context/LoadingContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getAllEventsApi } from "../../../../lib/api/event.api";

export default function SavedEventsPage() {
  const [events, setEvents] = useState([]);
  const { setLoading: setGlobalLoading } = useLoading();
  const router = useRouter();

  // Fetch saved events from backend and update state.
  // Keeps a global loading indicator active while the request is in-flight.
  const loadEvents = async () => {
    setGlobalLoading(true);
    try {
      const res = await getAllEventsApi();
      if (res?.status) {
        setEvents(res.data || []);
      } else {
        toast.error(res?.message || "Failed to load events");
      }
    } catch {
      // Log the error for debugging and show a user-friendly message.
      toast.error("Something went wrong");
    } finally {
      setGlobalLoading(false);
    }
  };

  // Load events once on mount.
  useEffect(() => {
    loadEvents();
  }, []);

  /* ================= EMPTY STATE =================
     Displayed when there are no saved events.
     - Provides a clear CTA to explore events.
  */
  if (!events || events.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.emptyState}>
          <img
            src="/images/no-event-image.png"
            alt="No Events"
            className={styles.emptyImg}
          />

          <h3>No Events Found</h3>
          <p>
            No saved events available. Start adding events to view them here.
          </p>

          <button
            className={styles.exploreBtn}
            onClick={() => router.push("/explore-events")}
          >
            Explore
          </button>
        </div>
      </div>
    );
  }

  /* ================= NORMAL =================
     Render the EventSlider with the fetched events.
  */
  return (
    <div className={styles.wrapper}>
      <EventSlider title="Saved Events" data={events} />
    </div>
  );
}
