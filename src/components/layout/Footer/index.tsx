import styles from "./styles.module.css";

type Props = {};

const characters = [
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
  "Blarg",
  "Mum",
  "Puppu",
];

const Footer = ({}: Props) => {
  return (
    <footer className={styles.footer}>
      {characters.map((icon) => (
        <div key={icon}>{icon}</div>
      ))}
      <p className={styles.quote}>Hello World.</p>
      <span className={styles.copyright}>Marco Buontempo &copy;</span>
    </footer>
  );
};

export default Footer;
