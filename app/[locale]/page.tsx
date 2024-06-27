import { useTranslations } from "next-intl";

import styles from "./page.module.scss";
import { Banner } from "@/components/Banner";

export default function Home() {
  const t = useTranslations("Header");

  return (
    <main className={styles.page}>
      <div className={styles.banner}>
        <Banner></Banner>
      </div>
    </main>
  );
}
