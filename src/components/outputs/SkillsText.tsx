import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function SkillsText() {
  return (
    <>
      <OutputText>
        <span className={styles["bold-output"]}>Languages:</span> HTML5, CSS3,
        JavaScript (ES6+), TypeScript, Python3
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Frameworks:</span> React,
        Express (Node.js), Tailwind CSS, Bootstrap5
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Databases:</span> MongoDB, SQL
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Tools and Technologies:</span>{" "}
        Git, GitHub, Terminal (Git Bash), Azure Cloud, npm, Agile and Scrum
        Methodology
      </OutputText>
    </>
  );
}
