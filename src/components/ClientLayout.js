"use client";

import { usePathname } from "next/navigation";
import Navbar from "./global/Navbar/Navbar";

/**
 * ClientLayout Component
 * Wraps the application content and conditionally renders the Navbar based on the current path.
 */
export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Determine if the Navbar should be hidden for specific routes (e.g., auth pages)
  const hideNavbar =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup");

  return (
    <>
      {!hideNavbar && <Navbar/>}
      {children}
    </>
  );
}
