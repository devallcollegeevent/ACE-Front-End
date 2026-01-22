export const dynamic = "force-dynamic";

import EventsFilterPage from "./EventsFilterPage";

/**
 * Events Page Entry
 * Forces dynamic rendering and loads the main filter page component.
 */
export default function Page() {
  return <EventsFilterPage />;
}
