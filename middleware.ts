import { NextResponse, type NextRequest } from "next/server";

// French is served without a prefix (/services), English under /en (/en/services).
// Internally every page lives under app/[lang], so French URLs are rewritten to /fr/...
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.endsWith("/opengraph-image")) return NextResponse.next();

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/fr${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*|icon|apple-icon|sitemap.xml|robots.txt).*)"],
};
