import { Suspense } from "react";
import ForgotPasswordClient from "./ForgotPasswordClient";

/**
 * Server page wrapper for Forgot Password screen.
 * - Renders a lightweight fallback while the client component initializes.
 * - Delegates interactive logic and form handling to ForgotPasswordClient ("use client").
 */
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordClient />
    </Suspense>
  );
}
