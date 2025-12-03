import { getTranslations } from "next-intl/server";
import cn from "classnames";

import styles from "./page.module.scss";
import { getProducts } from "@/configs/products";
import { Link } from "@/navigation";

export default async function Docs({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const products = await getProducts(locale);
  const t = await getTranslations("Products");

  return (
    <div className={styles.page}>
      <ul className={styles.productsGrid}>
        {products.map(({ id, docPath }, index) => {
          return (
            <li key={id} className={styles.productBlock}>
              <Link href={`/docs/${docPath}`}>
                <div className={styles.coverImage}>
                  <div
                    className={cn(
                      styles.icon,
                      styles[`blob${(index % 6) + 1}`],
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
