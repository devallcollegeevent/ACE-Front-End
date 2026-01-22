/**
 * Server page for organization signup — Details step.
 * - Minimal server wrapper: interactive logic lives in SignupDetailsClient ("use client").
 * - dynamic = "force-dynamic" forces fresh rendering for this step (no caching).
 */
export const dynamic = "force-dynamic";

import SignupDetailsClient from "./SignupDetailsClient";

/** Render the client component that manages the details form and navigation. */
export default function Page() {
  return <SignupDetailsClient />;
}
