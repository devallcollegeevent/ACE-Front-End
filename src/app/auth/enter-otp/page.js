import { Suspense } from "react";
import EnterOtpClient from "./EnterOtpClient";

/**
 * Server page wrapper for Enter OTP screen.
 * - Renders a lightweight fallback while the client component initializes.
 * - Delegates interactive logic to EnterOtpClient ("use client").
 */
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnterOtpClient />
    </Suspense>
  );
}
