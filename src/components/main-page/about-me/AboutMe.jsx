import styles from "../MainPage.module.css";
import React from "react";
import {FaGraduationCap, FaBriefcase, FaCode, FaHandPeace} from "react-icons/fa";

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
                <tr>
                    <th>
                        <div className={styles.pairContainer}><FaCode className={"icon"}/>Key Technical Skills</div>
                    </th>
                    <td>
                        Java, JS, Typescript, React, Angular, Git, Python,
                        SQL, CSS, HTML, Kotlin, GDScript, C, MatLab.
                        <p/>
                        Experience with Adobe
                        Photoshop and Illustrator.
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th>
                        <div className={styles.pairContainer}><FaBriefcase className={"icon"}/>Employment History</div>
                    </th>
                    <td>
                        Vista Entertainment Solutions - Graduate Software Engineer
                        <p/>
                        Pipers Patent Attorneys - Database Engineer Intern
                        <p/>
                        Motion Design - Junior Software Developer
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th>
                        <div className={styles.pairContainer}><FaGraduationCap className={"icon"}/>Education</div>
                    </th>
                    <td>Bachelor of Software Engineering with First Class Honors at the University of Auckland
                        <p/>
                        Auckland Grammar School
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th>
                        <div className={styles.pairContainer}><FaHandPeace className={"icon"}/>Hobbies</div>
                    </th>
                    <td>Cycling, Skiing, Digital Art/Animation, Sketching, Gaming, Game Design,
                        Swimming and Video Editing.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}