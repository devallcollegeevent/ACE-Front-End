/**
 * Reset Password page (server)
 * - dynamic = "force-dynamic" disables caching so the page is always fresh.
 * - Minimal server wrapper: interactive form and logic live in ResetPasswordClient ("use client").
 * - Keeps server-side work small and delegates state/side-effects to the client component.
 */
export const dynamic = "force-dynamic";

import ResetPasswordClient from "./ResetPasswordClient";

export default function Page() {
  return <ResetPasswordClient />;
}
