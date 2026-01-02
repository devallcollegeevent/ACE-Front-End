import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;
  const role = req.cookies.get("role")?.value;

  // ----------------------------------
  // PUBLIC ROUTES (NO AUTH REQUIRED)
  // ----------------------------------
  const publicRoutes = [
    "/",
    "/home",
    "/auth",
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/enter-code",
    "/auth/reset-password",
    "/auth/success",
    "/auth/email-verify",
  ];

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // ----------------------------------
  // BLOCK UNAUTHENTICATED USERS
  // ----------------------------------
  if (!token) {
    // Organizer area
    if (pathname.startsWith("/organization")) {
      return NextResponse.redirect(
        new URL("/auth/organization/login", req.url)
      );
    }

    // User area
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/events")) {
      return NextResponse.redirect(
        new URL("/auth/user/login", req.url)
      );
    }
  }

  // ----------------------------------
  // ROLE-BASED PROTECTION
  // ----------------------------------

  // Organizer trying to access user pages
  if (role === "organizer" && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(
      new URL("/organization/event-management/my-events", req.url)
    );
  }

  // User trying to access organizer pages
  if (role === "user" && pathname.startsWith("/organization")) {
    return NextResponse.redirect(
      new URL("/events/listing", req.url)
    );
  }

  return NextResponse.next();
}

// ----------------------------------
// MATCH ROUTES
// ----------------------------------
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/organization/:path*",
    "/events/:path*",
    "/auth/:path*",
  ],
};
