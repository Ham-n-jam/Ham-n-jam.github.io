import React from "react";
import styles from "./SideBar.module.css";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import ScrollToMenuItem from "../global/ScrollToMenuItem";
import Button from "../global/Button";

import "../../GlobalStyles.css"

export default function SideBar() {

    return (
        <>
            <div
                className={styles.navbar}
            >
                <div className={styles.wrapper}>
                    <img
                        className={styles.pfp}
                        src={`${process.env.PUBLIC_URL}/images/profilePhoto.png`}
                        alt={"Profile"}
                    />
                    <div className={styles.bg}>
                        <div>
                            <div className={styles.name}>Alex Bell</div>
                            <div className={styles.info}>
                                Software Engineer
                            </div>
                            <div>
                                <a className={styles.link} href="mailto:alexbell0509@gmail.com">
                                    <MdEmail className={"icon"} /> alexbell0509@gmail.com
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="tel:021-084-90623">
                                    <MdPhone className={"icon"} /> 021-084-90623
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="https://github.com/Ham-n-jam">
                                    <FaGithub className={"icon"} /> Ham-n-jam
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentMenu}>

                    <div className={styles.jumpToWrapper}>
                        <div className={styles.lineSeparator10} />
                        Jump To Section
                        <div className={styles.lineSeparator70} />
                    </div>

                    <ScrollToMenuItem href={"#about_me"} text={"About Me"}/>
                    <ScrollToMenuItem href={"#personal_projects"} text={"Personal Projects"}/>

                </div>

                <div className={styles.verticalSpacer} />

                <div className={styles.cvDownload}>
                    <Button text={
                        <a className={`${styles.link} ${styles.blackText}`} href={`${process.env.PUBLIC_URL}/files/Alex_Bell_CV.pdf`} download="Alex_Bell_CV">
                            <FaDownload className={"icon"}/>
                            Download My CV
                        </a>
                    } color={"white"}
                    />
                </div>

            </div>
        </>
    );
}