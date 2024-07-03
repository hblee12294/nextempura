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
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{t("title")}</h1>
        </div>

        <div className={styles.introSection}>
          <p className={styles.intro}>{t("intro")}</p>
        </div>

        <div className={styles.useSection}>
          <p className={styles.use}>{t("use")}</p>
        </div>
      </main>
    </div>
  );
}
