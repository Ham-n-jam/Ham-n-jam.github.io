import React from "react";
import styles from "./ScrollToMenuItem.module.css";

export default function ScrollToMenuItem({ href, text }) {

    return (
        <a className={styles.a} href={href}>
            <div className={styles.wrapper}>
                {"• " + text}
            </div>
            <div className={styles.lineSeparator} />
        </a>
    );
}