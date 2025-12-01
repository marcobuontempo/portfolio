import Character from "../../common/Character";
import SwirlBackground from "../../common/SwirlBackground";
import styles from "./styles.module.css";

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
      <SwirlBackground
        className={styles.background}
        color1="#16003e"
        color2="#000"
        color3="#000"
        spinSpeed={2}
        isRotate={false}
        mouseInteraction={false}
        pixelFilter={1440}
      />

      <p className={styles.quote} data-hoverable="true">
        the best work is quietly seen.
      </p>

      <div className={styles.bottom}>
        <p className={styles.copyright}>Marco Buontempo &copy;</p>
        <ul className={styles.characters}>
          {shuffleArray([...characters, ...characters]).map(
            (character, idx) => (
              <li key={`${character}-${idx}`} className={styles.character}>
                <Character
                  name={character}
                  colours={["#4ff", "#16003e", "#222", "#003438"]}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
