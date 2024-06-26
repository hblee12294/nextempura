import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function Docs() {
  const t = useTranslations("Header");

  return <div className={styles.page}>Default Docs</div>;
}
