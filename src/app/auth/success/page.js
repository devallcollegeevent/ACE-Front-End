// Server page wrapper for the success confirmation screen.
// - dynamic = "force-dynamic" ensures the page is always fresh (no caching).
// - Keeps server-side work minimal; all interactive UI lives in SuccessClient ("use client").
export const dynamic = "force-dynamic";

import SuccessClient from "./SuccessClient";

export default function Page() {
  return <SuccessClient />;
}
