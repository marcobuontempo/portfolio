import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function HelpText() {
  return (
    <>
      <OutputText addExtraLine={false}>
        To navigate to a category, use one of the following commands:
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        about
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        journey
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        skills
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        experience
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        education
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        projects
      </OutputText>
      <OutputText addExtraLine={true} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        contact
      </OutputText>

      <OutputText addExtraLine={false}>Additional commands:</OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        theme [-c] &lt;themename&gt;
      </OutputText>
      <OutputText addExtraLine={false} className={`${styles["pad-left-output"]} ${styles["italic-output"]}`}>
        available themes: light, dark, neo, solarized
      </OutputText>
      <OutputText addExtraLine={true} className={`${styles["pad-left-output"]} ${styles["bold-output"]}`}>
        clear
      </OutputText>

      <OutputText>Type 'help' to see this list again.</OutputText>
    </>
  );
}
