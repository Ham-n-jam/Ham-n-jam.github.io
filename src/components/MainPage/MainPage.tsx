import React from "react";
import styles from "./MainPage.module.css";

import "react-image-gallery/styles/css/image-gallery.css";
import "../../GlobalStyles.css"
import GoldenHourChronicles from "./Projects/ProjectInfo/GoldenHourChronicles";
import IncomeTicker from "./Projects/ProjectInfo/IncomeTicker";
import PokeBuilder from "./Projects/ProjectInfo/PokeBuilder";
import Tetrus from "./Projects/ProjectInfo/Tetrus";
import AboutMe from "./AboutMe/AboutMe";
import SectionHeadline from "./SectionHeadline";

export default function MainPage() {
    const allProjects = [
        {
            component: <Tetrus />,
            bgImage: 'tetrus/bg.png'
        },
        {
            component: <PokeBuilder />,
            bgImage: 'pokebuilder/bg.png'
        },
        {
            component: <IncomeTicker />,
            bgImage: 'income-ticker/bg.png'
        },
        {
            component: <GoldenHourChronicles />,
            bgImage: 'ghc/bg.png'
        },
    ]


    return (
        <div className={styles.body}>
            <SectionHeadline id="about_me" title="About Me " />
            <div className={`${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.png'})`
                 }}
            >
                <div className={`${styles.content} ${styles.angleGradientBg}`}>
                    <AboutMe />
                    <p/>
                </div>
            </div>

            <SectionHeadline id="personal_projects" title="Personal Projects " />
            {
                allProjects.map(((project, index) => {
                return (
                    <div className={`${styles.imageBg}`}
                         style={{
                             backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + project.bgImage})`
                         }}
                         key={index}
                    >
                        {project.component}
                    </div>
                )
                }))
            }
        </div>
    );
}