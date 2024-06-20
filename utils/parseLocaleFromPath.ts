import { LOCALES, DEFAULT_LOCALE } from "@/configs/locales";

type ParsedPath = {
  locale: string;
  pathname: string;
};

export function parseLocaleFromPath(path: string): ParsedPath {
  const segments = path.split("/");

  const potentialLocale = segments[1];
  if (LOCALES.includes(potentialLocale)) {
    return {
      locale: potentialLocale,
      pathname: "/" + segments.slice(2).join("/"),
    };
  } else {
    return {
      locale: DEFAULT_LOCALE,
      pathname: path,
    };
  }
}
