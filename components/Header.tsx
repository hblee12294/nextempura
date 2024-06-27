import { useTranslations } from "next-intl";

import styles from "./Header.module.scss";
import { Nav } from "@/components/Nav";
import { Link } from "@/navigation";
import { NAV_ITEMS } from "@/configs/navs";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          Nextempura
        </Link>
      </div>

      <Nav
        navItems={NAV_ITEMS.map((navItem) => ({
          ...navItem,
          name: t(navItem.id),
        }))}
      ></Nav>
    </header>
  );
}
