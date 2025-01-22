import styles from "./SplashIntroEffect.module.scss";
import StarIcon1 from "../Icons/StarIcon1";
import StarIcon2 from "../Icons/StarIcon2";
import StarIcon3 from "../Icons/StarIcon3";

export default function SplashIntroEffect() {
  return (
    <div id="splash-intro-fx" className={styles.screen}>
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
