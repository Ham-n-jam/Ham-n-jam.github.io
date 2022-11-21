import styles from "./MainPage.module.css";
import React from "react";

export default function SectionHeadline({id, title}) {
    return (
        <a id={id}>
            <div className={styles.whiteSeparator}>{title}</div>
        </a>
    )
}