import { Suspense } from "react";
import EmailVerifyClient from "./EmailVerifyClient";

/**
 * Server page wrapper for email verification.
 * - Shows a simple fallback while the client component runs.
 * - Delegates interactive/token verification to EmailVerifyClient ("use client").
 */
export default function Page() {
  return (
    <Suspense fallback={<div>Verifying...</div>}>
      <EmailVerifyClient />
    </Suspense>
  );
}
