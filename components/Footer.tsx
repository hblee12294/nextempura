import Link from "next/link";
import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import pick from "lodash/pick";

import styles from "./Footer.module.scss";

export function Footer() {
  const messages = useMessages();

  const t = useTranslations("Footer");

  return (
    <footer className={styles.container}>
      <div className={styles.credit}>
        {t.rich("craftedBy", {
          a: (chunks: any) => (
            <Link
              href="https://hongbinli.com"
              target="_blank"
              className={styles.authorLink}
            >
              {chunks}
            </Link>
          ),
        })}
      </div>

      <div className={styles.locale}>
        <NextIntlClientProvider messages={pick(messages, "Locale")}>
          <LocaleSwitch></LocaleSwitch>
        </NextIntlClientProvider>
      </div>
    </footer>
  );
}
