import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <main className={styles.main}>
      <div></div>
    </main>
  );
}
