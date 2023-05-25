import styles from "./SideBar.module.css";
import {MdEmail} from "react-icons/md";
import {MdPhone} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {FaDownload} from "react-icons/fa";
import Button from "../Global/Button";

import "../../GlobalStyles.css"
import NavMenu from "./NavMenu/NavMenu";

export default function SideBar() {

    return (<>
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
                                    <MdEmail className={"icon"}/> alexbell0509@gmail.com
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="tel:04-6858-3505">
                                    <MdPhone className={"icon"}/> 04 6858 3505
                                </a>
                            </div>
                            <div>
                                <a className={styles.link} href="https://github.com/Ham-n-jam">
                                    <FaGithub className={"icon"}/> Ham-n-jam
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.verticalSpacer}>
                    <NavMenu />
                </div>

                <div className={styles.cvDownload}>
                    <a className={`${styles.link} ${styles.blackText}`}
                       href={`${process.env.PUBLIC_URL}/files/Alex_Bell_CV.pdf`} download="Alex_Bell_CV">
                        <Button
                            text={<>
                                <FaDownload className={"icon"}/>
                                Download my CV
                            </>}
                            color={"white"}
                        />
                    </a>
                </div>

            </div>
        </>);
}