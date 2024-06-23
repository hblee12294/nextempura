import { useTranslations } from "next-intl";

import styles from "./page.module.scss";
import { Banner } from "@/components";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner></Banner>
      </div>
    </main>
  );
}
