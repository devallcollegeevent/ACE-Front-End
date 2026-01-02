"use client";

import { usePathname } from "next/navigation";
import Navbar from "./global/Navbar/Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

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
