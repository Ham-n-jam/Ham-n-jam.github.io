import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub} from "react-icons/fa";
import React from "react";

export default function PokeBuilder() {
    return <ProjectSummary
        title="PokéBuilder"
        description={
            <>
                <p>A modern webapp take on a PokéDex from the Pokémon video game series that allows users to build
                    and share Pokémon teams.</p>
                <p>Users can browse the Pokédex to look at Pokémon stats, types and descriptions.
                    They can also view, upvote, and comment on posted teams.</p>
                <p>This project was developed with a few friends using the MERN tech stack.</p>
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