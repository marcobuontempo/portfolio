import InfiniteCarousel from "../../common/InfiniteCarousel";
import Section from "../../common/Section";
import styles from "./styles.module.css";
import projects from "../../../data/projects.json";

type Props = {};

const PortfolioCollection = ({}: Props) => {
  return (
    <Section
      title="Portfolio Collection"
      id="portfolio"
      className={styles.portfolio}
    >
      <InfiniteCarousel className={styles.carousel} speed={30}>
        {projects.map((project, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((t, jdx) => (
                <li key={jdx}>{t}</li>
              ))}
            </ul>
            <ul>
              {project.links.map((link) => (
                <li key={link.name}>
                  <a href={link.address}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </InfiniteCarousel>
    </Section>
  );
};

export default PortfolioCollection;
