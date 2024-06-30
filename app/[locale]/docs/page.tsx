import { useTranslations } from "next-intl";

import styles from "./page.module.scss";
import { PRODUCTS } from "@/configs/products";
import { Link } from "@/navigation";

export default function Docs() {
  const t = useTranslations("Products");

  return (
    <div className={styles.page}>
      <ul className={styles.productsGrid}>
        {PRODUCTS.map(({ id, docPath }) => (
          <li key={id} className={styles.productBlock}>
            <Link href={`/docs/${docPath}`}>
              <div className={styles.coverImage}></div>
              <h3>{t(`${id}.name`)}</h3>
              <p>{t(`${id}.description`)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
