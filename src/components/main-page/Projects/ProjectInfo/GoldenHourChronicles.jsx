import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaTwitter} from "react-icons/fa";
import React from "react";

export default function GoldenHourChronicles() {
   return <ProjectSummary
        title="Golden Hour Chronicles"
        subTitle="(Work in progress)"
        description={
            <>
                <p>A Zelda-like 2D top-down action adventure game.</p>
                <p>Follow Zach and his allies on a journey across the Kingdom of Eulyssia
                    to uncover the true nature of the world.</p>
                <p>This project is being developed using Godot Engine and Aseprite for sprite art.</p>
            </>}
        imageFolder={"ghc"}
        imageNames = {["gameplay.png", "dialogue.png", "loadGame.png", "silhouettes.png"]}
        links={[
            <a className={styles.whiteLink} href={"https://twitter.com/GoldenHourC"}>
                <FaTwitter className={"icon"}/>
                Follow GHC on Twitter
            </a>
        ]}
    />
}