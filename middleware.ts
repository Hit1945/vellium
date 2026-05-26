import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest){
  if (request.nextUrl.pathname.startsWith("/app") && !request.cookies.get("sb-access-token")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/app/:path*"] };
