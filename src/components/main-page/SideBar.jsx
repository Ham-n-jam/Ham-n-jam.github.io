import React from "react";
import styles from "./SideBar.module.css";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


export default function SideBar() {

    return (
        <>
            <div
                className={styles.navbar}
            >
                <div className={styles.wrapper}>
                    <div className={styles.bg}>
                        <div>
                            <div className={styles.name}>Alex Bell</div>
                            <div className={styles.info}>
                                Software Engineer
                            </div>
                            <div>
                                <a className={styles.link} href="mailto:alexbell0509@gmail.com">
                                    <MdEmail /> alexbell0509@gmail.com
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="tel:021-084-90623">
                                    <MdPhone /> 021-084-90623
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="https://github.com/Ham-n-jam">
                                    <FaGithub /> Ham-n-jam
                                </a>
                            </div>
                        </div>
                    </div>
                    <img
                        className={styles.pfp}
                        src={`${process.env.PUBLIC_URL}/images/profilePhoto.jpg`}
                        alt={"Profile"}
                    />
                </div>
            </div>
        </>
    );
}