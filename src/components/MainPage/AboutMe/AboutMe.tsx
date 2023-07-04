import styles from "../MainPage.module.css";
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
import InfoCard from "../../Global/InfoCard/InfoCard";

export default function AboutMe() {
    const techSkillsHeader = <div className={styles.pairContainer}><FaCode className={"icon"}/>Key Technical Skills</div>
    const employmentHistoryHeader = <div className={styles.pairContainer}><FaBriefcase className={"icon"}/>Employment History</div>
    const educationHeader = <div className={styles.pairContainer}><FaGraduationCap className={"icon"}/>Education</div>
    const hobbiesHeader = <div className={styles.pairContainer}><FaHandPeace className={"icon"}/>Hobbies</div>

    return (
        <div className={styles.paragraph}>
            <p className={styles.infoParagraph}>
                I'm a dedicated and motivated software engineer, passionate about software development and design.
                I love learning new things and diving headfirst into tricky problems while helping out my coworkers.
                I'm currently based in Sydney.
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
                        <div className={styles.flexBox}>
                        <InfoCard title='Software Engineer' subTitle='Feb 2022 - June 2023' location='Vista Entertainment Solutions' />
                        <InfoCard title='Database Engineer Intern' subTitle='Summer 2021 - 2022' location='Pipers Patent Attorneys' />
                        <InfoCard title='Junior Software Developer' subTitle='Summer 2020 - 2021' location='Motion Design' />
                        </div>
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th className={styles.hideOnMobile}>
                        {educationHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{educationHeader}</div>  
                        <div className={styles.flexBox}>
                        <InfoCard title='Bachelor of Software Engineering' subTitle='With First Class Honors' location='University of Auckland' />
                        <InfoCard title='A-Level Cambridge' subTitle='Maths, Physics, Graphics, Design' location='Auckland Grammar School' />
                        </div>
                    </td>
                </tr>

                <div className={styles.lineSeparator}/>

                <tr>
                    <th className={styles.hideOnMobile}>
                        {hobbiesHeader}
                    </th>
                    <td>
                        <div className={styles.mobileOnlyHeader}>{hobbiesHeader}</div>
                        <p className={styles.infoParagraph}>Cycling, Skiing, Digital Art and Animation, Sketching, Gaming, Game Design,
                        Swimming and Video Editing.</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}