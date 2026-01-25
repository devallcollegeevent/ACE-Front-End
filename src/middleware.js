import { NextResponse } from "next/server";

/* ===============================
   ROUTES
================================ */

const PUBLIC_EXACT = ["/", "/unauthorized"];

const PUBLIC_PREFIX = [
  "/about",
  "/contact",
  "/faq",
  "/terms-and-conditions",
  "/events",
  "/explore-events",
  "/explore-categories",
  "/organization-details",
  "/auth",
];

const PROTECTED_PREFIX = ["/dashboard", "/profile", "/settings", "/space"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  /* --------------------------------
     Ignore assets
  --------------------------------- */
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.match(/\.(png|jpg|jpeg|svg|css|js|ico)$/)
  ) {
    return NextResponse.next();
  }

  /* --------------------------------
     Always allow unauthorized page
  --------------------------------- */
  if (pathname === "/unauthorized") {
    return NextResponse.next();
  }

  /* --------------------------------
     Read cookie (MATCH BACKEND)
  --------------------------------- */
  // src/middleware.js

  const token = request.cookies.get("authToken")?.value; 

  /* --------------------------------
     Exact public
  --------------------------------- */
  if (PUBLIC_EXACT.includes(pathname)) {
    return NextResponse.next();
  }

  /* --------------------------------
     Public prefixes
  --------------------------------- */
  if (PUBLIC_PREFIX.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  /* --------------------------------
     Protected routes
  --------------------------------- */
  if (PROTECTED_PREFIX.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
