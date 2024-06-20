"use client";

import { usePathname as useFullPathname } from "next/navigation";
import cn from "classnames";

import styles from "./LocaleSwitch.module.scss";
import { LOCALES } from "@/configs/locales";
import { parseLocaleFromPath } from "@/utils";
import { Link } from "@/navigation";

export function LocaleSwitch() {
  const parsedPath = parseLocaleFromPath(useFullPathname());
  const currentLocale = parsedPath.locale;
  const pathname = parsedPath.pathname;

  return (
    <div className={styles.container}>
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          locale={locale}
          href={pathname}
          className={cn(styles.localeLink, {
            [styles.localeLinkActive]: locale === currentLocale,
          })}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
