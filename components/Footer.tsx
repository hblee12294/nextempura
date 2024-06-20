import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./Footer.module.scss";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.container}>
      <div>
        {t.rich("craftedBy", {
          a: (chunks: any) => (
            <Link href="https://hongbinli.com" target="_blank">
              {chunks}
            </Link>
          ),
        })}
      </div>
    </footer>
  );
}
