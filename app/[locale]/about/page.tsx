import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function About() {
  const t = useTranslations("Header");

  return <main className={styles.page}></main>;
}
