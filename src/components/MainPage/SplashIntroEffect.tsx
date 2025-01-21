import { useEffect, useState } from "react";
import styles from "./SplashIntroEffect.module.scss";
import StarIcon from "../Icons/StarIcon1";

export default function SplashIntroEffect() {
  const [style, setStyle] = useState({});

  // useEffect(() => {
  //   setTimeout(function () {
  //     setStyle({ display: "none" });
  //   }, 2500);
  // }, []);

  return (
    <div className={styles.screen} style={style}>
      <div className={styles.textWrapper}>
        <div>
          <h1 className={`${styles.headerText} ${styles.headerSmall}`}>
            ALEXANDER
          </h1>
          <h1 className={`${styles.headerText} ${styles.headerSmall}`}>
            HENRY
          </h1>
          <h1 className={`${styles.headerText} ${styles.headerLarge}`}>BELL</h1>
          <h2 className={styles.subheader}>OCCUPATION:</h2>
          <div className={styles.starContainerLeft}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Software Engineer.</h1>
        </div>
      </div>
    </div>
  );
}
