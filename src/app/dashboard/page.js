import { redirect } from "next/navigation";

/**
 * Dashboard Index
 * Redirects the root dashboard path to the profile page.
 */
export default function DashboardIndex() {
  redirect("/dashboard/profile");
}
 