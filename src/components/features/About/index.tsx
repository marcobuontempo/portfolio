import Section from "../../common/Section";
import styles from "./styles.module.css";

type Props = {};

const About = ({}: Props) => {
  return (
    <Section title="About" id="about" className={styles.about}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut hic
        deleniti temporibus voluptate illum, culpa ea repudiandae quos a odio
        aliquam nam in esse? Fugit voluptatem fuga saepe sapiente libero eum
        placeat laboriosam eaque. Laudantium ut recusandae praesentium, omnis
        eaque soluta pariatur, deserunt assumenda placeat laborum, dolorem quae
        ipsum distinctio corrupti? Totam, architecto assumenda maxime,
        asperiores soluta voluptas nihil hic veniam consectetur ipsa pariatur
        iste minima voluptates culpa, ratione perspiciatis velit earum quia
        voluptatibus? Aliquid illum maxime nam incidunt doloremque ipsa beatae,
        placeat distinctio voluptas provident commodi iure laboriosam sequi
        perferendis, aperiam nemo voluptate nobis eligendi expedita. Ipsum,
        vitae rem!
      </p>
    </Section>
  );
};

export default About;
