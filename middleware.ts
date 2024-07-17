import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { LOCALES, DEFAULT_LOCALE, LOCALE_PREFIX } from "@/configs/locales";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // Don't use a prefix for the default locale
  localePrefix: LOCALE_PREFIX,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Detect if pathname contains encoded backslash
  const maliciousURL = new RegExp(/(%5C|%5c)/i).test(pathname);
  if (maliciousURL) return;

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(en|zh)/:path*`, "/((?!api|_next|_vercel|.*\\..*).*)"],
};
