import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function ContactText() {
  return (
    <>
      <OutputText>
        <span className={styles["bold-output"]}>Email: </span>
        <a
          href="mailto:marcobuontempo96@gmail.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          marcobuontempo96@gmail.com
        </a>
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>GitHub: </span>
        <a
          href="https://github.com/marcobuontempo/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          github.com/marcobuontempo
        </a>
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>LinkedIn: </span>
        <a
          href="https://www.linkedin.com/in/marcobuontempo/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          linkedin.com/in/marcobuontempo
        </a>
      </OutputText>
    </>
  );
}
