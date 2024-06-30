import { useTranslations } from "next-intl";
import cn from "classnames";

import styles from "./page.module.scss";
import { PRODUCTS } from "@/configs/products";
import { Link } from "@/navigation";
import BlobIcon from "@/svgs/blob.svg";

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
                  <BlobIcon
                    className={cn(
                      styles.icon,
                      styles[`morph${(index % 3) + 1}`]
                    )}
                  ></BlobIcon>
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
