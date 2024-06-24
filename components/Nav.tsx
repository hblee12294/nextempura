import { useTranslations } from "next-intl";

import styles from "./Nav.module.scss";
import { Link } from "@/navigation";
import { NAVS } from "@/configs/navs";

export function Nav() {
  const t = useTranslations("Header");

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {NAVS.map(({ id, path }) => (
          <Link key={id} href={path} className={styles.navLink}>
            {t(id)}
          </Link>
        ))}
      </nav>
    </div>
  );
}
