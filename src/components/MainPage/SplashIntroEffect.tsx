import { useEffect, useState } from "react";
import styles from "./SplashIntroEffect.module.scss";
import StarIcon1 from "../Icons/StarIcon1";
import StarIcon2 from "../Icons/StarIcon2";
import StarIcon3 from "../Icons/StarIcon3";

export default function SplashIntroEffect() {
  const [style, setStyle] = useState({});
  document.documentElement.style.setProperty(
    "--ab-webkit-scrollbar-track-bg-color",
    "#222"
  );

  useEffect(() => {
    setTimeout(function () {
      setStyle({ display: "none" });
      document.documentElement.style.removeProperty(
        "--ab-webkit-scrollbar-track-bg-color"
      );
    }, 3500);
  }, []);

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
          <div className={styles.starContainer}>
            <StarIcon2 />
            <StarIcon2 />
            <StarIcon1 />
            <StarIcon2 />
            <StarIcon2 />
            <StarIcon2 />
          </div>
          <h1 className={`${styles.headerText} ${styles.headerLarge}`}>BELL</h1>
          <h2 className={styles.subheader}>OCCUPATION:</h2>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Software Engineer.</h1>
          <div className={styles.starContainerRight}>
            <StarIcon2 />
            <StarIcon2 />
            <StarIcon3 />
            <StarIcon1 />
          </div>
        </div>
      </div>
    </div>
  );
}
