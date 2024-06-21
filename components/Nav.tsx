import Link from "next/link";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";

import styles from "./Nav.module.scss";
import { LocaleSwitch } from "./LocaleSwitch";

export function Nav() {
  const t = useTranslations("Header");
  const messages = useMessages();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="contact">{t("contact")}</Link>
      </nav>

      <div className={styles.locale}>
        <NextIntlClientProvider messages={pick(messages, "Locale")}>
          <LocaleSwitch></LocaleSwitch>
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
