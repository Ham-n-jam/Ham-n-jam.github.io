import { ReactElement, useEffect, useRef } from "react";
import styles from "./ProjectSummary.module.scss";
import ImageGallery from "react-image-gallery";

interface ProjectSummaryProps {
  title: string;
  release: string;
  description: ReactElement;
  imageNames: string[];
  imageFolder: string;
  isMirrored?: boolean;
  links: ReactElement[];
  themeClassname?: string;
}

export default function ProjectSummary({
  title,
  release,
  description,
  imageNames,
  imageFolder,
  isMirrored,
  links,
  themeClassname,
}: ProjectSummaryProps) {
  const info = (
    <div className={styles.paragraph}>
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
              <p />
            </div>
          );
        })}
      </div>
    </div>
  );

  const imageGallery = (
    <div className={styles.imageGallery}>
      <ImageGallery
        items={imageNames.map((imgName) => ({
          original: `${
            process.env.PUBLIC_URL + "/images/" + imageFolder + "/" + imgName
          }`,
          thumbnail: `${
            process.env.PUBLIC_URL + "/images/" + imageFolder + "/" + imgName
          }`,
        }))}
        showPlayButton={false}
        showBullets={false}
        showNav={false}
      />
    </div>
  );

  const containerRef = useRef(null);

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    if (!containerRefCurrent) {
      return;
    }
    const onIntersection = () => {
      document.body.className = themeClassname ?? "";
    };
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    const observer = new IntersectionObserver(onIntersection, options);
    observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, themeClassname]);

  return (
    <div
      className={`${styles.pairContainer} ${
        isMirrored ? styles.reverseOrder : ""
      }`}
      ref={containerRef}
    >
      {[imageGallery, info]}
    </div>
  );
}
