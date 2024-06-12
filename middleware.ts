import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "zh"],

  // Used when no locale matches
  defaultLocale: "en",

  // Don't use a prefix for the default locale
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
