import { NextResponse } from "next/server";

/* =====================================================
   CONFIG
===================================================== */

// Suspicious user agents
const BLOCKED_USER_AGENTS = [
  "curl",
  "wget",
  "python",
  "scrapy",
  "postman",
  "httpclient",
];

// Sensitive paths / files
const SENSITIVE_PATHS = [
  "/.env",
  "/.git",
  "/.next",
  "/config",
  "/server",
  "/api/admin",
];

// Auth-protected routes
const PROTECTED_ROUTES = [
  "/dashboard",
  "/profile",
  "/settings",
  "/space",
];

// Routes that SHOULD NOT open by typing URL
// (only internal navigation allowed)
const BLOCK_DIRECT_ACCESS_ROUTES = [
  "/events",
  "/organization-details",
];

/* =====================================================
   HELPERS
===================================================== */

// Get client IP
function getClientIP(req) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.ip ||
    "unknown"
  );
}

//Get auth token
function getToken(req) {
  return (
    req.cookies.get("token")?.value ||
    req.headers.get("authorization") ||
    null
  );
}

//Path sanitization
function isPathSafe(pathname) {
  return (
    !pathname.includes("..") &&
    !pathname.includes("//") &&
    !pathname.includes("%2e")
  );
}

// Rate limit placeholder (EDGE SAFE)
function rateLimitCheck(ip) {
  // Real rate limit must be backend / Redis
  return true;
}

/* =====================================================
   MIDDLEWARE
===================================================== */

export function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  const ip = getClientIP(req);
  const token = getToken(req);
  const userAgent = req.headers.get("user-agent")?.toLowerCase() || "";
  const referer = req.headers.get("referer");

  console.log("🔥 Middleware hit:", pathname);

  /* ===== BLOCK SENSITIVE FILES ===== */
  if (SENSITIVE_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /* ===== PATH SANITIZATION ===== */
  if (!isPathSafe(pathname)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /* ===== BLOCK SUSPICIOUS USER AGENTS ===== */
  if (BLOCKED_USER_AGENTS.some((ua) => userAgent.includes(ua))) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /* ===== RATE LIMIT CHECK ===== */
  if (!rateLimitCheck(ip)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /* ===== AUTH VALIDATION ===== */
  if (
    PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/auth/user/login", req.url)
    );
  }

  /* =====  PREVENT DIRECT URL ACCESS ===== */
  if (
    BLOCK_DIRECT_ACCESS_ROUTES.some((route) =>
      pathname.startsWith(route)
    )
  ) {
    // Direct typing / refresh / new tab
    if (!referer || !referer.startsWith(origin)) {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }
  }

  /* ===== DEFAULT ALLOW ===== */
  return NextResponse.next();
}

/* =====================================================
   MATCHER
===================================================== */

export const config = {
  matcher: [
    /*
      Apply middleware to everything except:
      - Next.js static files
      - Images
      - Fonts
      - favicon
    */
    "/((?!_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
};
