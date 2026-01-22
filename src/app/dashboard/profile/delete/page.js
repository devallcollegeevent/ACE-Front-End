export const dynamic = "force-dynamic"; // render this page dynamically at runtime

import DeleteProfileClient from "./DeleteProfileClient";

// Page component: minimal server wrapper that mounts the client-side delete UI
export default function Page() {
  return <DeleteProfileClient />;
}
