import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// SEO fix: enforce one canonical host so non-www pages permanently consolidate to www.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isWww = host.startsWith("www.");
  const isLocal =
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    host.includes("[::1]") ||
    host.includes("10.203.151.29");

  if (!isWww && !isLocal) {
    const wwwUrl = new URL(request.url);
    wwwUrl.host = `www.${host}`;
    return NextResponse.redirect(wwwUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
