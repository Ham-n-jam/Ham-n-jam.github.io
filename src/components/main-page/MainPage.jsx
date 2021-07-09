import React from "react";
import styles from "./MainPage.module.css";
import Button from "../global/Button";
import ImageGallery from 'react-image-gallery';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "react-image-gallery/styles/css/image-gallery.css";
import "../../GlobalStyles.css"

export default function MainPage() {

    const tetrusImages = [
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusGameplay.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusGameplay.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusMenu.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusMenu.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusGameOver.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/tetrus/tetrusGameOver.png'}`,
        },
    ];

    const pokebuilderImages = [
        {
            original: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeDex.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeDex.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeDetail.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeDetail.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeBuilder.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeBuilder.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeTeams.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeTeams.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeTeam.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/pokebuilder/pokeTeam.png'}`,
        },
    ];

    const ghcImages = [
        {
            original: `${process.env.PUBLIC_URL + '/images/ghc/gameplay.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/ghc/gameplay.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/ghc/silhouettes.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/ghc/silhouettes.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/ghc/menu.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/ghc/menu.png'}`,
        },
        {
            original: `${process.env.PUBLIC_URL + '/images/ghc/loadGame.png'}`,
            thumbnail: `${process.env.PUBLIC_URL + '/images/ghc/loadGame.png'}`,
        },
    ];

    return (
        <div className={styles.body}>
            <a id="about_me">
                <div className={styles.whiteSeparator}>About Me</div>
            </a>
            <div className={`${styles.content} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blurredWorkspaceBg.jpg'})`
                }}
            >

                <div className={styles.paragraph}>
                    <h2>Final Year Software Engineering Student</h2>
                    <p> Hi! I'm Alex, a dedicated and motivated software engineering
                        student, passionate about software development and design. I'm looking
                        to bring new and innovative ideas to the table that can
                        improve company products.
                    </p>
                    <table className={styles.table}>
                        <tbody>
                        <tr className={styles.tr}>
                            <th>Key Technical Skills</th>
                            <td>
                                Java,
                                JS, Typescript, React, Git, Python,
                                PostgreSQL, MySQL, CSS, HTML, Kotlin, GDScript, C, MatLab.
                                <p />
                                Experience with Adobe
                                Photoshop and Illustrator.
                            </td>
                        </tr>

                        <div className={styles.lineSeparator} />

                        <tr className={styles.tr}>
                            <th>Employment History</th>
                            <td>
                                Pipers Patent Attorneys - Database Engineer Intern
                                <p />
                                Motion Design - Junior Software Developer
                            </td>
                        </tr>

                        <div className={styles.lineSeparator} />

                        <tr className={styles.tr}>
                            <th>Education</th>
                            <td>Bachelor of Software Engineering with Honors at the University of Auckland, Auckland Grammar School</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p />
            </div>
            <a id="personal_projects">
                <div className={styles.whiteSeparator}>Personal Projects</div>
            </a>

            <div className={`${styles.content} ${styles.pairContainer} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/tetrus/tetrusLogo.jpg'})`
                 }}
            >
                <div className={styles.imageGallery}>
                    <ImageGallery
                        items={tetrusImages}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                    />
                </div>

                <div className={styles.paragraph}>
                    <h2>Tetrus</h2>
                    <p>The classic block-stacker game with a twist.</p>
                    <p>Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!</p>
                    <p>This project was created using Godot Engine and Aseprite for sprite art.</p>
                    <div className={styles.flexRow} >
                        <Button text={"Play Tetrus"} color={"gold"} />
                        <p />
                        <a className={styles.whiteLink} href={"https://github.com/Ham-n-jam/tetrus-game"}>
                            <FaGithub className={"icon"} />
                            View GitHub repo
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.content} ${styles.pairContainer} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blurredIdeBg.jpg'})`
                 }}
            >
                <div className={styles.paragraph}>
                    <h2>PokéBuilder </h2>
                    <p>A modern webapp take on a PokéDex from the Pokémon video game series that allows users to build
                        and share Pokémon teams.</p>
                    <p>Users can browse the Pokédex to look at Pokémon stats, types and descriptions.
                        They can also view, upvote, and comment on posted teams.</p>
                    <p>This project was developed with a few friends using the MERN tech stack.</p>
                    <a className={styles.whiteLink} href={"https://github.com/seif-y/PokeBuilder"}>
                        <FaGithub className={"icon"} />
                        View GitHub repo
                    </a>
                </div>

                <div className={styles.imageGallery}>
                    <ImageGallery
                        items={pokebuilderImages}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                    />
                </div>
            </div>

            <div className={`${styles.content} ${styles.pairContainer} ${styles.imageBg}`}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/ghc/title.jpg'})`
                 }}
            >
                <div className={styles.imageGallery}>
                    <ImageGallery
                        items={ghcImages}
                        showPlayButton={false}
                        showBullets={false}
                        showNav={false}
                    />
                </div>

                <div>
                    <h2>Golden Hour Chronicles</h2>
                    <h5>(Work in progress)</h5>
                    <p>A Zelda-like 2D top-down action adventure game.</p>
                    <p>Follow Zach and his allies on a journey across the Kingdom of Eulyssia
                        to uncover the true nature of the world.</p>
                    <p>This project is being developed using Godot Engine and Aseprite for sprite art.</p>
                    <a className={styles.whiteLink} href={"https://twitter.com/GoldenHourC"}>
                        <FaTwitter className={"icon"} />
                        Follow GHC on Twitter
                    </a>
                </div>
            </div>

        </div>
    );
}