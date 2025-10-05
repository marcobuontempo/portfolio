import Character from "../../common/Character";
import styles from "./styles.module.css";
import backgroundVideo from "../../../assets/background.mp4";

type Props = {};

const characters = [
  "foo",
  "bar",
  "baz",
  "qux",
  "quux",
  "corge",
  "grault",
  "garply",
  "waldo",
  "fred",
  "plugh",
  "xyzzy",
  "thud",
  "blarg",
  "mum",
  "puppu",
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Footer = ({}: Props) => {
  return (
    <footer className={styles.footer}>
      <video autoPlay muted loop className={styles.background}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <p className={styles.quote}>
        There is no end, for all we have is time.
      </p>

      <div className={styles.bottom}>
        <p className={styles.copyright}>Marco Buontempo &copy;</p>
        <ul className={styles.characters}>
          {shuffleArray([...characters, ...characters]).map(
            (character, idx) => (
              <li key={`${character}-${idx}`} className={styles.character}>
                <Character name={character} />
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
