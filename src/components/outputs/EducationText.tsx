import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function EducationText() {
  return (
    <>
      <OutputText>
        <span className={styles["bold-output"]}>
          Academy Xi (Generation Australia) - Front-End Web Development Bootcamp
          <span className={styles["italic-output"]}> [2021]</span>
        </span>
        <p className={styles["pad-left-output"]}>
          An intensive, full-time web development bootcamp where I completed over
          520 hours of hands-on learning. This program introduced me to core web
          technologies, including HTML, CSS, JavaScript, and Git/GitHub, while also
          covering key concepts for front-end development. We honed both technical
          and soft skills, with a focus on effective collaboration and mental
          exercises to prepare us for success in the workplace.
        </p>
      </OutputText>

      <OutputText>
        <span className={styles["bold-output"]}>
          Monash University - Bachelor of Business (Econometrics & Marketing)
          <span className={styles["italic-output"]}> [2017]</span>
        </span>
        <p className={styles["pad-left-output"]}>
          I studied a broad range of business disciplines, with a focus on marketing
          and econometrics, my areas of keen interest. This provided me with
          foundational business knowledge and insights into data analysis and
          consumer behavior. It was also my first exposure to working within teams
          to deliver large-scale projects, which helped me develop strong
          collaboration and project management skills.
        </p>
      </OutputText>

      <OutputText>
        <span className={styles["bold-output"]}>
          Salesian College - VCE
          <span className={styles["italic-output"]}> [2014]</span>
        </span>
        <p className={styles["pad-left-output"]}>
          Subjects: English, Further Maths, Maths Methods, Physics, Business
          Management
        </p>
      </OutputText>

      <OutputText>
        <p className={styles["bold-output"]}>Certifications:</p>
        <ul>
          <li>CompTIA A+</li>
          <li>Microsoft Azure Fundamentals AZ-900</li>
          <li>Harvard CS50x</li>
        </ul>
      </OutputText>
    </>
  );
}
