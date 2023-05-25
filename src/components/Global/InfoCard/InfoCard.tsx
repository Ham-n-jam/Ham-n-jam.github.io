import styles from "./InfoCard.module.css";

interface InfoCardProps {
    title: string,
    subTitle: string,
    location: string
}
export default function InfoCard({title, subTitle, location}: InfoCardProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roundedBox}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subTitle}>{subTitle}</div>
                <div className={styles.location}>{location}</div>
            </div>
        </div>
    )
}