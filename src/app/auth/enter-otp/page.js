import { Suspense } from "react";
import EnterOtpClient from "./EnterOtpClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnterOtpClient />
    </Suspense>
  );
}
