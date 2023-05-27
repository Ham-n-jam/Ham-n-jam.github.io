import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub, FaNode, FaReact} from "react-icons/fa";
import TechSkill from "../../../Global/TechSkill/TechSkill";
import {SiExpress, SiMongodb} from "react-icons/si";

export default function PokeBuilder() {
    return <ProjectSummary
        title="PokéBuilder"
        release="2021"
        description={
            <>
                <p>A modern webapp take on a PokéDex from the Pokémon video game series I made with a few friends
                    that allows users to build and share Pokémon teams.</p>
                <p>Users can browse the Pokédex to look at Pokémon stats, types and descriptions.
                    They can also view, upvote, and comment on posted teams.</p>
                <div className={styles.flexBox}>
                    <TechSkill skillName='MongoDB' icon={<SiMongodb />} />
                    <TechSkill skillName='Express' icon={<SiExpress />} />
                    <TechSkill skillName='React' icon={<FaReact />} />
                    <TechSkill skillName='Node' icon={<FaNode />} />
                </div>
            </>}
        imageFolder={"pokebuilder"}
        imageNames = {["pokeDex.png", "pokeDetail.png", "pokeBuilder.png", "pokeTeams.png", "pokeTeam.png"]}
        links={[
            <a className={styles.whiteLink} href={"https://github.com/seif-y/PokeBuilder"}>
                <FaGithub className={"icon"}/>
                View GitHub repo
            </a>
        ]}
    />
}