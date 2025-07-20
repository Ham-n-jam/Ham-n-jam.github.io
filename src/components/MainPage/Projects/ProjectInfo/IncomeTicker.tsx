import ProjectSummary from "../ProjectSummary/ProjectSummary";
import styles from "../../MainPage.module.scss";
import { FaGithub, FaReact } from "react-icons/fa";
import Button from "../../../Global/Button";
import TechSkill from "../../../Global/TechSkill/TechSkill";

export default function IncomeTicker() {
  return (
    <ProjectSummary
      title="Income Ticker"
      release="2022"
      description={
        <>
          <p>
            A joke app I made for a friend that you can put on in the background
            at work.
          </p>
          <p>
            Input your income rate and watch your total for the day slowly tick
            up as you work! The ticker will take your off-days and lunch breaks
            into account so that it only ticks over while you are on the clock.
          </p>
          <div className={styles.flexBox}>
            <TechSkill skillName="React" icon={<FaReact />} />
            <TechSkill skillName="GitHub Pages" icon={<FaGithub />} />
          </div>
        </>
      }
      imageFolder={"income-ticker"}
      imageNames={["incomeTicker.webp", "incomeSetup.webp"]}
      links={[
        <a
          className={styles.buttonLink}
          href={"https://brickahax.github.io/income-ticker/#/"}
        >
          <Button text={"Check it out"} color={"animated"} />
        </a>,
      ]}
      isMirrored={true}
      themeClassname="income-ticker"
    />
  );
}
