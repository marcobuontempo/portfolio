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
      <InfiniteCarousel className={styles.carousel} speed={50}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <div className={styles.subcontainer}>
              <h3 className={styles.title}>{project.title}</h3>
              <ul className={styles.description}>
                {project.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <footer className={styles.subcontainer}>
              {/* <p className={styles.stack}>{project.stack.join(", ")}</p> */}
              <ul className={styles.stack}>
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <ul className={styles.links}>
                {project.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.address}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </InfiniteCarousel>
    </Section>
  );
};

export default PortfolioCollection;
