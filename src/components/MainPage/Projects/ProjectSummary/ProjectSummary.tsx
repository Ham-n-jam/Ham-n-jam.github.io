import {ReactElement} from "react";
import styles from "./ProjectSummary.module.css";
import ImageGallery from 'react-image-gallery';

interface ProjectSummaryProps {
    title: string,
    release: string,
    description: ReactElement,
    imageNames: string[],
    imageFolder: string,
    isMirrored?: boolean,
    links: ReactElement[]
}

export default function ProjectSummary({title, release, description, imageNames, imageFolder, isMirrored, links}: ProjectSummaryProps) {

    const info = (<div className={styles.paragraph}>
        <h2>
            <div className={styles.titleContainer}>
                {title}
                <div className={styles.subTitle}>{release}</div>
            </div>
        </h2>
        <p className={styles.description}>{description}</p>
        <div>
            {links.map((link, idx) => {
                return (
                    <div key={idx}>
                        {link}
                        <p/>
                    </div>);
            })}
        </div>
    </div>)

    const imageGallery = (<div className={styles.imageGallery}>
        <ImageGallery
            items={imageNames.map((imgName) => (
                {
                    original: `${process.env.PUBLIC_URL + '/images/' + imageFolder + '/' + imgName}`,
                    thumbnail: `${process.env.PUBLIC_URL + '/images/' + imageFolder + '/' + imgName}`
                }
            ))}
            showPlayButton={false}
            showBullets={false}
            showNav={false}
        />
    </div>)

    return (
        <div className={`${styles.pairContainer} ${isMirrored? styles.reverseOrder: ''}`}>
            {[imageGallery, info]}
        </div>
    );
}


