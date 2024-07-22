import { useTranslations } from "next-intl";
import cn from "classnames";

import styles from "./page.module.scss";
import { PRODUCTS } from "@/configs/products";
import { Link } from "@/navigation";

export default function Docs() {
  const t = useTranslations("Products");

  return (
    <div className={styles.page}>
      <ul className={styles.productsGrid}>
        {PRODUCTS.map(({ id, docPath }, index) => {
          return (
            <li key={id} className={styles.productBlock}>
              <Link href={`/docs/${docPath}`}>
                <div className={styles.coverImage}>
                  <div
                    className={cn(
                      styles.icon,
                      styles[`blob${(index % 3) + 1}`],
                    )}
                  ></div>
                </div>
                <h3 className={styles.productTitle}>{t(`${id}.name`)}</h3>
                <p className={styles.productDesc}>{t(`${id}.description`)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
