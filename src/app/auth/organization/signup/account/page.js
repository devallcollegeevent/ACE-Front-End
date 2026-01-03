import { Suspense } from "react";
import SignupAccountClient from "./SignupAccountClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SignupAccountClient />
    </Suspense>
  );
}
