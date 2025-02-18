import OutputText from "../main/OutputText";
import styles from "./styles.module.css";

export default function ExperienceText() {
  return (
    <>
      <OutputText addExtraLine={false} className={styles["bold-output"]}>
        Infosys - Technology Associate (December 2021 - August 2023)
      </OutputText>
      <OutputText>
        At Infosys, I gained invaluable exposure to the IT workforce and enhanced
        my technical skill set across multiple domains. I received intensive
        training in areas such as Data Analytics, Java Development, and MERN stack
        development, which allowed me to sharpen my coding abilities. Through
        collaborative group capstone projects, I strengthened my teamwork and
        problem-solving skills, working alongside others to deliver impactful tech
        solutions. This experience has fueled my passion for continuous learning
        and growth in the tech space.
      </OutputText>
      
      <OutputText addExtraLine={false} className={styles["bold-output"]}>
        Roma Foods - Production Supervisor & OHS Coordinator (May 2017 -
        February 2021)
      </OutputText>
      <OutputText>
        In my role at Roma Foods, I developed critical skills in management, 
        problem-solving, and cross-department collaboration. Managing two production 
        lines with a diverse team, I was responsible for scheduling, planning, and 
        troubleshooting day-to-day operations. This role required quick thinking 
        and adaptability, often collaborating with various departments to resolve 
        challenges. Ultimately, I gained confidence in my resourcefulness, 
        creativity, and ability to lead and work effectively within a team.
      </OutputText>
    </>
  );
}
