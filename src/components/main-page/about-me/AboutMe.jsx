import styles from "../MainPage.module.css";
import React from "react";

export default function AboutMe() {

    return (
        <div className={styles.paragraph}>
            <h2>Software Engineer</h2>
            <p> Hi! I'm Alex, a motivated software engineer, passionate about software development and design.
                I'm looking
                to bring new and innovative ideas to the table.
            </p>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.tr}>
                    <th>Key Technical Skills</th>
                    <td>
                        Java,
                        JS, Typescript, React, Angular, Git, Python,
                        PostgreSQL, MySQL, CSS, HTML, Kotlin, GDScript, C, MatLab.
                        <p/>
                        Experience with Adobe
                        Photoshop and Illustrator.
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr className={styles.tr}>
                    <th>Employment History</th>
                    <td>
                        Vista Entertainment Solutions - Graduate Software Engineer
                        <p/>
                        Pipers Patent Attorneys - Database Engineer Intern
                        <p/>
                        Motion Design - Junior Software Developer
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr className={styles.tr}>
                    <th>Education</th>
                    <td>Bachelor of Software Engineering with Honors at the University of Auckland, Auckland
                        Grammar School
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr className={styles.tr}>
                    <th>Hobbies</th>
                    <td>Cycling, Skiing, Digital Art/Animation, Sketching, Gaming, Game Design,
                        Swimming and Video Editing.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}