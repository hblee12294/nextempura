"use client";

import styles from "./Nav.module.scss";
import { Link, usePathname } from "@/navigation";
import { NavItemWithName } from "@/configs/navs";
import cn from "classnames";

interface NavProps {
  navItems: NavItemWithName[];
}

export function Nav({ navItems }: NavProps) {
  const pathname = usePathname();

  const navID = pathname.split("/")[1];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {navItems.map(({ id, path, name }) => (
          <Link
            key={id}
            href={path}
            className={cn(styles.navLink, {
              [styles.active]: navID === id,
            })}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
