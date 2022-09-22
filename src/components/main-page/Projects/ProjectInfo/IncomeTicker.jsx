import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.css";
import {FaGithub} from "react-icons/fa";
import React from "react";
import Button from "../../../global/Button";

export default function IncomeTicker() {
    const imageFolder = "income-ticker"
    const imageNames = ["incomeTicker.png", "incomeSetup.png"]

    return <ProjectSummary
        title="Income Ticker"
        description={
            <>
                <p>A fun little app I made that you can put on in the background at work.</p>
                <p>Input your payment details and watch your income for the day slowly tick up as you work!
                    The ticker will take your off-days and lunch breaks into account so that it only ticks
                    over
                    while
                    you are on the clock.</p>
                <p>Developed using React and deployed to GitHub Pages.</p>
            </>}
        galleryImages={imageNames.map((imgName => (
            {
                original: `${process.env.PUBLIC_URL + '/images/' + imageFolder + '/' + imgName}`,
                thumbnail: `${process.env.PUBLIC_URL + '/images/' + imageFolder + '/' + imgName}`
            }
        )))}
        links={[
            <a className={styles.buttonLink} href={"https://ham-n-jam.github.io/income-ticker/#/"}>
                <Button
                    text={"Check it out"}
                    color={"gold"}
                />
            </a>,
            <a className={styles.whiteLink} href={"https://github.com/Ham-n-jam/income-ticker"}>
                <FaGithub className={"icon"}/>
                View GitHub repo
            </a>
        ]}
        isMirrored={true}
    />
}