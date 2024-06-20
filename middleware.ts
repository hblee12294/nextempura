import createMiddleware from "next-intl/middleware";

import { LOCALES, DEFAULT_LOCALE } from "@/configs/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // Don't use a prefix for the default locale
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
