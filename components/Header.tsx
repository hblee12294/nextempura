import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./Header.module.scss";
import { Nav } from "./Nav";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className={styles.container}>
      <div className={styles.logo}>Nextempura</div>

      <Nav></Nav>
    </header>
  );
}
