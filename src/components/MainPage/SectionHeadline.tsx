import styles from "./SectionHeadline.module.scss";

interface SectionHeadlineProps {
    id: string,
    title: string
}

export default function SectionHeadline({id, title}: SectionHeadlineProps) {
    return (
        <a id={id}>
            <div className={`${styles.headline}`}>{title}</div>
        </a>
    )
}