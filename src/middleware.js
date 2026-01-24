import { NextResponse } from "next/server";

/* ===============================
   ROUTE CONFIG
================================ */

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/terms-and-conditions",
  "/events",
  "/explore-events",
  "/explore-categories",
  "/organization-details",
  "/auth",
  "/unauthorized",
];

const PROTECTED_ROUTES = [
  "/dashboard",
  "/profile",
  "/settings",
  "/space",
];

const CONSENT_REQUIRED_ROUTES = [
  "/",
  "/events",
  "/explore-events",
  "/explore-categories",
  "/organization-details",
];

/* ===============================
   MIDDLEWARE
================================ */

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore assets & internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(png|jpg|jpeg|svg|css|js|ico)$/)
  ) {
    return NextResponse.next();
  }

  // ✅ CORRECT COOKIE NAME
  const token = request.cookies.get("authToken")?.value;
  const consent = request.cookies.get("user_consent")?.value;

  // Protected routes
  if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }
    return NextResponse.next();
  }

  // Consent routes
  if (
    CONSENT_REQUIRED_ROUTES.some((route) => pathname.startsWith(route)) &&
    !consent
  ) {
    return NextResponse.next();
  }

  // Public routes
  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Fallback
  return NextResponse.rewrite(
    new URL("/not-found", request.url)
  );
}

export const config = {
  matcher: ["/:path*"],
};
