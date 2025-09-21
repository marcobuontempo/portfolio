import InfiniteCarousel from "../../common/InfiniteCarousel";
import Section from "../../common/Section";
import styles from "./styles.module.css";

type Props = {};

const cards = [
  "Foo",
  "Bar",
  "Baz",
  "Qux",
  "Quux",
  "Corge",
  "Grault",
  "Garply",
  "Waldo",
  "Fred",
  "Plugh",
  "Xyzzy",
  "Thud",
];

const PortfolioCollection = ({}: Props) => {
  return (
    <Section
      title="Portfolio Collection"
      id="portfolio"
      className={styles.portfolio}
    >
      <InfiniteCarousel speed={30}>
        {cards.map((card, idx) => (
          <div className={styles.card} key={`${card}-${idx}`}>
            {card}
          </div>
        ))}
      </InfiniteCarousel>
    </Section>
  );
};

export default PortfolioCollection;
