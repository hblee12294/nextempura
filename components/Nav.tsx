import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./Nav.module.scss";
import { LocaleSwitch } from "./LocaleSwitch";

export function Nav() {
  const t = useTranslations("Header");

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="contact">{t("contact")}</Link>
      </nav>

      <div className={styles.locale}>
        <LocaleSwitch></LocaleSwitch>
      </div>
    </div>
  );
}
