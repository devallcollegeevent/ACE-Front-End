import { NextResponse } from "next/server";

const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handler(req) {
  try {
    const { pathname, search } = req.nextUrl;

    // remove "/api/proxy" from path
    const backendPath = pathname.replace("/api/proxy", "");

    // FINAL BACKEND URL (with query params)
    const backendUrl = `${BACKEND_BASE_URL}${backendPath}${search}`;

    /* ================= FORWARD HEADERS ================= */
    const headers = new Headers(req.headers);

    // Remove host & length related headers (fetch safety)
    headers.delete("host");
    headers.delete("content-length");

    /* ================= BODY ================= */
    let body = null;
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = await req.arrayBuffer();
    }

    /* ================= BACKEND FETCH ================= */
    const backendRes = await fetch(backendUrl, {
      method: req.method,
      headers,
      body,
      credentials: "include", // 🔐 VERY IMPORTANT
      cache: "no-store",
    });

    /* ================= RESPONSE HEADERS ================= */
    const responseHeaders = new Headers();

    // 🔥 FORWARD ALL SET-COOKIE HEADERS
    backendRes.headers.forEach((value, key) => {
      if (key.toLowerCase() === "set-cookie") {
        responseHeaders.append("set-cookie", value);
      }
    });

    // Forward content-type
    const contentType = backendRes.headers.get("content-type");
    if (contentType) {
      responseHeaders.set("content-type", contentType);
    }

    /* ================= RESPONSE BODY ================= */
    const responseBody = await backendRes.arrayBuffer();

    return new NextResponse(responseBody, {
      status: backendRes.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("PROXY ERROR:", error);
    return NextResponse.json(
      {
        message: "Backend not responding",
        error: error.message,
      },
      { status: 503 },
    );
  }
}

/* ================= EXPORT METHODS ================= */
export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
