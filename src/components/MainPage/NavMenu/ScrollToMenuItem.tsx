import React from "react";
import styles from "./ScrollToMenuItem.module.scss";

interface ScrollToMenuItemProps {
    href: string,
    text: string
}

export default function ScrollToMenuItem({ href, text }: ScrollToMenuItemProps) {

    return (
        <a className={styles.a} href={href}>
            <div className={styles.wrapper}>
                {text}
            </div>
            <div className={styles.lineSeparator} />
        </a>
    );
}