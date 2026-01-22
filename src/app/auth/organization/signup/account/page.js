import { Suspense } from "react";
import SignupAccountClient from "./SignupAccountClient";

/**
 * Server page wrapper for the organization signup (account) screen.
 * - Renders a minimal Suspense fallback while the client component mounts.
 * - Keeps server-side work minimal; all interactive logic is in SignupAccountClient.
 */
export default function Page() {
  return (
    <Suspense fallback={null}>
      <SignupAccountClient />
    </Suspense>
  );
}
