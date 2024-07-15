import { useTranslations } from "next-intl";

import styles from "./Header.module.scss";
import { Nav } from "@/components/Nav";
import { IconButton } from "@/components/IconButton";
import { Link } from "@/navigation";
import { NAV_ITEMS } from "@/configs/navs";
import IconGitHub from "@/svgs/github.svg";

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

      <div className={styles.links}>
        <IconButton>
          <IconGitHub className={styles.icon}></IconGitHub>
        </IconButton>
      </div>
    </header>
  );
}
