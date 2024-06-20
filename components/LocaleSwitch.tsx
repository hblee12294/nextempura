"use client";

// import { usePathname } from "next/navigation";
import cn from "classnames";

import styles from "./LocaleSwitch.module.scss";
import { LOCALES } from "@/configs/locales";
import { parseLocaleFromPath } from "@/utils";
import { Link, usePathname, useRouter } from "../navigation";

export function LocaleSwitch() {
  // const parsedPath = parseLocaleFromPath(usePathname());
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className={styles.container}>
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          locale={locale}
          href={pathname}
          className={cn(styles.localeLink)}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
