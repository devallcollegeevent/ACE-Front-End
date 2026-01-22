import { redirect } from "next/navigation";

/**
 * Space Page
 * Redirects /dashboard/space to the event creation page.
 */
export default function SpacePage() {
  redirect("/dashboard/space/create");
} 
