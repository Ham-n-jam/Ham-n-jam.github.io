import styles from "./InfoCard.module.css";
import React, {ReactElement} from "react";

interface InfoCardProps {
    skillName: string,
    icon: ReactElement
}
export default function InfoCard({skillName, icon}: InfoCardProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roundedBox}>
                <div className={styles.icon}>{icon}</div>
                {skillName}
            </div>
        </div>
    )
}