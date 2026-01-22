"use client";

import { useRouter } from "next/navigation";
import EventDetailsView from "../../../components/global/EventDetailsView/EventDetailsView";

/**
 * EventClient Component
 * Client-side wrapper for the event details view.
 * Handles navigation (back button) and passes event data to the presentation component.
 */
export default function EventClient({ event }) {
  const router = useRouter();

  return (
    <EventDetailsView
      event={event}
      onBack={() => router.back()}
    />
  );
}
 