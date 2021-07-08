import React from "react";
import styles from "./MainPage.module.css";
import Button from "../global/Button";

export default function MainPage() {

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
            <div className={`${styles.content} ${styles.right} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blurredIdeBg.jpg'})`
                 }}
            >
                <h2>Tetrus</h2>
                <p>The classic block-stacker game with a twist.</p>
                <p>Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!</p>
                <p>This project was created using Godot Engine and Aseprite for sprite art.</p>
                <div className={styles.flexRow} >
                    <Button text={"Play Tetrus"} color={"gold"} />
                    <div className={styles.verticalSpacer} />
                    <Button text={"View GitHub repo"} color={"white"} />
                </div>

            </div>
        </div>
    );
}