import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Allow localhost/dev
  if (
    host.includes("localhost") ||
    host.includes("127.0.0.1")
  ) {
    return NextResponse.next();
  }

  // Redirect non-www -> www
  if (!host.startsWith("www.")) {
    const url = request.nextUrl.clone();

    url.hostname = `www.${url.hostname}`;

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};