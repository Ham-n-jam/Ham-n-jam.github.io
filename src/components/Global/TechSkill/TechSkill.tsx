import styles from "./TechSkill.module.css";
import React, {ReactElement} from "react";

interface TechSkillProps {
    skillName: string,
    icon: ReactElement
}
export default function TechSkill({skillName, icon}: TechSkillProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roundedBox}>
                <div className={styles.icon}>{icon}</div>
                {skillName}
            </div>
        </div>
    )
}