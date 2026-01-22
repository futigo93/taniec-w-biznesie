import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VARIANT_COOKIE = "ebook_variant";
const VARIANTS = ["/ebook1", "/ebook2", "/ebook3"];
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function pickVariant() {
  const index = Math.floor(Math.random() * VARIANTS.length);
  return VARIANTS[index];
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname !== "/ebook" && pathname !== "/ebook/") {
    return NextResponse.next();
  }

  const existing = request.cookies.get(VARIANT_COOKIE)?.value;
  const valid = VARIANTS.find((variant) => variant === `/${existing}`);
  const target = valid ?? pickVariant();
  const response = NextResponse.redirect(new URL(`${target}${search}`, request.url));

  if (!valid) {
    response.cookies.set(VARIANT_COOKIE, target.slice(1), {
      maxAge: MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/ebook", "/ebook/"],
};
