import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function About() {
  const t = useTranslations("Header");

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
