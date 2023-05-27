import {useEffect, useState} from "react";
import styles from "./SplashIntroEffect.module.css";

export default function SplashIntroEffect() {
    const [style, setStyle] = useState({});

    useEffect(() => {
        setTimeout(function () {
            setStyle({ display: 'none' });
        }, 2000);
    }, []);

    return (
        <div
            className={styles.screen}
            style={style}
        >
            <div className={styles.inner}>
                <h2 className={styles.text}>Alex Bell</h2>
                <h6 className={styles.subheader}>Software Engineer</h6>
            </div>
        </div>);
}