import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub, FaReact} from "react-icons/fa";
import React from "react";
import Button from "../../../Global/Button";
import TechSkill from "../../../Global/TechSkill/TechSkill";

export default function IncomeTicker() {
    return <ProjectSummary
        title="Income Ticker"
        description={
            <>
                <p>A joke app I made that you can put on in the background at work.</p>
                <p>Input your income rate and watch your total for the day slowly tick up as you work!
                    The ticker will take your off-days and lunch breaks into account so that it only ticks
                    over
                    while
                    you are on the clock.</p>
                <div className={styles.flexBox}>
                    <TechSkill skillName='React' icon={<FaReact />} />
                    <TechSkill skillName='GitHub Pages' icon={<FaGithub />} />
                </div>            </>}
        imageFolder={"income-ticker"}
        imageNames = {["incomeTicker.png", "incomeSetup.png"]}
        links={[
            <a className={styles.buttonLink} href={"https://ham-n-jam.github.io/income-ticker/#/"}>
                <Button
                    text={"Check it out"}
                    color={"animated"}
                />
            </a>
        ]}
        isMirrored={true}
    />
}