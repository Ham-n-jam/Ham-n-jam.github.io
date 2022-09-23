import React, {useEffect, useState} from "react";
import styles from "./TvScreenTurnOnEffect.module.css";

export default function TvScreenTurnOnEffect() {
    const [style, setStyle] = useState({});

    useEffect(() => {
        setTimeout(function () {
            setStyle({ display: 'none' });
        }, 1010);
    }, []);

    return (
        <div
            className={styles.screen}
            style={style}
        >
            <div className={styles.inner}>
                <h2 className={styles.text}>Alex Bell</h2>
                <div className={styles.lineSeparator}/>
                <h6 className={styles.text}>Software Engineer</h6>
            </div>
        </div>);
}