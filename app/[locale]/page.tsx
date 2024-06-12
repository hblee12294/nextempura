import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>Nextempura</div>

        <nav className={styles.nav}>
          <Link href="contact">{t("contact")}</Link>
        </nav>
      </header>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
