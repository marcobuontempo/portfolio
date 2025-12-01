import InfiniteCarousel from "../../common/InfiniteCarousel";
import Section from "../../common/Section";
import styles from "./styles.module.css";
import projects from "../../../data/projects";
import { FaArrowsAltH, FaExternalLinkAlt } from "react-icons/fa";

type Props = {};

const PortfolioCollection = ({}: Props) => {
  return (
    <Section
      title="Portfolio Collection"
      id="portfolio"
      className={styles.portfolio}
    >
      <InfiniteCarousel className={styles.carousel} speed={20} gapSize={8}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <div className={styles.subcontainer}>
              <h3 className={styles.title}>{project.title}</h3>
              {project.icon && (
                <project.icon className={styles.icon} color={project.colour} />
              )}
              <ul className={styles.description}>
                {project.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <footer className={styles.subcontainer}>
              <ul className={styles.stack}>
                {project.stack.map((s) => (
                  <li key={s.name} style={{ backgroundColor: s.colour }}>
                    {s.name}
                  </li>
                ))}
              </ul>

              <ul className={styles.links}>
                {project.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.address}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <span>{link.name}</span> <FaExternalLinkAlt />
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        ))}
      </InfiniteCarousel>

      <div className={styles.arrowsfooter}>
        <FaArrowsAltH className={styles.arrowsicon} />
      </div>
    </Section>
  );
};

export default PortfolioCollection;
