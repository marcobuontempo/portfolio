import styles from "./styles.module.css";

type Props = {};

const icons = [
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

const Footer = ({}: Props) => {
  return (
    <footer className={styles.footer}>
      {icons.map((icon) => (
        <div key={icon}>{icon}</div>
      ))}
    </footer>
  );
};

export default Footer;
