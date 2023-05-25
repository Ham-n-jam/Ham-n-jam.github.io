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

import TechSkill from "../../Global/TechSkill/TechSkill";

export default function AboutMe() {
    const techSkillsHeader = <div className={styles.pairContainer}><FaCode className={"icon"}/>Key Technical Skills</div>
    const employmentHistoryHeader = <div className={styles.pairContainer}><FaBriefcase className={"icon"}/>Employment History</div>
    const educationHeader = <div className={styles.pairContainer}><FaGraduationCap className={"icon"}/>Education</div>
    const hobbiesHeader = <div className={styles.pairContainer}><FaHandPeace className={"icon"}/>Hobbies</div>

    return (
        <div className={styles.paragraph}>
            <p> I'm a motivated software engineer from New Zealand, passionate about development and design.
                I love diving headfirst into tricky problems and solving them while helping out my coworkers.
            </p>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th className={styles.hideOnMobile}>
                        {techSkillsHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{techSkillsHeader}</div>
                        <div className={styles.flexBox}>
                            <TechSkill skillName='Angular' icon={<FaAngular />} />
                            <TechSkill skillName='React' icon={<FaReact />} />
                            <TechSkill skillName='Typescript' icon={<SiTypescript />} />
                            <TechSkill skillName='Javascript' icon={<SiJavascript />} />
                            <TechSkill skillName='CSS' icon={<FaCss3 />} />
                            <TechSkill skillName='Java' icon={<FaJava />} />
                            <TechSkill skillName='C#' icon={<SiCsharp />} />
                            <TechSkill skillName='.NET' icon={<SiDotnet />} />
                            <TechSkill skillName='SQL' icon={<SiPostgresql />} />
                            <TechSkill skillName='Kotlin' icon={<SiKotlin />} />
                            <TechSkill skillName='GDScript' icon={<SiGodotengine />} />
                            <TechSkill skillName='Python' icon={<FaPython />} />
                        </div>
                        <p/>
                        <div className={styles.flexBox}>
                            <TechSkill skillName='Photoshop' icon={<SiAdobephotoshop />} />
                            <TechSkill skillName='Illustrator' icon={<SiAdobeillustrator />} />
                            <TechSkill skillName='Aseprite' icon={<SiAseprite />} />
                        </div>
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th className={styles.hideOnMobile}>
                        {employmentHistoryHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{employmentHistoryHeader}</div>
                        Vista Entertainment Solutions - Software Engineer
                        <p/>
                        Pipers Patent Attorneys - Database Engineer Intern
                        <p/>
                        Motion Design - Junior Software Developer
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th className={styles.hideOnMobile}>
                        {educationHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{educationHeader}</div>
                        Bachelor of Software Engineering with First Class Honors at the University of Auckland
                        <p/>
                        Auckland Grammar School
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th className={styles.hideOnMobile}>
                        {hobbiesHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{hobbiesHeader}</div>
                        Cycling, Skiing, Digital Art/Animation, Sketching, Gaming, Game Design,
                        Swimming and Video Editing.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}