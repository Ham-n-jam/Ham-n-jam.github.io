import React from "react";
import styles from "./MainPage.module.css";
import Button from "../global/Button";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default function MainPage() {

    const tetrusImages = [
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrusGameplay.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrusGameplay.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrusMenu.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrusMenu.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrusGameOver.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrusGameOver.png'}`,
        },
    ];

    return (
        <div className={styles.body}>
            <div className={styles.spacer} />
            <div className={styles.whiteSeparator} >
                <div className={styles.separatorSpanText}>About Me</div>
            </div>
            <div className={`${styles.content} ${styles.left} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blurredWorkspaceBg.jpg'})`
                }}
            >

                <h2>Final Year Software Engineering Student</h2>
                <p> Hi! I'm Alex, a dedicated and motivated software engineering
                    student, passionate about software development and design. I'm looking
                    to bring new and innovative ideas to the table that can
                    improve company products.
                </p>
                <table className={styles.table}>
                    <tbody>
                    <tr className={styles.tr}>
                        <th>Key Technical Skills</th>
                        <td>
                            Java,
                            JS, Typescript, React, Git,
                            PostgreSQL, MySQL, CSS, HTML, Kotlin, GDScript, C, MatLab.
                            <p />
                            Experience with Adobe
                            Photoshop and Illustrator.
                        </td>
                    </tr>

                    <div className={styles.lineSeparator} />

                    <tr className={styles.tr}>
                        <th>Employment History</th>
                        <td>
                            Pipers Patent Attorneys - Database Engineer Intern
                            <p />
                            Motion Design - Junior Software Developer
                        </td>
                    </tr>

                    <div className={styles.lineSeparator} />

                    <tr className={styles.tr}>
                        <th>Education</th>
                        <td>University of Auckland, Auckland Grammar School</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.whiteSeparator} >
                <div className={styles.separatorSpanText}>Personal Projects</div>
            </div>
            <div className={`${styles.content} ${styles.right} ${styles.flexRow} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/tetrusLogo.jpg'})`
                 }}
            >
                <div className={styles.imageGallery}>
                    <ImageGallery
                        items={tetrusImages}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                    />
                </div>

                <div>
                    <h2>Tetrus</h2>
                    <p>The classic block-stacker game with a twist.</p>
                    <p>Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!</p>
                    <p>This project was created using Godot Engine and Aseprite for sprite art.</p>
                    <div className={styles.flexRow} >
                        <Button text={"Play Tetrus"} color={"gold"} />
                        <div className={styles.verticalSpacer} />
                        <a className={styles.whiteLink} href={"https://github.com/Ham-n-jam/tetrus-game"}>View GitHub repo</a>
                    </div>
                </div>

            </div>
        </div>
    );
}