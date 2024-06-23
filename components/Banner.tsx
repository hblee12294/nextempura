import styles from "./Banner.module.scss";

import { Gradient } from "@/effects";

export function Banner() {
  return (
    <div className={styles.container}>
      <Gradient></Gradient>
    </div>
  );
}
