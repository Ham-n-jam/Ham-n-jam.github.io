import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaTwitter} from "react-icons/fa";
import TechSkill from "../../../Global/TechSkill/TechSkill";
import {SiAseprite, SiGodotengine} from "react-icons/si";

export default function GoldenHourChronicles() {
   return <ProjectSummary
        title="Golden Hour Chronicles"
        release="Work in progress"
        description={
            <>
                <p>This is my long-term project: An old-school Zelda-like 2D top-down action adventure game.</p>
                <p>Follow Zach and his allies on a journey across the Kingdom of Eulyssia
                    to uncover the true nature of the world.</p>
                <p>I'm currently developing Golden Hour Chronicles for Windows and I intend to release it as a commercial product on Steam.</p>
                <div className={styles.flexBox}>
                    <TechSkill skillName='Godot' icon={<SiGodotengine />} />
                    <TechSkill skillName='Aseprite' icon={<SiAseprite />} />
                </div>
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