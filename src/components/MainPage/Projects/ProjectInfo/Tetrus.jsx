import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub} from "react-icons/fa";
import React from "react";
import Button from "../../../Global/Button";

export default function Tetrus() {
    return <ProjectSummary
        title="Tetrus"
        description={
            <>
                <p>The classic block-stacker game with a twist.</p>
                <p>Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!</p>
                <p>This project was created using Godot Engine and Aseprite for sprite art.</p>
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
            <a className={styles.whiteLink} href={"https://github.com/Ham-n-jam/tetrus-game"}>
                <FaGithub className={"icon"}/>
                View GitHub repo
            </a>
        ]}
        isMirrored={true}
    />
}