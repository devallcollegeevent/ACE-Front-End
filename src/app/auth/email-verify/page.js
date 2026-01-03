import { Suspense } from "react";
import EmailVerifyClient from "./EmailVerifyClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Verifying...</div>}>
      <EmailVerifyClient />
    </Suspense>
  );
}
