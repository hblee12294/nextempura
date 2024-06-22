import { useTranslations } from "next-intl";

import styles from "./Header.module.scss";
import { Nav } from "./Nav";
import { Link } from "@/navigation";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Nextempura</Link>
      </div>

      <Nav></Nav>
    </header>
  );
}
