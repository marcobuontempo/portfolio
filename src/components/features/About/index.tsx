import Section from "../../common/Section";
import styles from "./styles.module.css";

type Props = {};

const About = ({}: Props) => {
  return (
    <Section title="About" id="about" className={styles.about}>
      <div className={styles.content}>
        <p className={styles.bold}>
          Hi! 👋 I'm Marco, a Full Stack Developer based in Melbourne,
          Australia.
        </p>
        <p>
          I'm passionate about building intuitive, impactful web experiences.
          While I work across the full stack, my real focus is on frontend
          development — where design, functionality, and user experience come
          together.
        </p>
        <p>
          I approach projects with a problem-solving mindset, aiming to build
          efficient, user-friendly, and scalable solutions. I care deeply about
          web accessibility and make it a priority in major projects, ensuring
          the sites I build are inclusive for all users.
        </p>
        <p>
          I'm also committed to continuous learning — always exploring new
          technologies and refining my skills to deliver better results. Outside
          of tech, I enjoy traveling, exploring new hobbies, and spending time
          with family and friends.
        </p>
        <p>
          Always curious, always learning, always ready for the next challenge.
        </p>
      </div>
    </Section>
  );
};

export default About;
