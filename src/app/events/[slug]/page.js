import { notFound } from "next/navigation";
import EventClient from "./EventClient";
import { getEventBySlugApi } from "../../../lib/api/event.api";

/* ================= SEO ================= */
// Generate dynamic metadata for the event page (title, description)
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await getEventBySlugApi(slug);
  console.log("siiiiiiiiiiii", res);
  const event = res?.data;

  if (!event) {
    return {
      title: "Event Not Found | AllCollegeEvent",
      description: "Event not found",
    };
  }

  return { 
    title: `${event.title} | AllCollegeEvent`,
    description: event.description?.slice(0, 160),
  };
}

/* ================= PAGE ================= */
/**
 * Event Details Page
 * Server-side component that fetches event data based on the slug.
 * Renders SEO metadata, JSON-LD schema for structured data, and the client view.
 */
export default async function Page({ params }) {
  const { slug } = await params;

  const res = await getEventBySlugApi(slug);
  const event = res?.data;

  if (!event) notFound();

  return (
    <>
      {/* ===== SEO SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            description: event.description,
            startDate: event.calendars?.[0]?.startDate,
            endDate: event.calendars?.[0]?.endDate,
            image: event.bannerImages?.[0],
            location: {
              "@type": "Place",
              name: [event.location?.city, event.location?.state]
                .filter(Boolean)
                .join(", "),
            },
            organizer: {
              "@type": "Organization",
              name: event.org?.organizationName,
            },
          }),
        }}
      />

      <EventClient event={event} />
    </>
  );
}
