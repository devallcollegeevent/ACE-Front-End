"use client";

/**
 * BookingEventsPage
 *
 * - Loads all events (booked events context) from backend on mount.
 * - Shows a global loading indicator while fetching.
 * - Displays results through EventSlider component.
 *
 */
import { useEffect, useState } from "react";

import styles from "./Booking.module.css";
import { useLoading } from "../../../../context/LoadingContext";
import EventSlider from "../../../../components/global/EventSlider/EventSlider";
import toast from "react-hot-toast";

/* API: fetch events list from backend */
export default function BookingEventsPage() {
  const [events, setEvents] = useState([]);
  const { setLoading: setGlobalLoading } = useLoading();

  // loadEvents: fetch events and update state; keep global loading toggled
  const loadEvents = async () => {
    setGlobalLoading(true);

    try {
      const res = await getAllEventsApi();

      // backend returns { status: true, data: [...] } on success
      if (res?.status) {
        setEvents(res.data);
        setGlobalLoading(false);
      } else {
        toast.error(res?.message || "Failed to load events");
      }
    } catch {
      // network / unexpected error
      toast.error("Something went wrong");
    } finally {
      setGlobalLoading(false);
    }
  };

  // Fetch events once on component mount
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className={styles.wrapper}>
      <EventSlider title="Booked Events" data={events} />
    </div>
  );
}
