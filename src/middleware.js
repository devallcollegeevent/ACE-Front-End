import { NextResponse } from "next/server";

/* ================= CONFIG ================= */

const BLOCKED_USER_AGENTS = [
  "curl",
  "wget",
  "python",
  "scrapy",
  "postman",
  "httpclient",
];

const SENSITIVE_PATHS = [
  "/.env",
  "/.git",
  "/.next",
  "/config",
  "/server",
  "/api/admin",
];

const PROTECTED_ROUTES = ["/dashboard", "/profile", "/settings", "/space"];

const BLOCK_DIRECT_ACCESS_ROUTES = ["/events", "/organization-details"];

/* ================= HELPERS ================= */

function getToken(req) {
  return req.cookies.get("token")?.value || null;
}

function isPathSafe(pathname) {
  return (
    !pathname.includes("..") &&
    !pathname.includes("//") &&
    !pathname.includes("%2e")
  );
}

/* ================= MIDDLEWARE ================= */

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = getToken(req);
  const userAgent = req.headers.get("user-agent")?.toLowerCase() || "";
  const secFetchMode = req.headers.get("sec-fetch-mode");

  console.log("Middleware:", pathname);

  /* BLOCK SENSITIVE PATHS */
  if (SENSITIVE_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /*  SANITIZE PATH */
  if (!isPathSafe(pathname)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /*  BLOCK BOTS */
  if (BLOCKED_USER_AGENTS.some((ua) => userAgent.includes(ua))) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  /*  AUTH PROTECTED ROUTES */
  if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/auth/user/login", req.url));
  }

  /*  BLOCK MANUAL URL TYPING ONLY */
  if (BLOCK_DIRECT_ACCESS_ROUTES.some((route) => pathname.startsWith(route))) {
    // browser address bar typing = navigate
    if (secFetchMode === "navigate") {
      return NextResponse.rewrite(new URL("/not-found", req.url));
    }
  }

  return NextResponse.next();
}

/* ================= MATCHER ================= check testing*/

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|fonts).*)"],
};
