import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function ProjectsText() {
  return (
    <>
      <OutputText>
        Please note that ALL of these were created WITHOUT tutorial guidance,
        unless otherwise stated. Enjoy!
      </OutputText>

      <OutputText addExtraLine={false}>
        1. <span className={styles["bold-output"]}>Flamboyance Dashboard</span>{" "}
        <a
          href="https://github.com/marcobuontempo/flamboyance-cc/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://www.flamboyance.cc/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Website
        </a>
      </OutputText>
      <ul className={styles["list-output"]}>
        <li>
          <OutputText addExtraLine={false}>
            front-end analytics and insights dashboard for{" "}
            <a
              href="https://www.flamingo.finance/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              flamingo.finance
            </a>
            's DeFi platform
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            1st place 'Dashboard-Athon' winner, as a solo dev (including ~AUD$3k
            prize money)!{" "}
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={true}>
            tech stack: React (TypeScript) and Tailwind CSS
          </OutputText>
        </li>
      </ul>

      <OutputText addExtraLine={false}>
        2. <span className={styles["bold-output"]}>FOSS Front Row</span>{" "}
        <a
          href="https://github.com/marcobuontempo/foss-front-row"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://foss-front-row.marcobuontempo.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Website
        </a>{" "}
        <a
          href="https://www.youtube.com/watch?v=rvq_WHKXlh8"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Video
        </a>
      </OutputText>
      <ul className={styles["list-output"]}>
        <li>
          <OutputText addExtraLine={false}>
            a proof-of-concept project for an event ticketing system
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            full CRUD application for event management (i.e create and manage your ticketed events)
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            integrates QR code generation and scanning for event tickets
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={true}>
            tech stack: full MERN stack (MongoDB, Express, React, Nodejs), input validations (frontend+backend), JWT
            Auth, Redux, and Admin/User roles
          </OutputText>
        </li>
      </ul>

      <OutputText addExtraLine={false}>
        3. <span className={styles["bold-output"]}>Portfolio</span>{" "}
        <a
          href="https://github.com/marcobuontempo/portfolio"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://www.marcobuontempo.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Website
        </a>
      </OutputText>
      <ul className={styles["list-output"]}>
        <li>
          <OutputText addExtraLine={false}>
            the current website you're... looking at right now? entirely and
            uniquely built by yours truly!
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={true}>
            tech stack: React (TypeScript)
          </OutputText>
        </li>
      </ul>

      <OutputText addExtraLine={false}>
        4. <span className={styles["bold-output"]}>Museum of CSS Art</span>{" "}
        <a
          href="https://github.com/marcobuontempo/mocssa"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://mocssa.marcobuontempo.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Website
        </a>
      </OutputText>
      <ul className={styles["list-output"]}>
        <li>
          <OutputText addExtraLine={false}>
            a creative project, exclusively using CSS styling tricks to create artworks and designs
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            many artworks are created using only a single HTML &lt;div&gt; element,
            requiring out-of-the-box thinking, resourcefulness, and creativity
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            serves no functional purpose, just enjoy :)
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={true}>
            tech stack: you guessed it... CSS!
          </OutputText>
        </li>
      </ul>

      <OutputText addExtraLine={false}>
        5. <span className={styles["bold-output"]}>Task Planner JWD</span>{" "}
        <a
          href="https://github.com/marcobuontempo/Task-Planner-JWD"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>{" "}
        <a
          href="https://marcobuontempo.github.io/Task-Planner-JWD/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Website
        </a>
      </OutputText>
      <ul className={styles["list-output"]}>
        <li>
          <OutputText addExtraLine={false}>
            my first ever official web project: a simple task planner!
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={false}>
            created collaboratively during Generation Australia's bootcamp, with
            instructor guidance and training
          </OutputText>
        </li>
        <li>
          <OutputText addExtraLine={true}>
            tech stack: vanilla JavaScript and CSS
          </OutputText>
        </li>
      </ul>
    </>
  );
}
