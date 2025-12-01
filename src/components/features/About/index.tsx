import Section from "../../common/Section";
import styles from "./styles.module.css";

type Props = {};

const About = ({}: Props) => {
  return (
    <Section title="About" id="about" className={styles.about}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Hi! 👋 I'm Marco, a Full Stack Developer based in Melbourne,
          Australia.
        </h3>
        <div className={styles.information}>
          <p>
            I'm passionate about building intuitive, meaningful web experiences.
            While I work across the full stack, frontend development is where I
            feel most at home — the place where design, functionality, and user
            experience come together.
          </p>
          <p>
            My work is shaped by a problem-solving mindset with a focus on
            building efficient, user-friendly, and scalable solutions.
            Accessibility is a core part of that approach, and ensuring an
            inclusive experience is always a priority.
          </p>
          <p>
            Continuous learning drives a lot of what I do. New technologies,
            better patterns, and smarter ways to build are all fuels to my
            curiosity. This carries over to my life outside of web development,
            where you'll usually find me exploring new hobbies, traveling,
            contributing to technical projects, or spending time with family and
            friends.
          </p>
          <p>
            I'm focused on growth, quality, and building things that make an
            impact.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
