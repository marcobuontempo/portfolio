import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function HelpText() {
  return (
    <>
      <OutputText addExtraLine={false}>
        To navigate to a category, use one of the following commands:
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>about</span>                     - learn about me
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>journey</span>                   - my journey into tech
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>skills</span>                    - my most comfortable technologies
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>experience</span>                - my background experience
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>education</span>                 - my education and studies
      </OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>projects</span>                  - showcase of projects i've created
      </OutputText>
      <OutputText addExtraLine={true} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>contact</span>                   - my details. get in touch with me!
      </OutputText>

      <OutputText addExtraLine={false}>Additional commands:</OutputText>
      <OutputText addExtraLine={false} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>theme [-c] &lt;themename&gt;</span>    - change the theme of the terminal.
        available themes: light, dark, neo, solarized
      </OutputText>
      <OutputText addExtraLine={true} className={styles["pad-left-output"]}>
        <span className={styles['bold-output']}>clear</span>                     - clears the contents of the terminal
      </OutputText>

      <OutputText>Type 'help' to see this list again.</OutputText>
    </>
  );
}
