import styles from "../MainPage.module.css";
import React from "react";
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaHandPeace,
    FaReact,
    FaAngular,
    FaCss3,
    FaJava,
    FaPython
} from "react-icons/fa";
import {
    SiCsharp,
    SiPostgresql,
    SiDotnet,
    SiKotlin,
    SiJavascript,
    SiTypescript,
    SiGodotengine,
    SiAdobephotoshop, SiAdobeillustrator,
    SiAseprite
} from "react-icons/si";

import TechSkill from "./TechSkill/TechSkill";

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
                        <div className={styles.flexBox}>
                            <TechSkill skillName='React' icon={<FaReact color={'#5bcded'}/>} />
                            <TechSkill skillName='Angular' icon={<FaAngular color={'#d22c30'} />} />
                            <TechSkill skillName='Typescript' icon={<SiTypescript color={'#3d98ff'} />} />
                            <TechSkill skillName='Javascript' icon={<SiJavascript color={'#e8d21d'} />} />
                            <TechSkill skillName='CSS' icon={<FaCss3 color={'#25acff'} />} />
                            <TechSkill skillName='Java' icon={<FaJava color={'#ffb471'} />} />
                            <TechSkill skillName='C#' icon={<SiCsharp color={'#9871cf'} />} />
                            <TechSkill skillName='.NET' icon={<SiDotnet color={'#9770ce'} />} />
                            <TechSkill skillName='SQL' icon={<SiPostgresql color={'#55acf5'} />} />
                            <TechSkill skillName='Kotlin' icon={<SiKotlin color={'#ff50a7'} />} />
                            <TechSkill skillName='GDScript' icon={<SiGodotengine color={'#5fbafd'} />} />
                            <TechSkill skillName='Python' icon={<FaPython color={'#fdda4d'} />} />
                        </div>
                        <p/>
                        <div className={styles.flexBox}>
                            <TechSkill skillName='Photoshop' icon={<SiAdobephotoshop color={'#2f9ef1'} />} />
                            <TechSkill skillName='Illustrator' icon={<SiAdobeillustrator color={'#ffb246'} />} />
                            <TechSkill skillName='Aseprite' icon={<SiAseprite color={'#fdfdfe'} />} />
                        </div>
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