import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function SkillsText() {
  return (
    <>
      <OutputText>
        These are the core technologies I'm most confident with and regularly 
        use in my projects. I've also been exposed to a variety of other tech 
        stacks (e.g. Java, Django, ETL tools, etc.), but due to my focus on front-end 
        development, these are where my main competencies are situated.
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Languages:</span> HTML5, CSS3,
        JavaScript (ES6+), TypeScript, Python3
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Frameworks:</span> React,
        Express (Node.js), Tailwind CSS, Bootstrap5
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Databases:</span> MongoDB, PostgreSQL
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Tools and Technologies:</span>{" "}
        Git, GitHub, Terminal (Git Bash), Azure Cloud, npm, Agile and Scrum
        Methodology, CI/CD processes
      </OutputText>
    </>
  );
}
