import styles from "./TechSkill.module.scss";
import { ReactElement } from "react";

interface TechSkillProps {
  skillName: string;
  icon: ReactElement;
}
export default function TechSkill({ skillName, icon }: TechSkillProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.roundedBox}>
        <div className={styles.icon}>{icon}</div>
        {skillName}
      </div>
    </div>
  );
}
