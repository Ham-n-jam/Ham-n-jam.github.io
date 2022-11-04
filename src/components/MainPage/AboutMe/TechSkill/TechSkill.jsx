import styles from "./TechSkill.module.css";
import React from "react";

export default function TechSkill({skillName, icon}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roundedBox}>
                <div className={styles.icon}>{icon}</div>
                {skillName}
            </div>
        </div>
    )
}