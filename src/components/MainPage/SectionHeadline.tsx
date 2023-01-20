import styles from "./SectionHeadline.module.css";
import React from "react";

interface SectionHeadlineProps {
    id: string,
    title: string
}

export default function SectionHeadline({id, title}: SectionHeadlineProps) {
    let bgText = '';
    for(let i=0; i<120; i++) {
        bgText += title;
    }

    return (
            <a id={id}>
                <div id="Slogan" className={styles.bgText}>{bgText}</div>
                <div className={`${styles.content} ${styles.whiteSeparator}`}>{title}</div>
            </a>
    )
}