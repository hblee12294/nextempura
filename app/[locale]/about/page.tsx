import { ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className={styles.page}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>

      <main className={styles.content}>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>{t("title")}</h1>
        </section>

        <section className={styles.introSection}>
          <p className={styles.intro}>{t("intro")}</p>
        </section>

        <section className={styles.useSection}>
          <p className={styles.use}>{t("use")}</p>
        </section>

        <section className={styles.endingSection}>
          <p className={styles.ending}>
            {t.rich("ending", {
              a: (chunks: ReactNode) => (
                <Link href="mailto:hblee12294@gmail.com">{chunks}</Link>
              ),
            })}
          </p>
        </section>
      </main>
    </div>
  );
}
