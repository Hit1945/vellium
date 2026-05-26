import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.get("sb-access-token") || request.cookies.get("sb-refresh-token");
  if (request.nextUrl.pathname.startsWith("/app") && !hasSession) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/app/:path*"] };
