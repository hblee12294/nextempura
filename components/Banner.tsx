import styles from "./Banner.module.scss";

import { Gradient } from "@/effects";

export function Banner() {
  return (
    <div className={styles.container}>
      <Gradient></Gradient>

      <div className={styles.credit}>
        <a
          href="https://codepen.io/cjgammon/pen/WNZxOOx"
          target="_blank"
          rel="noreferrer"
        >
          @cjgammon
        </a>
      </div>
    </div>
  );
}
