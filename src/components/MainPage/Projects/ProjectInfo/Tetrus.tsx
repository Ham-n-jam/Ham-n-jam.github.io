import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub} from "react-icons/fa";
import React from "react";
import Button from "../../../Global/Button";
import TechSkill from "../../../Global/TechSkill/TechSkill";
import {SiAseprite, SiGodotengine} from "react-icons/si";

export default function Tetrus() {
    return <ProjectSummary
        title="Tetrus"
        description={
            <>
                <p>My first crack at using the Godot Engine, it's the classic block-stacker game with a twist.</p>
                <p>Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!</p>
                <div className={styles.flexBox}>
                    <TechSkill skillName='Godot' icon={<SiGodotengine />} />
                    <TechSkill skillName='GitHub Pages' icon={<FaGithub />} />
                    <TechSkill skillName='Aseprite' icon={<SiAseprite />} />
                </div>
            </>}
        imageFolder={"tetrus"}
        imageNames = {["tetrusGameplay.png", "tetrusMenu.png", "tetrusGameOver.png"]}
        links={[
            <a className={styles.buttonLink} href={"https://ham-n-jam.github.io/tetrus-game/"}>
                <Button
                    text={"Play Tetrus"}
                    color={"animated"}
                />
            </a>,
        ]}
        isMirrored={true}
    />
}