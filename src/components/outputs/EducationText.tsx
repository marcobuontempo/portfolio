import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function EducationText() {
  return (
    <>
      <OutputText>
        <span className={styles["bold-output"]}>
          Academy Xi (Generation Australia) - Front-End Web Development Bootcamp
        </span>
        <p className={styles["pad-left-output"]}>
          An intensive full-time web development bootcamp with over 520
          dedicated hours. I was introduced to HTML, CSS, and JavaScript (among
          others) as we learnt about frontend technologies, as well as other
          important areas such as Git and GitHub. Additionally, we regularly
          practised soft-skills and mental exercises to enable us to excel
          with others in the workplace.
        </p>
      </OutputText>

      <OutputText>
        <span className={styles["bold-output"]}>
          Monash University - Bachelor of Business (Econometrics & Marketing)
        </span>
        <p className={styles["pad-left-output"]}>
          Learned general knowledge of business sectors, such as accounting,
          economics, law, etc. Focused my units towards marketing and
          econometrics, as these were my most enjoyable and appealing fields.
          This was also my first exposure in working in teams to deliver large
          projects.
        </p>
      </OutputText>
      <OutputText>
        <span className={styles["bold-output"]}>Salesian College - VCE</span>
        <p className={styles["pad-left-output"]}>
          Subjects: English, Further Maths, Maths Methods, Physics, Business
          Management
        </p>
      </OutputText>
    </>
  );
}
