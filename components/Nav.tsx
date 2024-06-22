import { useTranslations } from "next-intl";

import styles from "./Nav.module.scss";
import { Link } from "@/navigation";

export function Nav() {
  const t = useTranslations("Header");

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/about">{t("about")}</Link>
      </nav>
    </div>
  );
}
