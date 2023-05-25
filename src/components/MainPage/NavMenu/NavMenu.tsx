import styles from "./NavMenu.module.css";
import ScrollToMenuItem from "./ScrollToMenuItem";

export default function NavMenu() {

    return (
        <div className={styles.contentMenu}>
            <ScrollToMenuItem href={"#about"} text={"ABOUT"}/>
            <ScrollToMenuItem href={"#personal_projects"} text={"PROJECTS"}/>
        </div>
    );
}