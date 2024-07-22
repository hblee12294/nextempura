import styles from "./page.module.scss";
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.banner}>
        <Banner></Banner>
      </div>
    </main>
  );
}
