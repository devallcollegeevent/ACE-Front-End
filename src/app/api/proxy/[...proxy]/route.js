import { NextResponse } from "next/server";

// Backend base URL
const BACKEND_BASE_URL =
  "https://backend-allcollegeevent-version-1.onrender.com/api";

// Generic proxy handler: forwards requests to backend, preserves auth & cookies
async function handler(req) {
  try {
    // build backend URL from incoming path
    const pathname = req.nextUrl.pathname;
    const backendPath = pathname.replace("/api/proxy", "");
    const backendUrl = BACKEND_BASE_URL + backendPath;

    // default headers
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    // forward auth header if present
    const auth = req.headers.get("authorization");
    if (auth) headers.set("authorization", auth);

    // include body for non-GET/HEAD requests
    const body =
      req.method === "GET" || req.method === "HEAD"
        ? null
        : await req.text();

    // call backend (credentials included to allow cookies)
    const backendRes = await fetch(backendUrl, {
      method: req.method,
      headers,
      body,
      credentials: "include", // required for Set-Cookie
      cache: "no-store",
    });

    /* COPY ALL HEADERS */
    const responseHeaders = new Headers();

    // forward Set-Cookie (append supports multiple cookies)
    const setCookie = backendRes.headers.get("set-cookie");
    if (setCookie) {
      responseHeaders.append("set-cookie", setCookie);
    }

    // preserve content type
    const contentType =
      backendRes.headers.get("content-type") || "application/json";
    responseHeaders.set("Content-Type", contentType);

    const text = await backendRes.text();

    // return backend response unchanged (status + body)
    return new NextResponse(text, {
      status: backendRes.status,
      headers: responseHeaders,
    });
  } catch (error) {
    // minimal error response
    console.error("PROXY ERROR:", error);
    return NextResponse.json(
      {
        message: "Backend not responding",
        error: error.message,
      },
      { status: 503 }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
