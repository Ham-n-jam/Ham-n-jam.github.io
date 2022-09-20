import React from "react";
import styles from "./ProjectSummary.module.css";
import ImageGallery from 'react-image-gallery';

export default function ProjectSummary({title, subTitle, description, galleryImages, isMirrored, links}) {

    const info = (<div className={styles.paragraph}>
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
        <p>{description}</p>
        <div className={styles.flexRow}>
            {links.map((link) => {
                return (<>
                        {link}
                        <p/>
                    </>);
            })}
        </div>
    </div>)

    const imageGallery = (<div className={styles.imageGallery}>
        <ImageGallery
            items={galleryImages}
            showPlayButton={false}
            showBullets={false}
            showNav={false}
        />
    </div>)

    return (
        <div className={`${styles.content} ${styles.pairContainer}`}>
            {isMirrored ? [info, imageGallery] : [imageGallery, info]}
        </div>
    );
}


