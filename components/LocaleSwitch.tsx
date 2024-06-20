"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

import styles from "./LocaleSwitch.module.scss";
import { LOCALES } from "@/configs/locales";
import { parseLocaleFromPath } from "@/utils";

export function LocaleSwitch() {
  const parsedPath = parseLocaleFromPath(usePathname());

  return (
    <div className={styles.container}>
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${parsedPath.pathname}`}
          className={cn(styles.localeLink)}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
